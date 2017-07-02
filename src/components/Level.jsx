import React from 'react';
import Datasource from '../datasource';
import styles from '../sass/style.scss';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import PauseIcon from 'material-ui/svg-icons/av/pause';
import WrongIcon from 'material-ui/svg-icons/navigation/close';
import BlockedIcon from 'material-ui/svg-icons/content/flag';
import Dialog from 'material-ui/Dialog';
import SvgIcon from 'material-ui/SvgIcon';

const CELL = {
  EMPTY: 0,
  MARKED: 1,
  SOLVED: 2,
  FAILED: 3
};

class Level extends React.Component {

  constructor(props){
    super(props);

    this.level = Datasource.getLevel(this.props.levelId);

    this.state = {
      grid: this.level.grid.map(row => row.map(cell => ({ solution: cell, state: CELL.EMPTY }) )),
      finished: false
    }

    this.cellLeftClick = this.cellLeftClick.bind(this);
    this.cellRightClick = this.cellRightClick.bind(this);
    this.onTimeout = this.onTimeout.bind(this);
  }

  cellLeftClick(row, column){
    let grid = Array.from(this.state.grid);
    const cell = this.state.grid[row][column];
    switch (cell.state) {
      case CELL.EMPTY:
        grid[row][column].state = cell.solution ? CELL.SOLVED : CELL.FAILED;
        break;
      case CELL.MARKED:
        grid[row][column].state = CELL.EMPTY;
        break;
    }
    this.setState({ grid: grid }, () => {
      const solved = this.state.grid.every(row => row.every(cell => (cell.state === CELL.SOLVED) === cell.solution));
      if(solved){
        this.setState({ finished: true });
      }
    });
  }

  cellRightClick(row, column){
    let grid = Array.from(this.state.grid);
    switch (grid[row][column].state) {
      case CELL.EMPTY:
        grid[row][column].state = CELL.MARKED;
        break;
      case CELL.MARKED:
        grid[row][column].state = CELL.EMPTY;
        break;
    }
    this.setState({ grid: grid });
  }

  onTimeout(){  }

  render() {

    let hintColumns = [];
    let fullRow = [];

    for(let i = 0; i < this.level.size; i++){
      
      hintColumns.push(
        <div key={ i } className="hint-column">
          <div className="padding"></div>
          <HintLine cells={ this.state.grid.map(row => row[i]) } isColumn={ true }/>
        </div>
      );

      fullRow.push(
        <div key={ i } className="flex">
          <div className="padding"></div>
          <HintLine cells={ this.state.grid[i] } isColumn={ false } />
          <div className="flex">
            { this.state.grid[i].map((cell, j) => 
              <Cell key={ ('cell' + i) + j } x={ i } y={ j } 
                    state={ cell.state }
                    onLeftClick={ this.cellLeftClick } 
                    onRightClick={ this.cellRightClick }/>
            )}
          </div>
        </div>
      );
    }

    return (
      <div>
        <AppBar 
          title={ <Timer seconds={ 5 } onTimeout={ this.onTimeout } /> }
          titleStyle={{ textAlign: 'center' }}
          iconElementLeft={ <IconButton><PauseIcon/></IconButton> }
          iconElementRight={ <IconButton></IconButton> }
        />
        <div className="flex">
          <div className="level">
            <div className="flex">
              <div className="padding"></div>
              { hintColumns }
            </div>
            { fullRow }
          </div>
        </div>
        <Dialog
          title={ this.level.title }
          actions={ [] }
          modal={ true }
          open={ this.state.finished }
          onRequestClose={ null }
          titleStyle={{ textAlign: 'center', fontSize: '30px', fontWeight: 'bold' }}
          contentStyle={{ maxWidth: '300px', margin: 'auto', position: 'absolute', height: '100%', left: '0px', right: '0px', top: '0px', transform: 'translate(0px, 30%)' }}
          bodyStyle={{ minHeight: '300px' }}
        >
          <SvgIcon style={{ background: 'url(../resources/icons/beer.svg)', width: '100%', paddingTop: '90%', backgroundSize: 'cover' }}></SvgIcon>
        </Dialog>
      </div>
    );
  }
}

class Cell extends React.Component {

  constructor(props) {
    super(props);
    this.onLeftClick = this.onLeftClick.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onRightClick = this.onRightClick.bind(this);
  }

  onLeftClick() {
    this.props.onLeftClick(this.props.x, this.props.y);
  }

  onRightClick(evt) {
    evt.preventDefault();
    this.props.onRightClick(this.props.x, this.props.y);
  }

  onMouseEnter(evt){
    if(evt.buttons == 1){
      this.props.onLeftClick(this.props.x, this.props.y);
    } else if(evt.buttons == 2){
      this.props.onRightClick(this.props.x, this.props.y);
    }
  }

  render() {

    let content = '';
    if(this.props.state == CELL.SOLVED){
      content = <div></div>;
    } else if(this.props.state == CELL.FAILED){
      content = <WrongIcon color="tomato"/>;
    } else if(this.props.state == CELL.MARKED){
      content = <BlockedIcon color="darkgray"/>;
    }

    return (
      <div className={ 'cell clickable' }
           style={{ borderWidth: '2px' }}
           onClick={ this.onLeftClick }
           onMouseEnter={ this.onMouseEnter }
           onContextMenu={ this.onRightClick }>
        { content }
      </div>
    );
  }
}

class HintLine extends React.Component {

  constructor(props) {
    super(props);

    this.hints = [];
    let count = 0;
    let i;

    for (i = 0; i < this.props.cells.length; i++) {
      if (this.props.cells[i].solution) {
        count++;
      }
      else if (count > 0) {
        this.hints.push({ value: count, cells: this.props.cells.slice(i - count, i) });
        count = 0;
      }
    }

    if (count != 0 || this.hints.length == 0) {
      this.hints.push({ value: count, cells: this.props.cells.slice(i - count, i) });
    }
  }

  render() {
    return (
      <div className={ this.props.isColumn ? '' : 'row' }>
        {
          this.hints.map((hint, index) => 
            <div key={ 'hint' + index } className={ 'cell hint ' + (hint.cells.every(cell => cell.solution == (cell.state == CELL.SOLVED)) ? 'solved' : '') }>
              { hint.value }
            </div>
          )
        }
      </div>
    );
  }
}

class Timer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      elapsed: this.props.seconds*1000
    };

    this.tick = this.tick.bind(this);
  }

  componentDidMount(){
    this.timer = setInterval(this.tick, 1000);
  }

  componentWillUnmount(){
    this.stop();
  }

  tick(){
    const left = this.state.elapsed - 1000;
    this.setState({ elapsed: left });
    if(left == 0){
      this.stop();
    }
  }

  stop(){
    clearInterval(this.timer);
    this.props.onTimeout();
  }

  formatNumber(number){
    return number > 9 ? number : '0' + number;
  }

  render() {
    const minutes = Math.floor(this.state.elapsed / 60000);
    const seconds = Math.floor((this.state.elapsed - minutes*60000) / 1000);
    return (
      <div className="timer">
        <div>{ this.formatNumber(minutes) }</div>
        <div className="colon">:</div>
        <div>{ this.formatNumber(seconds) }</div>
      </div>
    );
  }
};

const RouteLevel = ({ match }) => <Level levelId={ match.params.levelId } />;

export default RouteLevel;