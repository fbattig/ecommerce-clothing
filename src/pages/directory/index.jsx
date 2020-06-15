import React from 'react';
import { connect } from 'react-redux';
import MenuItems from '../menuItems/MenuItems';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directorySelector';
import './styles.scss';

const Directory = ({ sections }) => (
	<div className="directory-menu">
		{sections.map(({ id, ...otherSectionProps }) => {
			return <MenuItems key={id} {...otherSectionProps} />;
		})}
	</div>
);

// const mapStateToProps = ({ directory }) => ({
// 	sections: directory.sections,
// });

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections,
});
export default connect(mapStateToProps)(Directory);
