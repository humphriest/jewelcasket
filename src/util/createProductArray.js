import {
  ringsAssets,
  pendantsAssets,
  braceletsChainsAssets,
  earringsAssets,
  broochesAssets,
  cufflinksAssets,
} from '../assets';

const ringsTitles = [
  '18 Carat White Gold Cluster Ring',
  'Platinum Diamond Cluster Ring',
  'Platinum Ruby & Diamond Target Ring',
  'Platinum Ruby & Diamond Style Art Deco Ring',
  '18 Carat Five Stone Diamond Ring',
  '18 Carat Emerald & Diamond Ring',
  '18 Carat White Gold Aquamarine & Diamond Cluster Ring',
];

const pendantsTitles = [
  'Amethyst & Diamond Antique Pendant',
  '18 Carat White Gold Diamond Pendant on a White Gold Chain',
  '18 Carat White Gold Aquamarine & Diamond Pendant',
  '18 Carat Rose Gold & Diamond Pendant',
];

const braceletsChainsTitles = [
  'Antique Rose Gold Curb Link Bracelet',
  'Antique Platinum Diamond Bracelet',
  '18 Carat White Gold Diamond Tennis Bracelet',
  '9 Carat Gold Chased Link Bracelet',
  'Fancy Rose Gold Bracelet with Padlock',
  'Antique Rose Gold Albert Watch Chain with Blood Stone Fob',
  'Cultured Pearl Necklace with Pearl & Diamond Clasp',
];

const earringsTitles = [
  'Tanzanity & Diamond Earrings',
  'Pearl & Diamond Earrings',
  '18 Carat White Gold Pink Sapphire & Diamond Earrings',
];

const broochesTitles = [
  'White Gold Diamond Spray Brooch',
  '15 Carat Antique Brooch',
];

const cufflinksTitles = [
  'Antique Rose Gold Cufflinks',
  'Set of Mother of Pearl Cufflinks and Shirt Stud Set',
  'Silver & Enamel Oval Shaped Cufflinks',
];

const makeProductObject = (title, image) => {
  return {
    title,
    image,
  };
};

const getRings = () => {
  const rings = [];
  let ring = {};

  for (let i = 0; i < ringsAssets.length; i += 1) {
    for (let x = 0; x < ringsTitles.length; x += 1) {
      ring = makeProductObject(ringsTitles[i], ringsAssets[i]);
    }
    rings.push(ring);
  }
  return rings;
};

const getPendants = () => {
  let pendant = {};
  const pendants = [];

  for (let i = 0; i < pendantsAssets.length; i += 1) {
    for (let x = 0; x < pendantsTitles.length; x += 1) {
      pendant = makeProductObject(pendantsTitles[i], pendantsAssets[i]);
    }
    pendants.push(pendant);
  }
  return pendants;
};

const getBraceletsChains = () => {
  let braceletChain = {};
  const braceletChains = [];

  for (let i = 0; i < braceletsChainsAssets.length; i += 1) {
    for (let x = 0; x < braceletsChainsTitles.length; x += 1) {
      braceletChain = makeProductObject(braceletsChainsTitles[i], braceletsChainsAssets[i]);
    }
    braceletChains.push(braceletChain);
  }
  return braceletChains;
};

const getEarrings = () => {
  let earring = {};
  const earrings = [];

  for (let i = 0; i < earringsAssets.length; i += 1) {
    for (let x = 0; x < earringsTitles.length; x += 1) {
      earring = makeProductObject(earringsTitles[i], earringsAssets[i]);
    }
    earrings.push(earring);
  }
  return earrings;
};

const getBrooches = () => {
  let brooch = {};
  const brooches = [];

  for (let i = 0; i < broochesAssets.length; i += 1) {
    for (let x = 0; x < broochesTitles.length; x += 1) {
      brooch = makeProductObject(broochesTitles[i], broochesAssets[i]);
    }
    brooches.push(brooch);
  }
  return brooches;
};

const getCufflinks = () => {
  let cufflink = {};
  const cufflinks = [];

  for (let i = 0; i < cufflinksAssets.length; i += 1) {
    for (let x = 0; x < cufflinksTitles.length; x += 1) {
      cufflink = makeProductObject(cufflinksTitles[i], cufflinksAssets[i]);
    }
    cufflinks.push(cufflink);
  }
  return cufflinks;
};

export { getRings, getPendants, getBraceletsChains, getEarrings, getBrooches, getCufflinks };
