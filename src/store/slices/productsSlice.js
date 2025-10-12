import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { amazonApi } from '../../services/amazonApi';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (searchParams) => {
    const response = await amazonApi.searchProducts(searchParams.query, {
      searchIndex: searchParams.category || 'All'
    });
    return response.items;
  }
);

export const fetchFeaturedProducts = createAsyncThunk(
  'products/fetchFeaturedProducts',
  async () => {
    // For featured products, we'll search for popular electronics
    const response = await amazonApi.searchProducts('electronics', {
      searchIndex: 'Electronics',
    });
    return response.items;
  }
);

export const fetchTrendingProducts = createAsyncThunk(
  'products/fetchTrendingProducts',
  async () => {
    // For trending products, we'll search for best sellers
    const response = await amazonApi.searchProducts('best sellers', {
      searchIndex: 'All',
    });
    return response.items;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    featured: [],
    trending: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle fetchProducts
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Handle fetchFeaturedProducts
      .addCase(fetchFeaturedProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFeaturedProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.featured = action.payload;
      })
      .addCase(fetchFeaturedProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Handle fetchTrendingProducts
      .addCase(fetchTrendingProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTrendingProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.trending = action.payload;
      })
      .addCase(fetchTrendingProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
