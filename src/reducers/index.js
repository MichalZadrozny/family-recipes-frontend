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
      return {
        ...state,
        diet: {
          ...state.diet,
          [action.payload.event.target.id]: !state.diet[action.payload.event.target.id],
        },
      };
    case('CLEAR_FILTER_CHECKBOXES'):
      return {
        ...state,
        diet: {
          vegan: false,
          vegetarian: false,
          meat: false
        }
      };
    default:
      return state;
}
};

export default rootReducer;
