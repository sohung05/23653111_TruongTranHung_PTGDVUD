import avatarImg from '../assets/image/Lab_03/avatar.png';
import rating1 from '../assets/image/Lab_02/rating_1.png';
import rating2 from '../assets/image/Lab_02/rating_2.png';
import rating3 from '../assets/image/Lab_02/rating_3.png';
import rating4 from '../assets/image/Lab_02/rating_4.png';
import rating5 from '../assets/image/Lab_02/rating_5.png';
import beanShrimpSalad from '../assets/image/Lab_03/Bean, shrimp, and potato salad.png';
import italianTomato from '../assets/image/Lab_03/Italian-style tomato.png';
import lotusDelight from '../assets/image/Lab_03/Lotus delight salad.png';
import saladsWithCabbage from '../assets/image/Lab_03/Salad with cabbage.png';
import snackCakes from '../assets/image/Lab_03/Snack cakes.png';
import sunnyEggs from '../assets/image/Lab_03/Sunny-side up fried eggs.png';
import vegSpaghetti from '../assets/image/Lab_03/Vegetable and shrimp spaghetti.png';
import lotusDelight01 from '../assets/image/Lab_03/Lotus delight salad_01.png';

export const RATING_IMAGES = {
  1: rating1,
  2: rating2,
  3: rating3,
  4: rating4,
  5: rating5,
};

export const RECIPES = [
  {
    id: 1,
    title: 'Bean, Shrimp and Potato Salad',
    image: beanShrimpSalad,
    author: 'James Anderson',
    authorAvatar: avatarImg,
    rating: 4,
    reviews: 28,
    time: '25 min',
    category: 'salad',
  },
  {
    id: 2,
    title: 'Italian-Style Tomato Salad',
    image: italianTomato,
    author: 'Emily Carter',
    authorAvatar: avatarImg,
    rating: 5,
    reviews: 42,
    time: '20 min',
    category: 'salad',
  },
  {
    id: 3,
    title: 'Lotus Delight Salad',
    image: lotusDelight,
    author: 'Michael Torres',
    authorAvatar: avatarImg,
    rating: 4,
    reviews: 19,
    time: '15 min',
    category: 'salad',
  },
  {
    id: 4,
    title: 'Salad with Cabbage',
    image: saladsWithCabbage,
    author: 'Sophia Lee',
    authorAvatar: avatarImg,
    rating: 3,
    reviews: 11,
    time: '10 min',
    category: 'salad',
  },
  {
    id: 5,
    title: 'Classic Snack Cakes',
    image: snackCakes,
    author: 'Oliver Brown',
    authorAvatar: avatarImg,
    rating: 5,
    reviews: 56,
    time: '45 min',
    category: 'dessert',
  },
  {
    id: 6,
    title: 'Sunny-Side Up Fried Eggs',
    image: sunnyEggs,
    author: 'Ava Wilson',
    authorAvatar: avatarImg,
    rating: 4,
    reviews: 33,
    time: '8 min',
    category: 'eggs',
  },
  {
    id: 7,
    title: 'Vegetable and Shrimp Spaghetti',
    image: vegSpaghetti,
    author: 'Noah Martinez',
    authorAvatar: avatarImg,
    rating: 5,
    reviews: 64,
    time: '30 min',
    category: 'pasta',
  },
  {
    id: 8,
    title: 'Lotus Delight Salad Special',
    image: lotusDelight01,
    author: 'Isabella Davis',
    authorAvatar: avatarImg,
    rating: 4,
    reviews: 22,
    time: '18 min',
    category: 'salad',
  },
];
