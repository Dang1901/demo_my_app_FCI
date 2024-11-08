import { useCallback, useMemo } from 'react';
import ShippingForm from './ShippingForm'; 

export default function ProductPage({ productId, referrer, theme }) {
//   function handleSubmit(orderDetails) {
//     post('/product/' + productId + '/buy', {
//       referrer,
//       orderDetails,
//     });
//   }
const handleSubmit = useCallback((orderDetails) => {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }, [productId, referrer]);

  return (
    <div className={theme}>
      <ShippingForm onSubmit={handleSubmit} />
    </div>
  );
}

function post(url, data) {
  // Imagine this sends a request...
  console.log('POST /' + url);
  console.log(data);
}
