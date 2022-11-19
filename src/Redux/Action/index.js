// adding item to cart
export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

// deleting item to cart
export const delCart = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};
