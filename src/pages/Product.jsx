import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Product = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { items: products, loading } = useSelector((state) => state.products);

  useEffect(() => {
    // TODO: Fetch product details
  }, [productId, dispatch]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image Section */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg">
            {/* TODO: Add product image */}
          </div>
        </div>

        {/* Product Info Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Product Name
          </h1>
          
          <div className="mb-6">
            <p className="text-2xl font-bold text-primary-600">$XX.XX</p>
            <p className="text-sm text-gray-500">Price updated 2 hours ago</p>
          </div>

          <div className="space-y-4 mb-6">
            <button className="w-full btn btn-primary">
              View on Amazon
            </button>
            <button className="w-full btn btn-secondary">
              Add to Cart
            </button>
          </div>

          <div className="border-t pt-6">
            <h2 className="text-xl font-semibold mb-4">Product Description</h2>
            <p className="text-gray-600">
              Product description will be displayed here.
            </p>
          </div>
        </div>
      </div>

      {/* Price History Section */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Price History</h2>
        {/* TODO: Add price history chart */}
      </div>

      {/* Similar Products Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-6">Similar Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* TODO: Add similar products */}
        </div>
      </div>
    </div>
  );
};

export default Product;
