export const getShoppingCartItemsQuantity = (cartItems) => {
    return cartItems.reduce((quantityAcc, item) => quantityAcc + item.quantity, 0);
};
