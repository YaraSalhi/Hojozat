import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: "10px",
    paddingBottom: "20px"
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500
  },
  image: {
    width: 128,
    height: 128
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  }
}));

const Item = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    var path = window.location.href;
    var myPath = path.split("/");
    var id = myPath[1];

    axios.get(`shops/${id}`).then(({ data }) => {
      setData(data);
    });
  }, [setData]);
  console.log("data", data);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      {Array.isArray(data) &&
        data.map(place => (
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img className={classes.img} alt="hall" src={place.image} />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography
                      key={place._id}
                      gutterBottom
                      variant="subtitle1"
                    >
                      {place.name}
                    </Typography>
                    <Typography key={place._id} variant="body2" gutterBottom>
                      openingHours: {place.openingHours}
                    </Typography>
                    <Typography
                      key={place._id}
                      variant="body2"
                      color="textSecondary"
                    >
                      {place.contactInfo}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" style={{ cursor: "pointer" }}>
                      <Link to={`/shops/${place.shopId}`}>Book now</Link>
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">${place.price}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        ))}
    </div>
  );
};
export default Item;
