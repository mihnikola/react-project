import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { uiActions } from '../../store/ui-slice';
const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector(state=>state.cart.totalQuantity);
  const showHandler =(e)=>{
    e.preventDefault();
    dispatch(uiActions.showCart());
  }
  return (
    <button className={classes.button} onClick={showHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
