import React from 'react';
import shopData from './collections';
import CollectionPreview from '../../components/collections/collection-preview';

class ShopPage extends React.Component {
	state = {
		collections: shopData,
	};
	render() {
		return (
			<div  className='shop-page'>
				{this.state.collections.map(({id, ...otherCollectionProps}) => {
					return (
				<CollectionPreview
					key={id} {...otherCollectionProps}
							/>
					);
				})}
			</div>
		);
	}
}
export default ShopPage;
