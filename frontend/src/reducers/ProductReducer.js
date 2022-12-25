export const product_reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCT_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_PRODUCT_SUCCESS':
      return { ...state, product: action.payload, loading: false };
    case 'FETCH_PRODUCT_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const products_reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_PRODUCTS_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_PRODUCTS_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
