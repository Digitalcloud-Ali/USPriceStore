import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About US Price Store</h3>
            <p className="text-gray-300">
              Compare Amazon prices and find the best deals on products you love.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-gray-300 hover:text-white">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/deals" className="text-gray-300 hover:text-white">
                  Today's Deals
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: support@uspricestore.com</li>
              <li>Follow us on social media</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} US Price Store. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Developed by <a href="https://digitalcloud.no" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">digitalcloud.no</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
