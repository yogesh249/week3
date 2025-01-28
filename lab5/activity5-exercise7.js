const products = [
    { id: 1, name: 'Apple', price: 1.99 },
    { id: 2, name: 'Banana', price: 0.99 },
    { id: 3, name: 'Orange', price: 2.49 },
    { id: 4, name: 'Grape', price: 3.99 }
  ];
  
  const expensiveProducts = products.filter(function (product) {
    return product.price > 2.0;
  });
  
  console.log("Expensive products:", expensiveProducts);