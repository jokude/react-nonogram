const categories = [
  {
    id: 0,
    title: 'Food',
    imageUrl: '',
  },
  {
    id: 1,
    title: 'Vehicles',
    imageUrl: ''
  },
  {
    id: 2,
    title: 'Animals',
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
    category: 0,
    title: 'Beer',
    size: 16,
    grid: '1000000000011111#0111111111101111#0111111111101111#0000000000000001#0111111111101110#0111111110101110#0101110110101110#0101110110101110#0101110110101110#0101110110101110#0101110110101110#0101110110101110#0101110110101110#0101110110100001#0111111111101111#1000000000011111'
  }
];

class Datasource {

};

Datasource.getCategories = () => categories;
Datasource.getLevelsByCategory = (categoryId) => levels.filter(level => categoryId == level.category);
Datasource.getLevel = (levelId) => {
  const level = levels[levelId];
  return {
    title: level.title,
    size: level.size,
    grid: level.grid.split('#').map(row => row.split('').map(cell => cell == '0' ? true : false))
  }
}

export default Datasource;