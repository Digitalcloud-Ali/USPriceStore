import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/api';

class AmazonAPI {
  async searchProducts(query, options = {}) {
    try {
      console.log('Sending search request:', { query, options });
      const response = await axios.post(`${API_BASE_URL}/search`, {
        query,
        searchIndex: options.searchIndex || 'All'
      });

      console.log('Received response:', response.data);
      const items = response.data?.SearchResult?.Items || [];
      return {
        items: items.map(item => ({
          id: item.ASIN,
          title: item.ItemInfo.Title.DisplayValue,
          price: item.Offers?.Listings?.[0]?.Price?.DisplayAmount || 'N/A',
          image: item.Images?.Primary?.Medium?.URL || 'https://via.placeholder.com/200',
          rating: parseFloat(item.CustomerReviews?.StarRating?.Value || 0),
          reviews: parseInt(item.CustomerReviews?.Count?.Value || 0, 10),
          link: item.DetailPageURL
        }))
      };
    } catch (error) {
      console.error('Error fetching products:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
        config: {
          url: error.config?.url,
          method: error.config?.method,
          headers: error.config?.headers,
          data: error.config?.data
        }
      });
      // Return mock data for development
      return {
        items: [
          {
            id: '1',
            title: 'Sample Product',
            price: '$99.99',
            image: 'https://via.placeholder.com/200',
            rating: 4.5,
            reviews: 100,
            link: '#'
          }
        ]
      };
    }
  }
}

export const amazonApi = new AmazonAPI();
