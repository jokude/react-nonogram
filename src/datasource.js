const categories = [
  {
    id: 0,
    title: 'Animals',
    imageUrl: '',
  },
  {
    id: 1,
    title: 'Vehicles',
    imageUrl: ''
  },
  {
    id: 2,
    title: 'Food',
    imageUrl: ''
  },
  {
    id: 3,
    title: 'Home',
    imageUrl: ''
  },
  {
    id: 4,
    title: 'Life',
    imageUrl: ''
  },
  {
    id: 5,
    title: 'Building',
    imageUrl: ''
  },
  {
    id: 6,
    title: 'Vehicles',
    imageUrl: ''
  },
  {
    id: 7,
    title: 'Vehicles',
    imageUrl: ''
  },
  {
    id: 8,
    title: 'Vehicles',
    imageUrl: ''
  },
  {
    id: 9,
    title: 'Vehicles',
    imageUrl: ''
  },
  {
    id: 10,
    title: 'Vehicles',
    imageUrl: ''
  },
  {
    id: 11,
    title: 'Vehicles',
    imageUrl: ''
  },
  {
    id: 12,
    title: 'Vehicles',
    imageUrl: ''
  },
  {
    id: 13,
    title: 'Vehicles',
    imageUrl: ''
  },
];

const levels = [
  {
    id: 0,
    title: 'Grid0',
    grid: [[true, false, false, true], [false, true, true, false], [true, false, true, false], [true, true, false, false]],
    category: 0
  },
  {
    id: 1,
    title: 'Grid1',
    grid: [[false, false, true], [false, false, true], [true, true, true]],
    category: 0
  },
  {
    id: 2,
    title: 'Grid2',
    grid: [[false, false, true], [false, false, true], [true, true, true]],
    category: 0
  },
  {
    id: 3,
    title: 'Grid3',
    grid: [[false, false, true], [false, false, true], [true, true, true]],
    category: 1
  },
  {
    id: 4,
    title: 'Grid3',
    grid: [[false, false, true], [false, false, true], [true, true, true]],
    category: 1
  },
  {
    id: 5,
    title: 'Grid3',
    grid: [[false, false, true], [false, false, true], [true, true, true]],
    category: 1,
    size: 5
  },
  {
    id: 6,
    title: 'Grid3',
    grid: [[false, false, true], [false, false, true], [true, true, true]],
    category: 1
  },
      {
    id: 7,
    title: 'Grid0',
    grid: [[true, false, false], [false, true, true], [true, false, true]],
    category: 1
  },
  {
    id: 8,
    title: 'Grid1',
    grid: [[false, false, true], [false, false, true], [true, true, true]],
    category: 1
  },
  {
    id: 9,
    title: 'Grid2',
    grid: [[false, false, true], [false, false, true], [true, true, true]],
    category: 2
  },
  {
    id: 10,
    title: 'Grid3',
    grid: [[false, false, true], [false, false, true], [true, true, true]],
    category: 2
  },
  {
    id: 11,
    title: 'Grid3',
    grid: [[false, false, true, false], [false, false, true, true], [true, true, true, true], [true, false, true, false]],
    category: 2,
    size: 4
  },
  {
    id: 12,
    title: 'Grid3',
    grid: [[false, false, true], [false, false, true], [true, true, true]],
    category: 2
  },
  {
    id: 13,
    title: 'Grid3',
    grid: [[false, false, true], [false, false, true], [true, true, true]],
    category: 3
  },
      {
    id: 14,
    title: 'Grid0',
    grid: [[true, false, false], [false, true, true], [true, false, true]],
    category: 3
  },
  {
    id: 15,
    title: 'Grid1',
    grid: [[false, false, true], [false, false, true], [true, true, true]],
    category: 3
  },
  {
    id: 16,
    title: 'Grid2',
    grid: [[false, false, true], [false, false, true], [true, true, true]],
    category: 4
  },
  {
    id: 17,
    title: 'Grid3',
    grid: [[false, false, true], [false, false, true], [true, true, true]],
    category: 5
  },
  {
    id: 18,
    title: 'Grid3',
    grid: [[false, false, true], [false, false, true], [true, true, true]],
    category: 5
  },
  {
    id: 19,
    title: 'Grid3',
    grid: [[false, false, true], [false, false, true], [true, true, true]],
    category: 5
  },
  {
    id: 20,
    title: 'Grid3',
    grid: [[false, false, true], [false, false, true], [true, true, true]],
    category: 5
  }
];

class Datasource {

};

Datasource.getCategories = () => categories;
Datasource.getLevelsByCategory = (categoryId) => levels.filter(level => categoryId == level.category);
Datasource.getLevel = (levelId) => levels[levelId];

export default Datasource;