import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import tileData from './TitleData';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import Button from '@material-ui/core/Button'; 

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  gridtile: {
      position: 'relative',
  },
  gridBtn: {
    position: 'absolute',
    zIndex: '99',
    top: '0',
  }
}));

export default function GridGal() {
    const classes = useStyles();
    return (
        <>
        <div className={classes.root}>
      <GridList cellHeight={300} className={classes.gridList} cols={4}>
        {tileData.map((tile) => (
          <GridListTile className={classes.gridtile} key={tile.imgsrc} cols={tile.cols || 2}>
            <img src={tile.imgsrc} alt={tile.title} />
      <Button className={classes.gridBtn} variant="outlined">
      <AccessibilityIcon/>
      </Button>
          </GridListTile>
        ))}
      </GridList>
    </div>
        </>
    )
}
