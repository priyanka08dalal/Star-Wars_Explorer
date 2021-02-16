import React, { Component } from "react";
import { Button } from "@material-ui/core";
import MainItems from "./MainItems";
import { makeStyles } from '@material-ui/core/styles';
import { Theme } from "@material-ui/core/styles";
import { createBrowserHistory } from "history";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { FunctionComponent, useState } from 'react';
import Box from '@material-ui/core/Box'

interface Iprops {
  classes?: any,
  history?: any,
  theme?: any,
}

interface IState {
  PeopleList: true,
  MoviesList: true,
  PlanetsList: true,
  name: "",
  title: "",
}
export default class ItemsButton extends Component<Iprops, IState> {
  public props: any;
  public setState: any;
  state: IState = {
    PeopleList: true,
    MoviesList: true,
    PlanetsList: true,
    name: "",
    title: "",

  }

  handleClick = (e: React.FormEvent<HTMLButtonElement>) => {
    this.props.history.push({
      pathname: "/people", // Use history.push to define route
      setState: "(PeopleList:IState) => void"
    });
  }

  handleClickMovies = (e: React.FormEvent<HTMLButtonElement>) => {
    this.props.history.push({
      pathname: "/films", // Use history.push to define route
      setState: "(MoviesList:IState) => void"
    });
  }

  handleClickPlanets = (e: React.FormEvent<HTMLButtonElement>) => {
    this.props.history.push({
      pathname: "/planets", // Use history.push to define route
      setState: "(PlanetsList:IState) => void"
    });
  }


  public render(): JSX.Element {



    return (
      <div >
        <MainItems text={"Star Wars Explorer"} />
        <Box m={2} pl={2} pt={1} pb={1}>
          <div>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleClick}
            >
              People
          </Button>
          </div>
        </Box>
        <Box m={2} pl={2} pt={1} pb={1}>
          <div>
            <Button
              variant="contained"
              size="medium"
              color="primary"
              onClick={this.handleClickMovies}
            >
              Movies
          </Button>
          </div>
        </Box>
        <Box m={2} pl={2} pt={1} pb={1}>
          <div>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleClickPlanets}
            >
              Planet
          </Button>
          </div>
        </Box>
      </div>
    );
  }
}
