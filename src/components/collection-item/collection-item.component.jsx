  
import './collection-item.styles.scss';
import CustomButton from "../custom-button/custom-button.component";
import { addItem } from "../../redux/cart/cart.actions";

import { connect } from "react-redux";

const CollectionItem = ({ item, onAddItem }) => {
  const {name, price, imageUrl,} = item

  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton onClick={()=>onAddItem(item)} inverted>Add to Cart</CustomButton>
    </div>
  );

}

// const mapDipatchToProps = (dispatch, theItem) => ({
//   onAddItem: () => dispatch(addItem(theItem))
// })
const mapDipatchToProps = (dispatch) => ({
  onAddItem: (theItem) => dispatch(addItem(theItem))
})

export default connect(null, mapDipatchToProps)(CollectionItem)