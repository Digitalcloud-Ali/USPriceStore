<div align="center">

# 🛒 US Price Store - Amazon Price Comparison

### A professional Amazon price comparison website for the US market

[![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)](https://reactjs.org/)
[![Redux](https://img.shields.io/badge/Redux-Toolkit-purple?logo=redux)](https://redux-toolkit.js.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.1.4-646CFF?logo=vite)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-LTS-green?logo=node.js)](https://nodejs.org/)

**Author:** Syed  
**Developed by:** [digitalcloud.no](https://digitalcloud.no)

Compare Amazon prices and find the best deals on products you love with real-time price tracking and comprehensive product information.

</div>

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Getting Amazon API Credentials](#-getting-amazon-api-credentials)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [Deployment](#-deployment)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

- 🔍 **Product Search** - Search for products across Amazon's vast catalog
- 💰 **Price Comparison** - Compare prices and find the best deals
- 📊 **Price History Tracking** - Track price changes over time
- 🏷️ **Category Browsing** - Browse products by categories
- 🛒 **Shopping Cart** - Add products to cart for easy tracking
- ⭐ **Product Reviews** - View customer ratings and reviews
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- ⚡ **Fast Performance** - Built with Vite for lightning-fast load times
- 🎨 **Modern UI** - Beautiful interface built with Tailwind CSS
- 🔒 **Secure API Integration** - Server-side API calls for security

---

## 🛠️ Tech Stack

### Frontend
- **React 18.2** - Modern UI library
- **Redux Toolkit** - State management
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Next-generation frontend tooling
- **Axios** - HTTP client
- **Chart.js** - Data visualization for price history

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Web application framework
- **Amazon Product Advertising API** - Product data and pricing

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (LTS version v18 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Amazon Product Advertising API credentials** (see setup guide below)
- **Git** - For version control

To verify your installations:
```bash
node --version  # Should be v18.x or higher
npm --version   # Should be 9.x or higher
```

---

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Digitalcloud-Ali/USPriceStore.git
cd USPriceStore
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages for both the frontend and backend.

---

## ⚙️ Configuration

### Environment Variables Setup

1. **Create a `.env` file** in the root directory:
   ```bash
   cp .env.example .env
   ```

2. **Add your Amazon Product Advertising API credentials** to `.env`:
   ```env
   # Amazon Product Advertising API Credentials
   AWS_ACCESS_KEY=your_access_key_here
   AWS_SECRET_KEY=your_secret_key_here
   AMAZON_ASSOCIATE_TAG=your_associate_tag_here
   
   # API Configuration
   API_ENDPOINT=https://webservices.amazon.com/paapi5/searchitems
   API_REGION=us-east-1
   API_HOST=webservices.amazon.com
   ```

3. **Important Security Notes:**
   - ⚠️ Never commit your `.env` file to version control
   - ⚠️ Keep your API credentials secure
   - ⚠️ Use environment variables in production deployments
   - ⚠️ The `.env` file is already in `.gitignore`

---

## 🔑 Getting Amazon API Credentials

To use the Amazon Product Advertising API, you need to register for an Amazon Associates account and obtain API credentials.

### Step-by-Step Guide:

1. **Sign up for Amazon Associates Program**
   - Visit [Amazon Associates](https://affiliate-program.amazon.com/home)
   - Create an account or sign in with your existing Amazon account
   - Complete the registration process (you'll need a website or mobile app)

2. **Access Product Advertising API**
   - Once approved, navigate to **Tools → Product Advertising API**
   - Click on **"Add to Product Advertising API"** or **"Manage Your Credentials"**
   - Accept the license agreement

3. **Get Your Credentials**
   After registration, you'll receive three important credentials:
   - **Access Key ID** (AWS_ACCESS_KEY)
   - **Secret Access Key** (AWS_SECRET_KEY)
   - **Associate Tag** (AMAZON_ASSOCIATE_TAG)

4. **Important Notes**
   - 📝 You must generate at least **one sale** within the first 180 days to maintain API access
   - 🔒 Keep your credentials secure and never share them
   - 📊 Monitor your API usage to stay within limits
   - 🌍 Ensure you're using the correct marketplace (this project is for US market)

### API Documentation
- [Product Advertising API Documentation](https://webservices.amazon.com/paapi5/documentation/)
- [Getting Started Guide](https://webservices.amazon.com/paapi5/documentation/quick-start.html)

---

## 💻 Usage

### Development Mode

The project includes both a **frontend** (React) and **backend** (Express) server.

#### Start Both Servers Concurrently

```bash
npm run dev
```

This command starts:
- **Backend API Server** on [http://localhost:4002](http://localhost:4002)
- **Frontend Development Server** on [http://localhost:5173](http://localhost:5173)

#### Start Servers Separately

**Backend only:**
```bash
npm run server
```

**Frontend only (requires backend to be running):**
```bash
npx vite
```

### Development Features

- 🔄 **Hot Module Replacement (HMR)** - See changes instantly without page reload
- 🐛 **Error Overlay** - Clear error messages displayed in browser
- ✅ **ESLint Integration** - Code quality checks as you develop
- 📱 **Responsive Preview** - Test on different screen sizes

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start both frontend and backend in development mode |
| `npm run server` | Start only the backend server |
| `npm run build` | Build the frontend for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check code quality |

---

## 🏗️ Build for Production

### Create Production Build

```bash
npm run build
```

This will:
- ✅ Optimize and minify your code
- ✅ Generate static assets in the `dist` folder
- ✅ Create source maps for debugging
- ✅ Tree-shake unused code

### Preview Production Build

```bash
npm run preview
```

This starts a local server to preview the production build at [http://localhost:4173](http://localhost:4173)

### Production Deployment

For production deployment, you'll need to:

1. **Build the frontend:**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to a static hosting service (Vercel, Netlify, AWS S3, etc.)

3. **Deploy the backend server** separately to a Node.js hosting service

See the [Deployment](#-deployment) section for detailed instructions.

---

## 📁 Project Structure

```
USPriceStore/
├── src/                          # Frontend source code
│   ├── components/              # Reusable React components
│   │   └── layout/             # Layout components (Header, Footer)
│   │       ├── Header.jsx      # Navigation header
│   │       └── Footer.jsx      # Site footer
│   ├── pages/                  # Page components (routes)
│   │   ├── Home.jsx           # Landing page with featured products
│   │   ├── Category.jsx       # Category browse page
│   │   ├── Product.jsx        # Individual product details
│   │   └── Search.jsx         # Search results page
│   ├── services/              # API service layer
│   │   └── amazonApi.js       # Amazon API integration
│   ├── store/                 # Redux state management
│   │   ├── index.js          # Redux store configuration
│   │   └── slices/           # Redux slices
│   │       ├── productsSlice.js  # Products state
│   │       └── cartSlice.js      # Shopping cart state
│   ├── App.jsx               # Main application component
│   ├── main.jsx              # Application entry point
│   └── index.css             # Global styles (Tailwind)
├── server/                   # Backend server
│   └── index.js             # Express server with Amazon API integration
├── .env                     # Environment variables (not committed)
├── .env.example            # Environment variables template
├── .gitignore              # Git ignore rules
├── index.html              # HTML entry point
├── package.json            # Project dependencies and scripts
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── vite.config.js          # Vite build configuration
└── README.md               # This file

```

### Key Directories

- **`/src`** - All frontend React code
- **`/server`** - Backend Express API server
- **`/dist`** - Production build output (generated)
- **`/node_modules`** - Dependencies (generated)

---

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)

#### Vercel Deployment

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Build and Deploy:**
   ```bash
   npm run build
   vercel --prod
   ```

3. **Configure Environment Variables** in Vercel dashboard

#### Netlify Deployment

1. **Build Settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`

2. **Deploy:**
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod
   ```

### Backend Deployment (Node.js Server)

#### Heroku Deployment

1. **Install Heroku CLI** and login:
   ```bash
   heroku login
   ```

2. **Create a new Heroku app:**
   ```bash
   heroku create your-app-name
   ```

3. **Set environment variables:**
   ```bash
   heroku config:set AWS_ACCESS_KEY=your_key
   heroku config:set AWS_SECRET_KEY=your_secret
   heroku config:set AMAZON_ASSOCIATE_TAG=your_tag
   heroku config:set API_REGION=us-east-1
   heroku config:set API_HOST=webservices.amazon.com
   ```

4. **Deploy:**
   ```bash
   git push heroku main
   ```

#### Alternative: Railway, Render, or DigitalOcean

These platforms also support Node.js deployments. Refer to their documentation for specific instructions.

### Environment Variables for Production

Ensure all environment variables are properly set in your production environment:

```env
AWS_ACCESS_KEY=your_production_key
AWS_SECRET_KEY=your_production_secret
AMAZON_ASSOCIATE_TAG=your_production_tag
API_ENDPOINT=https://webservices.amazon.com/paapi5/searchitems
API_REGION=us-east-1
API_HOST=webservices.amazon.com
NODE_ENV=production
```

---

## 🐛 Troubleshooting

### Common Issues and Solutions

#### Issue: "Missing required environment variable"

**Solution:**
- Ensure your `.env` file exists and contains all required variables
- Check that variable names match exactly (case-sensitive)
- Restart the server after modifying `.env`

```bash
# Verify your .env file
cat .env
```

#### Issue: "Port 4002 is already in use"

**Solution:**
```bash
# Find process using port 4002
lsof -i :4002  # macOS/Linux
netstat -ano | findstr :4002  # Windows

# Kill the process
kill -9 <PID>  # macOS/Linux
taskkill /PID <PID> /F  # Windows
```

#### Issue: Amazon API returns "InvalidSignature" error

**Solution:**
- Verify your AWS credentials are correct
- Check that your system time is synchronized
- Ensure API_REGION matches your Amazon Associates account region
- Verify you're using the correct API endpoint

#### Issue: "No products found" or empty search results

**Solution:**
- Confirm your Amazon Associates account is active
- Check that you've made at least one sale (if past 180 days)
- Verify API credentials have proper permissions
- Check API rate limits haven't been exceeded

#### Issue: Frontend can't connect to backend

**Solution:**
- Ensure backend server is running on port 4002
- Check for CORS errors in browser console
- Verify API endpoint configuration in frontend
- Check firewall/network settings

#### Issue: Build fails with memory error

**Solution:**
```bash
# Increase Node memory limit
NODE_OPTIONS=--max_old_space_size=4096 npm run build
```

### Getting Help

If you encounter other issues:

1. Check the [GitHub Issues](https://github.com/Digitalcloud-Ali/USPriceStore/issues)
2. Review [Amazon PA-API Documentation](https://webservices.amazon.com/paapi5/documentation/)
3. Check browser console and server logs for detailed error messages

---

## 🤝 Contributing

We welcome contributions to improve US Price Store! Here's how you can help:

### How to Contribute

1. **Fork the repository**
   ```bash
   # Click "Fork" on GitHub, then clone your fork
   git clone https://github.com/your-username/USPriceStore.git
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Write clean, readable code
   - Follow existing code style
   - Add comments for complex logic
   - Test your changes thoroughly

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "Add: brief description of your changes"
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Describe your changes clearly

### Code Style Guidelines

- Use **ES6+ JavaScript** features
- Follow **React best practices**
- Use **functional components** with hooks
- Keep components **small and focused**
- Write **meaningful commit messages**
- Run `npm run lint` before committing

### Areas for Contribution

- 🐛 Bug fixes
- ✨ New features
- 📝 Documentation improvements
- 🎨 UI/UX enhancements
- ⚡ Performance optimizations
- 🧪 Test coverage

---

## 📄 License

This project is developed by [digitalcloud.no](https://digitalcloud.no) and created by Syed.

For licensing inquiries, please contact the author.

---

## 📞 Contact & Support

- **Author:** Syed
- **Website:** [digitalcloud.no](https://digitalcloud.no)
- **Repository:** [GitHub](https://github.com/Digitalcloud-Ali/USPriceStore)

---

## 🙏 Acknowledgments

- [Amazon Product Advertising API](https://webservices.amazon.com/paapi5/documentation/) for product data
- [React](https://reactjs.org/) and [Vite](https://vitejs.dev/) teams for amazing tools
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- All contributors who help improve this project

---

<div align="center">

**⭐ If you find this project useful, please consider giving it a star on GitHub! ⭐**

Made with ❤️ by [Syed](https://digitalcloud.no)

</div>
