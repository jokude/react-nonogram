import React from 'react';
//import Datasource from 'datasource';

const styles = {
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

const levelData = {
  id: 0,
  title: 'Grid0',
  grid: [[true, false, false], [false, true, true], [true, false, true]],
  category: 0,
  size: 3
};

const Level = ({ match }) => {
  return <table style={ styles.grid }>
    <tbody>
      { 
        levelData.grid.map( (row, index) => 
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
};

export default Level;