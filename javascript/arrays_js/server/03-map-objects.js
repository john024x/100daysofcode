const orders = [
  { amount: 250, name: 'Juan', address: 'Si' },
  { amount: 300, name: 'Pedro', address: 'No' },
  { amount: 400, name: 'Ana', address: 'Si' },
  { amount: 500, name: 'Jose', address: 'No' },
];

// const ammounts = orders.map((item) => item.amount);
const tax = orders.map((item) => {
  // item.tax = 0.19;
  return {
    ...item,
    tax: 0.19,
  };
});
console.log('old', orders);
console.log('new', tax);
const filters = orders.filter(
  (item) => item.address === 'Si' && item.amount > 300
);
console.log('delivery', filters);
