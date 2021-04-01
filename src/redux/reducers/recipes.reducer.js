import React from 'react';
import recipeConstants from 'constants/recipe.constants';

const initialState = {
  items: [
    {
      id: 0,
      image: 'https://s3.przepisy.pl/przepisy3ii/img/variants/800x0/kremowa-zupa-z-kurek-2.jpg',
      name: 'Kremowa zupa z kurek',
      description: 'Przepyszna zupa. Dzieci będą szczęśliwe i teściowa też.',
      ingredients: [
        {
          name: 'Porcja rosołowa',
          amount: 500,
          unit: 'gram',
        },
        {
          name: 'Rosół z kury Knorr',
          amount: 2,
          unit: 'sztuki',
        },
        {
          name: 'Cebula',
          amount: 1,
          unit: 'sztuka',
        },
        {
          name: 'Ciemne piwo',
          amount: 100,
          unit: 'mililitrów',
        },
      ],
      steps: [
        'Ugotuj bulion z porcji rosołowej, przypraw oraz warzyw. Następnie odcedź go.',
        'Obierz ziemniaki, pokrój je w kostkę i dodaj do odcedzonego bulionu.',
        'Umyj kurki, po czym dodaj je do wywaru wraz z kostkami rosołowymi Knorr oraz majerankiem. Gotuj całość do momentu, gdy ziemniaki będą miękkie.',
        'Dolej do zupy piwo oraz śmietanę i mocno ją podgrzej. Podawaj porcje zupy, na talerzach, udekorowaną siekanym szczypiorkiem.',
      ],
      diet: 'MEAT',
      nutrients: {
        calories: 338.0,
        proteins: 31.7,
        carbs: 34.6,
        fats: 8.4,
      },
      time: 60,
    },
    {
      id: 1,
      image: 'https://s3.przepisy.pl/przepisy3ii/img/variants/800x0/poziom18990271589440687000.jpg',
      name: 'Blok czekoladowy',
      description: 'Pyszny, słodki, aż chce się jeść!',
      diet: 'VEGETARIAN',
      nutrients: {
        calories: 338.0,
        proteins: 31.7,
        carbs: 34.6,
        fats: 8.4,
      },
      time: 300,
    },
    {
      id: 2,
      image: 'https://s3.przepisy.pl/przepisy3ii/img/variants/800x0/tofu-w-curry529074.jpg',
      name: 'Tofu w rajskim curry',
      description: 'Lepsze niż w restauracji!',
      diet: 'VEGAN',
      time: 10,
    },
  ],
};

const recipe = (state = initialState, action) => {
  switch (action.type) {
    case(recipeConstants.ADD_RECIPE):
      return {
        ...state,
        items: [
          ...state.items,
          action.payload.itemContent,
        ],
      };
    default:
      return state;
  }
};

export default recipe;