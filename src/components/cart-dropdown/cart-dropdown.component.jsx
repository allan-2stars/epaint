import {  } from "./cart-dropdown.styles.scss";
import CustomButton from '../custom-button/custom-button.component'

const CartDropDown = () => {
    return ( 
        <div className="cart-dropdown">
            <div className="cart-items">
                <CustomButton>Go To Checkout</CustomButton>
            </div>
        </div>
     );
}
 
export default CartDropDown;