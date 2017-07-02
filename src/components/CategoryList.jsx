import React from 'react';
import Datasource from '../datasource';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import SettingsIcon from 'material-ui/svg-icons/action/settings';
import Avatar from 'material-ui/Avatar';

class CategoryList extends React.Component {
  render() {
    return (
      <div style={{ height: '100%' }}>
        <AppBar
          title={ 'React Nonograms' }
          titleStyle={{ textAlign: 'center' }}
          iconElementLeft={ <IconButton></IconButton> }
          iconElementRight={ <IconButton><SettingsIcon/></IconButton> }
        />
        <List style={{ overflowY: 'scroll', height: 'calc(100% - 64px)' }}>
          { 
            Datasource.getCategories().map(category =>
              <Link key={category.id} to={`/category/${category.id}`}>
                <ListItem primaryText={category.title}
                          leftAvatar={<Avatar src=""/>}
                />
                <Divider />
              </Link>
            )
          }
        </List>
      </div>
    );
  }
}

const RouteCategoryList = match => <CategoryList/>;

export default RouteCategoryList;