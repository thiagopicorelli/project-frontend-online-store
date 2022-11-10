const key = 'cartProducts';
const TIMEOUT = 500;
const SUCCESS_STATUS = 'OK';

if (!JSON.parse(localStorage.getItem(key))) {
  localStorage.setItem(key, JSON.stringify([]));
}
const readCartItems = () => JSON.parse(localStorage.getItem(key));

export const saveCartItems = (addCartProduct) => localStorage
  .setItem(key, JSON.stringify(addCartProduct));

const simulateRequest = (response) => (callback) => {
  setTimeout(() => {
    callback(response);
  }, TIMEOUT);
};

export const getCartItems = () => new Promise((resolve) => {
  const addCartProduct = readCartItems();
  simulateRequest(addCartProduct)(resolve);
});

export const addCart = (cart) => new Promise((resolve) => {
  if (cart) {
    const addCartProduct = readCartItems();
    saveCartItems([...addCartProduct, cart]);
  }
  simulateRequest(SUCCESS_STATUS)(resolve);
});

export const removeitem /* camelCase */ = (cart) => new Promise((resolve) => {
  const addCartProduct = readCartItems();
  saveCartItems(addCartProduct.filter((s) => s.trackId !== cart.trackId));// trackId??
  simulateRequest(SUCCESS_STATUS)(resolve);
});
