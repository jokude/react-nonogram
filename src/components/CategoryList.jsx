import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { Link } from 'react-router-dom';
//import Datasource from 'datasource';

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

const CategoryList = ({ match }) => (
  <List>
    { 
      categories.map(category =>
        <Link key={category.id} to={`/category/${category.id}`}>
          <ListItem primaryText={category.title} />
          <Divider />
        </Link>
      )
    }
  </List>
);

export default CategoryList;