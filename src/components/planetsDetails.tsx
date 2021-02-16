import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import MainItems from "./MainItems";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPlanetDetails } from "../actions/planetDetailsAction";
import CircularProgress, { CircularProgressProps } from "@material-ui/core/CircularProgress";
import { RootState } from '../reducers/index';
import Link from '@material-ui/core/Link'
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Divider from "@material-ui/core/Divider";
import { useHistory } from 'react-router-dom';
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      flexGrow: 1,
      width: "100%",
      spacing: "30",
    },
  },
}));

export default function PlanetsDetails(props: JSX.IntrinsicAttributes & CircularProgressProps) {
  const dispatch = useDispatch();
  const planetDetails = useSelector(
    (state: RootState) => state.planetsDetailsReducer.planetDetails
  );
  const loading = useSelector((state: RootState) => state.planetsDetailsReducer.loading);
  const history = useHistory();
  const handleClickRoute = () => history.push('/')
  const handleClickRouteplanets = () => history.push('/planets')

  //DISPATCHING ACTION FOR GETTING Movies DETAILS FROM THE ID
  useEffect(() => {
    dispatch(fetchPlanetDetails());
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  useEffect(() => { }, [planetDetails]);
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
        <MainItems text={"Planets"} />
        <Box m={2}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="/" onClick={handleClickRoute}>
              Home
        </Link>
            <Link color="inherit" href="/planets
        "onClick={handleClickRouteplanets}>
              Planets List
        </Link>
            <Typography color="textPrimary">Planets Details</Typography>
          </Breadcrumbs>
        </Box>
        <Box m={6} pl={2} pt={0}>
          <TextField
            id="standard-disabled"
            label="Title"
            defaultValue={planetDetails.name}
          />
          <TextField
            id="standard-disabled"
            label="Terrain"
            defaultValue={planetDetails.terrain}
          />
          <TextField
            id="standard-disabled"
            label="Population"
            defaultValue={planetDetails.population}
          />
        </Box>
      </div>
    );
  }
}
