import AsyncStorage from '@react-native-async-storage/async-storage';

let basketAsync = [];

async function retrieveData() {
  try {
    basketAsync = (await AsyncStorage.getItem('basket')) || [];

    if (value !== null) {
      // We have data!!
      console.log(`This is the new ${value}`);
    }
  } catch (error) {
    console.log(error);
    // Error retrieving data
  }
}

retrieveData;

export const initialState = {
  basket: basketAsync,
  // basket: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

// Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      const existingIndex = state.basket.findIndex(
        (item) => item.id === action.item.id
      );
      if (existingIndex >= 0) {
        state.basket[existingIndex] = {
          ...state.basket[existingIndex],
          cartQuantity: state.basket[existingIndex].cartQuantity + 1,
        };
      } else {
        let tempProductItem = { ...action.item, cartQuantity: 1 };
        state.basket.push(tempProductItem);
      }

    case 'DECREASE_CART':
      const itemIndex = state.basket.findIndex(
        (item) => item.id === action.item.id
      );

      if (state.basket[itemIndex].cartQuantity > 1) {
        state.basket[itemIndex].cartQuantity -= 1;
      } else if (state.basket[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.basket.filter(
          (item) => item.id !== action.item.id
        );
        state.basket = nextCartItems;
      }
    case 'REMOVE_CART':
      state.basket.map((cartItem) => {
        if (cartItem.id === action.item.id) {
          const nextCartItems = state.basket.filter(
            (item) => item.id !== cartItem.id
          );
          state.basket = nextCartItems;
        }
        return state;
      });

    case 'GET_TOTAL':
      let { total, quantity } = state.basket.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;

    case 'CLEAR_CART':
      state.basket = [];

    default:
      return state;
  }
};

export default reducer;
