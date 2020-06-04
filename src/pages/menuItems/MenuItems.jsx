import React from 'react';
import './styles.scss';

const MenuItems = ({ title, imageUrl, size }) => {
	return (
		<div style={{ backgroundImage: `url(${imageUrl})` }}
			className={`${size} menu-item` } >
			<div className="content">
				<h1 className="title">{title.toUpperCase()}</h1>
				<span className="subtitle">SHOP NOW</span>
			</div>
		</div>
	);
};

export default MenuItems;