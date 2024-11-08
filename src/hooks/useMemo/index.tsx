import React, { useMemo, useState } from 'react';
import { Button, TextField, List, ListItem, Typography } from '@mui/material';

type Product = {
  name: string;
  price: number;
};

const UseMemo = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [products, setProducts] = useState<Product[]>([]);

  const handleSubmit = () => {
    setProducts([...products, {
      name,
      price: +price
    }]);
    setName(''); 
    setPrice('');
  };


  const total = useMemo(() => {
    console.log('tinh toan lai...');
    return products.reduce((result, prod) => result + prod.price, 0);
  }, [products]);

  return (
    <div style={{ padding: '20px' }}>
      <TextField
        label="Product Name"
        value={name}
        onChange={e => setName(e.target.value)}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Price"
        value={price}
        onChange={e => setPrice(e.target.value)}
        variant="outlined"
        fullWidth
        margin="normal"
        type="number"
      />
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleSubmit} 
        style={{ marginTop: '10px' }}
      >
        Add
      </Button>

      <Typography variant="h6" style={{ marginTop: '20px' }}>Total: ${total}</Typography>
      <List>
        {products.map((product, index) => (
          <ListItem key={index}>
            {product.name} - ${product.price}
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default UseMemo;
