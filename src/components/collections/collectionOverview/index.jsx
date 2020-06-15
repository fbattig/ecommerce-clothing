import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../collection-preview'
import { selectCollections } from '../../../redux/shop/shopSelector'
import './styles.scss';

const index =({collections}) => {
  return <div className='collections-overview'>
    	{collections.map(({ id, ...otherCollectionProps }) => {
				return <CollectionPreview key={id} {...otherCollectionProps} />;
			})}
  </div>;
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
})
export default connect(mapStateToProps)(index);
