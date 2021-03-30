import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {NavLink} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function MenuMain() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list)}
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
      <ListItem button>
      <NavLink exact activeClassName="active_class" to="/"> Home </NavLink>
      </ListItem>
      <ListItem button>
        <NavLink exact activeClassName="active_class" to="/todolist"> ToDo List </NavLink>
      </ListItem>
      <ListItem button>
        <NavLink exact activeClassName="active_class" to="/pokeAPI">Pokemon API </NavLink>
      </ListItem>
      <ListItem button>
        <NavLink exact activeClassName="active_class" to="/clickBtn">Click Btn</NavLink>
      </ListItem>
      </List>
    </div>
  );
  const anchor = "left";
  return (
        <>
        <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" onClick={toggleDrawer(anchor, true)} className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Menu
          </Typography>
        </Toolbar>
      </AppBar>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </>
  );
}
