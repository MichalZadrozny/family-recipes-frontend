import React from 'react';
import PropTypes from 'prop-types';
import styles from 'components/RecipePreviewWrapper/RecipePreview/RecipePreview.module.scss';

const RecipePreview = ({ image, name, diet, time }) => (
		<li className={styles.recipePreview}>
			<img src={image} alt={name} className={styles.image} />
			<div className={styles.info}>
				<div className={styles.details}>
					<p>{diet}</p>
					<p>{time} min</p>
				</div>
				<p>{name}</p>
			</div>
		</li>
	);


RecipePreview.propTypes = {
	image: PropTypes.string,
	name: PropTypes.string.isRequired,
	diet: PropTypes.string.isRequired,
	time: PropTypes.number.isRequired,
};

RecipePreview.defaultProps = {
	image: "/src/assets/img/image-not-found.png",
}

export default RecipePreview;
