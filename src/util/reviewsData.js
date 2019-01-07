import spacetime from 'spacetime';

import { assets } from '../assets';

const calculateYearsAndMonths = totalMonths => {
  const years = totalMonths / 12;
  const remainder = totalMonths % 12;
  const yearsWithoutDecimal = Math.floor(years);

  if (yearsWithoutDecimal === 1) {
    return `${yearsWithoutDecimal} year & ${remainder}`;
  }
  return `${yearsWithoutDecimal} years & ${remainder}`;
};

export const dateFromNow = dateReviewCreated => {
  const newDate = new Date();
  const now = spacetime(newDate);
  const diff = spacetime(dateReviewCreated).diff(now, 'month');

  if (diff > 11) {
    return calculateYearsAndMonths(diff);
  }
  return diff;
};

const reviews = [
  {
    image: assets.oProfile,
    comment: 'Fantastic range and great service',
    rating: 5,
    date: `${dateFromNow(spacetime('23/11/2018'))} months ago`,
    name: 'Oisin Bourke',
  },
  {
    image: assets.jProfile,
    comment:
      'Highly recommend using these. Have a lot of knowledge about jewellery and antiques and helped me with any questions I had.',
    rating: 5,
    date: `${dateFromNow(spacetime('22/06/2017'))} months ago`,
    name: 'Jane Kelly',
  },
  {
    image: assets.aProfile,
    comment: 'Nice place. Lovely People. 5 stars',
    rating: 5,
    date: `${dateFromNow('06/04/2018')} months ago`,
    name: 'Alex Mulleny',
  },
  {
    image: assets.cProfile,
    comment:
      'The owner is fourth generation family jeweler. Most of the jewelry is in the window but he has some selection behind the counter. The vintage jewelry is fabulous. I suggest you treat your special someone or yourself. Large price range.',
    rating: 4,
    date: `${dateFromNow('11/2/2014')} months ago`,
    name: 'Corina R.',
  },
  {
    image: assets.wProfile,
    comment:
      'The owner was very accommodating and patient while I browsed the shop. Some very beautiful pieces.',
    rating: 5,
    date: `${dateFromNow('18/08/2018')} months ago`,
    name: "Wendy O'Rourke",
  },
];

export default reviews;
