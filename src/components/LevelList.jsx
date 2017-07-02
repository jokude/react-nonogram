import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import { Link } from 'react-router-dom';
import Datasource from '../datasource';
import AppBar from 'material-ui/AppBar';

const styles = {
  grid: {
    width: '100%'
  },
  cell: {
    paddingTop: '100%',
  },
  cellPainted: {
    backgroundColor: 'black',
    paddingTop: '100%'
  }
};

class LevelList extends React.Component {
  render() {
    return (
      <div style={{ height: '100%' }}>
        <AppBar
          title={ "title" }
          titleStyle={{ textAlign: 'center' }}
        />
        <div style={{ overflowY: "scroll", overflowX: 'hidden', height: 'calc(100% - 64px)' }}>
          <GridList cols={ 3 } cellHeight="auto" style={{}}>
            {
              Datasource.getLevelsByCategory(this.props.match.params.categoryId).map(level =>
                <Link key={ level.id } to={ `/level/${level.id}` }>
                  <GridTile>
                    <table style={ styles.grid }>
                      <tbody>
                        <tr><td>1</td></tr>
                        { 
                         /* level.grid.map( (row, index) => 
                            <tr key={ index }>
                              { 
                                row.map( (cell, index) => 
                                  <td key={ index }>
                                    { cell ? <div style={ styles.cellPainted }></div> : <div style={ styles.cell }></div> }
                                  </td>
                                )
                              }
                            </tr>
                          )  */
                        }
                      </tbody>
                    </table>
                  </GridTile>
                </Link>
              )
            }
          </GridList>
        </div>
      </div>
    );
  }
}

const RouteLevelList = ({ match }) => <LevelList/>;

export default LevelList;