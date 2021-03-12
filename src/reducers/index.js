import React from 'react';

const initialState = {
  items: [
    {
      id: 0,
      image: 'https://s3.przepisy.pl/przepisy3ii/img/variants/800x0/kremowa-zupa-z-kurek-2.jpg',
      name: 'Kremowa zupa z kurek',
      diet: 'MEAT',
      time: 60,
    },
    {
      id: 1,
      image: 'https://s3.przepisy.pl/przepisy3ii/img/variants/800x0/poziom18990271589440687000.jpg',
      name: 'Blok czekoladowy',
      diet: 'VEGETARIAN',
      time: 300,
    },
    {
      id: 2,
      image: 'https://s3.przepisy.pl/przepisy3ii/img/variants/800x0/tofu-w-curry529074.jpg',
      name: 'Tofu w rajskim curry',
      diet: 'VEGAN',
      time: 10,
    },
  ],
  diet: {
    meat: false,
    vegetarian: false,
    vegan: false,
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case('CHANGE_CHECKBOX'):
    console.log( action.payload.event);
      return {
        ...state,
        diet: {
          ...state.diet,
          [action.payload.event.target.id]: !state[action.payload.event.target.id],
        },
      };
    default:
      return state;
  }
};

// if (action.id === 'meat') {
//   this.setState((prevState) => ({
//     diet: {
//       ...prevState.diet,
//       meat: !diet.meat,
//     },
//   }));
// } else if (e.target.id === 'vegetarian') {
//   this.setState((prevState) => ({
//     diet: {
//       ...prevState.diet,
//       vegetarian: !diet.vegetarian,
//     },
//   }));
// } else if (e.target.id === 'vegan') {
//   this.setState((prevState) => ({
//     diet: {
//       ...prevState.diet,
//       vegan: !diet.vegan,
//     },
//   }));
// }

export default rootReducer;
