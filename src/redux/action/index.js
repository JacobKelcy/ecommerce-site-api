//for Add Item From Cart
export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

//for Delete Item From Cart
export const deleteCart = (product) => {
  return {
    type: "DELETEITEM",
    payload: product,
  };
};
