import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import { Link } from 'react-router-dom';
//import Datasource from 'datasource';

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

const levels = [
  {
    id: 0,
    title: 'Grid0',
    grid: [[true, false, false], [false, true, true], [true, false, true]],
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
    category: 0
  },
  {
    id: 4,
    title: 'Grid3',
    grid: [[false, false, true], [false, false, true], [true, true, true]],
    category: 0
  },
  {
    id: 5,
    title: 'Grid3',
    grid: [[false, false, true], [false, false, true], [true, true, true]],
    category: 0,
    size: 5
  },
  {
    id: 6,
    title: 'Grid3',
    grid: [[false, false, true], [false, false, true], [true, true, true]],
    category: 0
  },
      {
    id: 7,
    title: 'Grid0',
    grid: [[true, false, false], [false, true, true], [true, false, true]],
    category: 0
  },
  {
    id: 8,
    title: 'Grid1',
    grid: [[false, false, true], [false, false, true], [true, true, true]],
    category: 0
  },
  {
    id: 9,
    title: 'Grid2',
    grid: [[false, false, true], [false, false, true], [true, true, true]],
    category: 0
  },
  {
    id: 10,
    title: 'Grid3',
    grid: [[false, false, true], [false, false, true], [true, true, true]],
    category: 0
  },
  {
    id: 11,
    title: 'Grid3',
    grid: [[false, false, true, false], [false, false, true, true], [true, true, true, true], [true, false, true, false]],
    category: 0,
    size: 4
  },
  {
    id: 12,
    title: 'Grid3',
    grid: [[false, false, true], [false, false, true], [true, true, true]],
    category: 0
  },
  {
    id: 13,
    title: 'Grid3',
    grid: [[false, false, true], [false, false, true], [true, true, true]],
    category: 0
  },
      {
    id: 14,
    title: 'Grid0',
    grid: [[true, false, false], [false, true, true], [true, false, true]],
    category: 0
  },
  {
    id: 15,
    title: 'Grid1',
    grid: [[false, false, true], [false, false, true], [true, true, true]],
    category: 0
  },
  {
    id: 16,
    title: 'Grid2',
    grid: [[false, false, true], [false, false, true], [true, true, true]],
    category: 0
  },
  {
    id: 17,
    title: 'Grid3',
    grid: [[false, false, true], [false, false, true], [true, true, true]],
    category: 0
  },
  {
    id: 18,
    title: 'Grid3',
    grid: [[false, false, true], [false, false, true], [true, true, true]],
    category: 0
  },
  {
    id: 19,
    title: 'Grid3',
    grid: [[false, false, true], [false, false, true], [true, true, true]],
    category: 0
  },
  {
    id: 20,
    title: 'Grid3',
    grid: [[false, false, true], [false, false, true], [true, true, true]],
    category: 0
  }
];

const LevelList = ({ match }) => (
  <GridList
    cols={ 3 }
    cellHeight="auto"
    style={ styles.gridList }
  >
    {levels.map(level =>
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
    )}
  </GridList>
);

export default LevelList;