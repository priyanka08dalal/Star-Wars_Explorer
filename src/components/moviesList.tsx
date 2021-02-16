import { Theme } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import MainItems from "./MainItems";
import { connect, useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../actions/moviesAction";
import { useEffect } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ImageIcon from "@material-ui/icons/Image";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import moviesReducer from '../reducers/moviesReducer';
import { RootState }  from '../reducers/index';
import Box from '@material-ui/core/Box'
import { useHistory } from 'react-router-dom';
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import Link from '@material-ui/core/Link'

const useStyles =  makeStyles ((theme: Theme) =>({
  root: {
    width: "100%",

    padding: 0,
    display: "inline-block",
    backgroundColor: theme.palette.background.paper,
    "& > *": {
      margin: theme.spacing(0),
      marginTop: theme.spacing(1),
    },
  },
}));

export default function MoviesList() {
  const dispatch = useDispatch();
  const movies = useSelector((state: RootState) => state.moviesReducer.movies);
  const [selectedIndex] = React.useState(1);
  const history = useHistory();
  const handleClick = () => history.push('/filmsdetails');
  const handleClickRoute = () => history.push('/')

  //DISPATCHING ACTION FOR GETTING Movies DETAILS FROM THE ID
  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  const classes = useStyles();

  return <>
    <div className={classes.root}>
      <MainItems text={"Movies"} />
      <Box m={6} pl={2} pt={1}>
      <Breadcrumbs aria-label="breadcrumb" >
        <Link color="inherit" href="/" onClick={handleClickRoute}>
          Home
        </Link>
        <Typography color="textPrimary">Movies List</Typography>
      </Breadcrumbs>
      </Box>
      {movies &&
        movies.length > 0 &&
        movies.map((p: any, i: any) => {
          return <>
            <List
              className={classes.root}
              key={i}
              component="nav"
              aria-label="main mailbox folders"
            >
              {/* <ListItem> */}
              <ListItem
                button
                selected={selectedIndex === 1}
                onClick={handleClick}
              >
                <ListItemAvatar>
                  <Avatar src="./avatar.jpeg"></Avatar>
                </ListItemAvatar>
                <ListItemText primary={p.title} />

                <Typography>
                  <Divider variant="inset" component="li" />
                </Typography>
              </ListItem>
              <Divider />
              
            </List>
          </>
        })}
    </div>
  </>
}
