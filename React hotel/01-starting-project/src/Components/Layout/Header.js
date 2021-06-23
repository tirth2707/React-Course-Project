import { Fragment } from 'react';
import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meals.jpg';
import classes from '../Layout/Header.module.css';
const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>Jain Food</h1>
            <HeaderCartButton />
        </header>
        <div>
            <img src={mealsImage} alt="JAIN HOTEL" />
        </div>
    </Fragment>

};

export default Header;