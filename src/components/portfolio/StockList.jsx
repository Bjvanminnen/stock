import React from 'react';

import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';
import IconButton from 'material-ui/lib/icon-button';
import AddCircleOutline from 'material-ui/lib/svg-icons/content/add-circle-outline';
import TextField from 'material-ui/lib/text-field';

export default class StockList extends React.Component {
  // static propTypes = {
  //   stocks: React.PropTypes.array.isRequired,
  //   addStock: React.PropTypes.func.isRequired
  // }

  render () {
    const { stocks, addStock } = this.props;
    return (
      <div>
        <Toolbar>
          <ToolbarGroup float="left">
            <ToolbarTitle text="Stocks"/>
          </ToolbarGroup>
        </Toolbar>
        {/* TODO - disabled
          stocks.map((stock, index) => (
          <div key={index}>
            <TextField defaultValue={stock}/>
          </div>
        ))*/}
        <IconButton onClick={addStock}>
          <AddCircleOutline/>
        </IconButton>
      </div>
    );
  }
}
