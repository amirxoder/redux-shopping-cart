// const isInCart = (state, id) => {
//   const result = !!state.selectedItems.find((item) => item.id === id);
//   return result;
// };

// const quntityCounter = (state, id) => {
//   const index = state.selectedItems.findIndex((item) => item.id === id);
//   if (index === -1) {
//     return false;
//   } else {
//     return state.selectedItems[index].quntity;
//   }
// };

// export { shorten, isInCart, quntityCounter };

const shorten = (title) => {
  const splitedTitle = title.split(" ");
  const newTitle = `${splitedTitle[0]} ${splitedTitle[1]}`;
  return newTitle;
};

export { shorten };
