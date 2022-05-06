import images from './images';

const wines = [
  {
    title: "Bud's",
    price: '$5',
    tags: 'US | Pint',
  },
  {
    title: 'Stella Artois',
    price: '$6',
    tags: 'BE | Pint',
  },
  {
    title: 'Corona',
    price: '$4',
    tags: 'MEX | Bottle',
  },
  {
    title: 'IPA',
    price: '$6',
    tags: 'Craft | Bottle',
  },
  {
    title: 'Guinness',
    price: '$8',
    tags: 'IE | Bottle',
  },
];

const cocktails = [
  {
    title: 'Water',
    price: '$0.5',
    tags: '330ml',
  },
  {
    title: "San Pellegrino",
    price: '$1',
    tags: 'Sparkling Water',
  },
  {
    title: 'Coke',
    price: '$2',
    tags: 'Soda',
  },
  {
    title: 'Mountain Dew',
    price: '$2',
    tags: 'Soda',
  },
  {
    title: 'Fanta',
    price: '$2',
    tags: 'Soda',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Rising Star',
    subtitle: '2025 Rising Star Award.',
  },
  {
    imgUrl: images.award01,
    title: 'Best Food Truck, NYC',
    subtitle: "2026 Best Food Truck award winner Bato's.",
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Hospitality on Food Trucks award.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: '2022 Baskent University Awards.',
  },
];

export default { wines, cocktails, awards };
