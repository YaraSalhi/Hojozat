import React from "react";
import ListItem from "./ListItem";
import $ from "jquery";
import Items from "./Item";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import Calender from "./Calender";

export default class AppF extends React.Component {
  render() {
    return (
      <div>
        <img
          src="https://www.landmarkamman.com/sites/default/files/styles/slider/public/imageblock/MainWedding.jpg?itok=6kRY4AJu"
          alt="hall"
          width="100%"
          height="600px"
        ></img>
        <ListItem />
      </div>
    );
  }
}