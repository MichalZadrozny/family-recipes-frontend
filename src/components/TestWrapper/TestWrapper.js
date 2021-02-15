/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Filter from 'components/Filter/Filter';
import RecipePreviewWrapper from 'components/RecipePreviewWrapper/RecipePreviewWrapper';
import { connect } from 'react-redux';
import { PropTypes, objectOf, bool } from 'prop-types';

// class TestWrapper extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       items: [...initialRecipes],
//       diet: {
//         meat: false,
//         vegetarian: false,
//         vegan: false,
//       },
//     };
//   }

//   updateItems = (e) => {
//     e.preventDefault();

//     let newItems = [];
//     const { form } = e.target;

//     for (let i = 0; i < form.length; i += 1) {
//       if (form[i].value === 'true') {
//         const tempItems = initialRecipes.filter((item) => item.diet === form[i].id.toUpperCase());
//         newItems = [...newItems, ...tempItems];
//       }
//     }

//     if (newItems.length === 0) {
//       newItems = initialRecipes;
//     }

//     this.setState({
//       items: newItems,
//     });
//   };

//   handleCheckboxChange = (e) => {
//     const { diet } = this.state;

//     if (e.target.id === 'meat') {
//       this.setState((prevState) => ({
//         diet: {
//           ...prevState.diet,
//           meat: !diet.meat,
//         },
//       }));
//     } else if (e.target.id === 'vegetarian') {
//       this.setState((prevState) => ({
//         diet: {
//           ...prevState.diet,
//           vegetarian: !diet.vegetarian,
//         },
//       }));
//     } else if (e.target.id === 'vegan') {
//       this.setState((prevState) => ({
//         diet: {
//           ...prevState.diet,
//           vegan: !diet.vegan,
//         },
//       }));
//     }
//   };

//   render() {
//     const { diet, items } = this.state;

//     return (
//       <div>
//         <h1>Hello</h1>
//         {/* <Filter
//           updateItems={this.updateItems}
//           diet={diet}
//           handleCheckboxChange={this.handleCheckboxChange}
//         />
//         <RecipePreviewWrapper items={items} /> */}

//       </div>
//     );
//   }
// }

const TestWrapper = ({ items, diet }) => (
  <>
    {/* <Filter
      updateItems={this.updateItems}
      diet={diet}
      handleCheckboxChange={this.handleCheckboxChange}
    /> */}
    {console.log({ diet })}
    <RecipePreviewWrapper items={items} />
  </>
);

const mapStateToProps = ({ items, diet }) => ({ items, diet });

export default connect(mapStateToProps)(TestWrapper);

TestWrapper.propTypes = {
  diet: PropTypes.objectOf(bool).isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      image: PropTypes.string,
      name: PropTypes.string,
      diet: PropTypes.string,
      time: PropTypes.number,
    }),
  ).isRequired,
};
