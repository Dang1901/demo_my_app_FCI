import React, { useState } from 'react'
import ProductPage from './ProductPage';
import { Button } from '@mui/material';
import ShippingForm from './ShippingForm';

const useCallback = () => {
  const  [isDark, setIsDark] = useState(false);
  const [parentCount, setParentCount] = useState(0);
 
  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={e => setIsDark(e.target.checked)}
        />
        Dark mode
      </label>
      <Button onClick={() => setParentCount(parentCount + 1)}>
        Re-render Parent Component
      </Button>
      <ShippingForm
        onSubmit={(orderDetails) => console.log('Order details:', orderDetails)}
      />
      <hr />
      <ProductPage
        referrer="wizard_of_oz"
        productId={123}
        theme={isDark ? 'dark' : 'light'}
      />
    </>
  )
}

export default useCallback