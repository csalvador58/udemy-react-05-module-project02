import { Fragment } from 'react';
import HeaderCartButton from './HeaderCartButton';
import mealsImg from '../../assets/meals.jpg';
import classes from './Header.module.css';

function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImg} alt='Delicious food on table' />
      </div>
    </Fragment>
  );
}

export default Header;
