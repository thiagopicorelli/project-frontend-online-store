const key = 'cartProducts';

if (!JSON.parse(localStorage.getItem(key))) {
  localStorage.setItem(key, JSON.stringify([]));
}

export const saveCartItems = (addCartProduct) => localStorage
  .setItem(key, JSON.stringify(addCartProduct));

export const getCartItems = () => JSON.parse(localStorage.getItem(key));

export const addCart = (cart) => {
  if (cart) {
    const addCartProduct = getCartItems();
    saveCartItems([...addCartProduct, cart]);
  }
};

export const removeitem = (cart) => new Promise((resolve) => {
  const addCartProduct = getCartItems();
  saveCartItems(addCartProduct.filter((s) => s.trackId !== cart.trackId));// trackId??
  simulateRequest(SUCCESS_STATUS)(resolve);
});
