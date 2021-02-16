import Avatar from "@material-ui/core/Avatar";
import MainItems from "./MainItems";
import { connect, useDispatch, useSelector } from "react-redux";
import { fetchPeople } from "../actions/peopleActions";
import { useEffect } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ImageIcon from "@material-ui/icons/Image";
// import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import { RootState }  from '../reducers/index';
import { Theme } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box'
import { useHistory } from 'react-router-dom';
import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import Link from '@material-ui/core/Link'

const useStyles =  makeStyles ((theme: Theme) =>({
  root: {
    width: "100%",
    // maxWidth: 360,
    // direction: "row",
    padding: 0,
    display: "inline-block",
    backgroundColor: theme.palette.background.paper,
    "& > *": {
      margin: theme.spacing(0),
      marginTop: theme.spacing(1),
    },
  },
}));

function PeopleList() {
  //DISPATCHING ACTION FOR GETTING PEOPLE DETAILS FROM THE ID
  const dispatch = useDispatch();
  const people = useSelector((state: RootState) => state.peopleReducer.people);
  const [selectedIndex] = React.useState(1);
  const history = useHistory();
  const handleClick = () => history.push('/persondetails');
  const handleClickRoute = () => history.push('/')

  useEffect(() => {
    dispatch(fetchPeople());
  }, []);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MainItems text={"People"} />
      <Box m={6} pl={2} pt={1}>
      <Breadcrumbs aria-label="breadcrumb" >
        <Link color="inherit" href="/" onClick={handleClickRoute}>
          Home
        </Link>
        <Typography color="textPrimary">People List</Typography>
      </Breadcrumbs>
      </Box>
      {people.length > 0 &&
        people.map((p: any, i: any) => {
          return (
            // <List className={classes.root} key={i}>
            //   <ListItem>
            //     <ListItemAvatar>
            //       <Avatar>
            //         <ImageIcon />
            //       </Avatar>
            //     </ListItemAvatar>

            //     <Typography>
            //       <Link to="/persondetails">{p.name}</Link>
            //     </Typography>
            //   </ListItem>
            // </List>
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
                  <Avatar src="./avatar.jpeg">{/* <ImageIcon /> */}</Avatar>
                </ListItemAvatar>
                <ListItemText primary={p.name} />

                <Typography>
                  {/* <Link to="/persondetails">{p.name}</Link> */}
                  <Divider variant="inset" component="li" />
                </Typography>
              </ListItem>
              <Divider />
              
            </List>
          );
        })}
    </div>
  );
}

export default connect()(PeopleList);
