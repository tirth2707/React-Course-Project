import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.Module.css';
const HeaderCartButton = props => {
    return (
    <button className={classes.button}>
        <span className={classes.icon}>
            <CartIcon></CartIcon>
        </span>

        <span>
            Your Cart
        </span>
        <span className={classes.badge}>
            4
        </span>

    </button>
    );
}   

export default HeaderCartButton;