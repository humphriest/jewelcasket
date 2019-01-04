import spacetime from 'spacetime';

import { assets } from '../assets';

export const dateFromNow = () => {
  const newDate = new Date();
  const now = spacetime(newDate);
  return spacetime('February 1 2018').diff(now, 'month');
};

const reviews = [
  {
    image: assets.ring7,
    comment: 'The store is amazing and they have incredible products.',
    rating: 5,
    date: `${dateFromNow()} months ago`,
    name: 'Shane Something',
  },
  {
    image: assets.ring7,
    comment:
      'Highly recommend using these. Have a lot of knowledge about jewellery and antiques and helped me with any questions I had.',
    rating: 4,
    date: `${dateFromNow()} months ago`,
    name: 'Shane Something',
  },
  {
    image: assets.ring7,
    comment: 'Nice place. Lovely People. 5 starts',
    rating: 5,
    date: `${dateFromNow()} months ago`,
    name: 'Shane Something',
  },
  {
    image: assets.ring7,
    comment:
      'Went in with an idea of what I wanted for my wife. Came out with some stunning pieces. ',
    rating: 4,
    date: `${dateFromNow()} months ago`,
    name: 'Shane Something',
  },
  {
    image: assets.ring7,
    comment:
      'The owner was very accommodating and patient while I browsed the shop. Some very beautiful pieces.',
    rating: 5,
    date: `${dateFromNow()} months ago`,
    name: 'Shane Something',
  },
];

export default reviews;
