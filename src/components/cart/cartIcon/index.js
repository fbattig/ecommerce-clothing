import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect'
import { toggleCartHidden } from '../../../redux/cart/cartActions';
import { selectCartItemsCount } from '../../../redux/cart/cartSelector';
import './styles.scss';

import { ReactComponent as ShoppingIcon } from '../../../assets/shopping-bag.svg';

const index = ({ toggleCartHidden, itemCount }) => {
	return (
		<div className="cart-icon">
			<ShoppingIcon className="shopping-icon" onClick={toggleCartHidden} />
			<span className="item-count">{itemCount}</span>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector ({
	itemCount: selectCartItemsCount,
});
export default connect(mapStateToProps, mapDispatchToProps)(index);
