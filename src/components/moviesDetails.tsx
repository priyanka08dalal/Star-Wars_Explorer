import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import MainItems from "./MainItems";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMoviesDetails } from "../actions/moviesDetailsAction";
import CircularProgress from "@material-ui/core/CircularProgress";
import { RootState } from '../reducers/index';
import Link from '@material-ui/core/Link'
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Divider from "@material-ui/core/Divider";
import { useHistory , useParams } from 'react-router-dom';
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme: any) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      flexGrow: 1,
      width: "100%",
      spacing: "30",
    },
  },
}));

export default function MoviesDetails(props: any) {
  const dispatch = useDispatch();
  const moviesDetails = useSelector(
    (state: RootState) => state.moviesDetailsReducer.moviesDetails
  );
  const loading = useSelector((state: RootState) => state.moviesDetailsReducer.loading); // Loader
  const history = useHistory();
  const handleClickRoute = () => history.push('/')
  const handleClickRoutePeople = () => history.push('/films')
  const { id }= useParams<{ id: string }>();

  //DISPATCHING ACTION FOR GETTING Movies DETAILS FROM THE ID
  useEffect(() => {
    dispatch(fetchMoviesDetails(id + 1));
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  useEffect(() => { }, [moviesDetails]);
  const classes = useStyles();
  if (loading) {
    return (
      <CircularProgress
        variant="indeterminate"
        disableShrink
        size={40}
        thickness={4}
        {...props}
      />
    );
  } else {
    return (
      <div className={classes.root}>
        <MainItems text={"Movies"} />
        <Box m={2}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="/" onClick={handleClickRoute}>
              Home
        </Link>
            <Link color="inherit" href="/films
        "onClick={handleClickRoutePeople}>
              Movies List
        </Link>
            <Typography color="textPrimary">Movies Details</Typography>
          </Breadcrumbs>
        </Box>
        <Box m={6} pl={2} pt={0}>
        <h3>{moviesDetails.title}</h3>
          <TextField
            id="standard-disabled"
            label="Title"
            defaultValue={moviesDetails.title}
          />
          <TextField
            id="standard-disabled"
            label="Director"
            defaultValue={moviesDetails.director}
          />
          <TextField
            id="standard-disabled"
            label="Producers"
            defaultValue={moviesDetails.producer}
          />
          <TextField
            id="standard-disabled"
            label="Relese Date"
            defaultValue={moviesDetails.release_date}
          />
        </Box>
      </div>
    );
  }
}
