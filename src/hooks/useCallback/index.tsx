import React, { useState } from 'react'
import ProductPage from './ProductPage';

const useCallback = () => {
  const  [isDark, setIsDark] = useState(false);
 
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