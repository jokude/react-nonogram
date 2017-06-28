import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { Link } from 'react-router-dom';
import Datasource from '../datasource';

class CategoryList extends React.Component {
  render() {
    return (
      <List>
        { 
          Datasource.getCategories().map(category =>
            <Link key={category.id} to={`/category/${category.id}`}>
              <ListItem primaryText={category.title} />
              <Divider />
            </Link>
          )
        }
      </List>
    );
  }
}

const RouteCategoryList = match => <CategoryList/>;

export default RouteCategoryList;