import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import { Link } from 'react-router-dom';
import Datasource from '../datasource';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    overflowY: 'auto',
  },
  grid: {
    height: '100%',
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
      <GridList cols={ 3 } cellHeight="auto" style={ styles.gridList }>
        {
          Datasource.getLevelsByCategory(this.props.match.params.categoryId).map(level =>
            <Link key={ level.id } to={ `/level/${level.id}` }>
              <GridTile>
                <table style={ styles.grid }>
                  <tbody>
                    { 
                      level.grid.map( (row, index) => 
                        <tr key={ index }>
                          { 
                            row.map( (cell, index) => 
                              <td key={ index }>
                                { cell ? <div style={ styles.cellPainted }></div> : <div style={ styles.cell }></div> }
                              </td>
                            )
                          }
                        </tr>
                      )
                    }
                  </tbody>
                </table>
              </GridTile>
            </Link>
          )
        }
      </GridList>
    );
  }
}

const RouteLevelList = ({ match }) => <LevelList/>;

export default LevelList;