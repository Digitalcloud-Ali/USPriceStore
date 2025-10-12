const express = require('express');
const cors = require('cors');
const axios = require('axios');
const crypto = require('crypto');
require('dotenv').config();

const app = express();
const port = 4002;

// Validate required environment variables
const requiredEnvVars = [
  'AWS_ACCESS_KEY',
  'AWS_SECRET_KEY',
  'AMAZON_ASSOCIATE_TAG',
  'API_REGION'
];

requiredEnvVars.forEach(varName => {
  if (!process.env[varName]) {
    console.error(`Missing required environment variable: ${varName}`);
    process.exit(1);
  }
});

app.use(cors());
app.use(express.json());

const generateSignature = (payload, timestamp) => {
  try {
    const service = 'ProductAdvertisingAPI';
    const region = process.env.API_REGION;
    const secretKey = process.env.AWS_SECRET_KEY;
    const accessKey = process.env.AWS_ACCESS_KEY;
    const algorithm = 'AWS4-HMAC-SHA256';
    const method = 'POST';
    const canonicalUri = '/paapi5/searchitems';
    const host = process.env.API_HOST || 'webservices.amazon.com';

    // Use a fixed current date instead of system time
    const currentDate = new Date('2023-11-15T09:30:00Z');
    const amzDate = currentDate.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z');
    const dateStamp = amzDate.slice(0, 8);

    // Ensure consistent payload
    const payloadHash = crypto.createHash('sha256').update(payload).digest('hex');

    // Step 1: Create canonical request
    const canonicalHeaders = [
      `content-encoding:amz-1.0`,
      `content-type:application/json; charset=utf-8`,
      `host:${host}`,
      `x-amz-date:${amzDate}`,
      `x-amz-target:com.amazon.paapi5.v1.ProductAdvertisingAPIv1.SearchItems`
    ].join('\n') + '\n';

    const signedHeaders = 'content-encoding;content-type;host;x-amz-date;x-amz-target';

    const canonicalRequest = [
      method,
      canonicalUri,
      '', // Canonical query string (empty for POST)
      canonicalHeaders,
      signedHeaders,
      payloadHash
    ].join('\n');

    console.log('\nCanonical Request:\n' + canonicalRequest + '\n');

    // Step 2: Create string to sign
    const credentialScope = `${dateStamp}/${region}/${service}/aws4_request`;
    const stringToSign = [
      algorithm,
      amzDate,
      credentialScope,
      crypto.createHash('sha256').update(canonicalRequest).digest('hex')
    ].join('\n');

    console.log('\nString to Sign:\n' + stringToSign + '\n');

    // Step 3: Calculate signature
    const kSecret = `AWS4${secretKey}`;
    const kDate = crypto.createHmac('sha256', kSecret).update(dateStamp).digest();
    const kRegion = crypto.createHmac('sha256', kDate).update(region).digest();
    const kService = crypto.createHmac('sha256', kRegion).update(service).digest();
    const kSigning = crypto.createHmac('sha256', kService).update('aws4_request').digest();
    const signature = crypto.createHmac('sha256', kSigning).update(stringToSign).digest('hex');

    console.log('\nSignature:', signature);

    return {
      signature,
      amzDate,
      dateStamp,
      credentialScope,
      signedHeaders
    };
  } catch (error) {
    console.error('Error generating signature:', error);
    throw error;
  }
};

// Add root endpoint for health check
app.get('/', (req, res) => {
  res.json({ 
    status: 'ok',
    message: 'Server is running'
  });
});

app.post('/api/search', async (req, res) => {
  try {
    console.log('\n--- New Search Request ---');
    // Log environment variables at the start of the request
    console.log('Environment check:', {
      hasAccessKey: !!process.env.AWS_ACCESS_KEY,
      hasSecretKey: !!process.env.AWS_SECRET_KEY,
      hasAssociateTag: !!process.env.AMAZON_ASSOCIATE_TAG,
      region: process.env.API_REGION,
      accessKeyPrefix: process.env.AWS_ACCESS_KEY?.substring(0, 5),
      secretKeyLength: process.env.AWS_SECRET_KEY?.length
    });

    const { query = '', searchIndex = 'All' } = req.body;
    console.log('Received search request:', { query, searchIndex });

    if (!query) {
      return res.status(400).json({ error: 'Query is required' });
    }

    const timestamp = new Date('2023-11-15T09:30:00Z').toISOString();
    const payload = {
      Keywords: query,
      Resources: [
        "Images.Primary.Medium",
        "ItemInfo.Title",
        "Offers.Listings.Price",
        "CustomerReviews.Count",
        "CustomerReviews.StarRating"
      ],
      SearchIndex: searchIndex,
      PartnerTag: process.env.AMAZON_ASSOCIATE_TAG,
      PartnerType: "Associates",
      Marketplace: "www.amazon.com"
    };

    console.log('\nRequest payload:', JSON.stringify(payload, null, 2));
    
    const {
      signature,
      amzDate,
      credentialScope,
      signedHeaders
    } = generateSignature(JSON.stringify(payload), timestamp);

    const authHeader = `AWS4-HMAC-SHA256 Credential=${process.env.AWS_ACCESS_KEY}/${credentialScope}, SignedHeaders=${signedHeaders}, Signature=${signature}`;

    console.log('\nFinal request details:', {
      url: process.env.API_ENDPOINT || 'https://webservices.amazon.com/paapi5/searchitems',
      timestamp,
      amzDate,
      credentialScope,
      signedHeaders,
      authHeaderPrefix: authHeader.substring(0, 100) + '...'
    });

    const response = await axios.post(
      process.env.API_ENDPOINT || 'https://webservices.amazon.com/paapi5/searchitems',
      payload,
      {
        headers: {
          'Authorization': authHeader,
          'Content-Encoding': 'amz-1.0',
          'Content-Type': 'application/json; charset=utf-8',
          'Host': process.env.API_HOST || 'webservices.amazon.com',
          'X-Amz-Date': amzDate,
          'X-Amz-Target': 'com.amazon.paapi5.v1.ProductAdvertisingAPIv1.SearchItems'
        }
      }
    );

    console.log('\nAmazon API response:', {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
      dataPreview: JSON.stringify(response.data).substring(0, 200) + '...'
    });

    res.json(response.data);
  } catch (error) {
    console.error('\nError in /api/search:', {
      message: error.message,
      code: error.code,
      response: {
        data: error.response?.data,
        status: error.response?.status,
        statusText: error.response?.statusText,
        headers: error.response?.headers
      },
      request: error.config ? {
        method: error.config.method,
        url: error.config.url,
        headers: {
          ...error.config.headers,
          'Authorization': '***REDACTED***'
        },
        data: error.config.data
      } : 'No request config available'
    });

    res.status(error.response?.status || 500).json({
      error: error.message,
      code: error.code,
      details: error.response?.data,
      timestamp: new Date('2023-11-15T09:30:00Z').toISOString()
    });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log('Environment variables loaded:', {
    accessKey: process.env.AWS_ACCESS_KEY?.slice(0, 5) + '...',
    associateTag: process.env.AMAZON_ASSOCIATE_TAG,
    region: process.env.API_REGION,
    host: process.env.API_HOST,
    endpoint: process.env.API_ENDPOINT
  });
}).on('error', (error) => {
  console.error('Server failed to start:', error);
  if (error.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use. Please try a different port or kill the process using this port.`);
  }
  process.exit(1);
});
