import { useEffect, useReducer } from 'react';
import Product from '../components/Product';
import { products_reducer } from '../reducers/ProductReducer';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HomeScreen = () => {
  //const [products, setProducts] = useState([]);
  const [{ loading, error, products }, dispatch] = useReducer(
    products_reducer,
    {
      products: [],
      loading: true,
      error: '',
    }
  );
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_PRODUCTS_REQUEST' });
      try {
        const result = await axios.get('/api/products');
        dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: result.data });
      } catch (error) {
        dispatch({ type: 'FETCH_PRODUCTS_FAIL', payload: error.message });
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Featured Products</h1>
      <div className="products">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <Row>
            {products.map((product) => (
              <Col key={product.slug} sm={6} md={4} lg={3} className="mg-3">
                <Product product={product} />
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
};
export default HomeScreen;
