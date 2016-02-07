import React from 'react';

import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';
import IconButton from 'material-ui/lib/icon-button';
import AddCircleOutline from 'material-ui/lib/svg-icons/content/add-circle-outline';


export default class StockList extends React.Component {
  render () {
    return (
      <div>
        <Toolbar>
          <ToolbarGroup float="left">
            <ToolbarTitle text="Stocks"/>
          </ToolbarGroup>
        </Toolbar>
        <IconButton>
          <AddCircleOutline/>
        </IconButton>
      </div>
    );
  }
}
