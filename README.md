# US Price Store - Amazon Price Comparison

A professional Amazon price comparison website for the US market built with React, Redux, and Tailwind CSS. Compare Amazon prices and find the best deals on products you love.

**Author:** Syed  
**Developed by:** [digitalcloud.no](https://digitalcloud.no)

## Prerequisites

- Node.js (LTS version recommended)
- npm or yarn
- Amazon Product Advertising API credentials

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Environment Variables:
   - Create a `.env` file in the root directory
   - Add your Amazon Product Advertising API credentials:
     ```
     AWS_ACCESS_KEY=your_access_key
     AWS_SECRET_KEY=your_secret_key
     AMAZON_ASSOCIATE_TAG=your_associate_tag
     API_ENDPOINT=https://webservices.amazon.com/paapi5/searchitems
     API_REGION=us-east-1
     API_HOST=webservices.amazon.com
     ```

## Getting Amazon API Credentials

1. Sign up for the Amazon Product Advertising API:
   - Visit [Amazon Product Advertising API](https://affiliate-program.amazon.com/home)
   - Sign in to your Amazon Associates account
   - Navigate to Tools → Product Advertising API
   - Register for API access

2. Get your credentials:
   - After registration, you'll receive:
     - Access Key ID
     - Secret Access Key
     - Associate Tag

3. Security Note:
   - Never commit your `.env` file to version control
   - Keep your API credentials secure
   - Use environment variables in production

## Development

Run the development server:
```bash
npm run dev
```
- Open [http://localhost:5173](http://localhost:5173) in your browser
- The page will reload when you make changes
- Any lint errors will show in the console

## Build for Production

```bash
npm run build
```

This will create an optimized production build in the `dist` folder.

## Testing

```bash
npm run test
```

## Features

- Product price comparison
- Price history tracking
- Product search and filtering
- Category browsing
- Shopping cart functionality
- Responsive design
- SEO optimization

## Tech Stack

- React
- Redux Toolkit
- React Router
- Tailwind CSS
- Vite
- Amazon Product Advertising API

## Project Structure

```
USPriceStore/
├── src/
│   ├── components/
│   │   └── layout/
│   │       ├── Header.jsx
│   │       └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Category.jsx
│   │   ├── Product.jsx
│   │   └── Search.jsx
│   ├── services/
│   │   └── amazonApi.js
│   ├── store/
│   │   ├── index.js
│   │   └── slices/
│   │       ├── productsSlice.js
│   │       └── cartSlice.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── server/
│   └── index.js
├── .env
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```
