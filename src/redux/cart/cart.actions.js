import { CartActionTypes } from "./cart.types";



export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
    // No need payload in this action.
    // see the reducer, we only toggle the state
})