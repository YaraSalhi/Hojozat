import React from "react";
import $ from "jquery";
class Owner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: {
        Name: "",
        location: "",
        price: "",
        openingHours: "",
        capacity: "",
        contactInfo: "",
        description: "",
        image: "",
        imageSlider: []
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    console.log("target value>> ", e.target.value);
    console.log("target id>> ", e.target.id);
    var value = e.target.value;
    var name = e.target.id;
    this.state.status[name] = value;
    console.log(this.state.status);
    this.setState({ status: this.state.status });
  }
  saveData(event) {
    event.preventDefault();
    console.log(this.state.status);
    console.log("helloooo from save");
    var that = this;
    $.ajax({
      url: "/shops",
      type: "POST",
      data: that.state.status,
      datatype: "json",
      success: function(data) {
        console.log(data);
        alert("Added successfully!!");
        console.log("hi from success!!");
      },
      error: function(err) {
        alert("error ya Ola");
        console.log("error ya 2lby");
      }
    });
  }
  render() {
    return (
      <div>
        <form className="ui form" onSubmit={this.saveData.bind(this)}>
          <div className="field">
            <input
              id="name"
              className="inp"
              placeholder="Item name"
              onChange={this.handleChange}
            />
          </div>
          <div className="field">
            <input
              id="location"
              placeholder="location"
              onChange={this.handleChange}
            />
          </div>
          <div className="field">
            <input
              id="price"
              placeholder="price"
              onChange={this.handleChange}
            />
          </div>
          <div className="field">
            <input
              id="description"
              placeholder="description"
              onChange={this.handleChange}
            />
          </div>
          <div className="field">
            <input
              id="capacity"
              placeholder="capacity"
              onChange={this.handleChange}
            />
          </div>
          <div className="field">
            <input
              id="contactInfo"
              placeholder="contactInfo"
              onChange={this.handleChange}
            />
          </div>

          <div className="field">
            <input
              id="image"
              placeholder="image"
              onChange={this.handleChange}
            />
          </div>
          <div className="field">
            <div className="ui checkbox">
              <input
                type="checkbox"
                className="inp"
                className="hidden"
                readOnly=""
                tabIndex="0"
              />
            </div>
            <input
              id="imageSlider"
              placeholder="imageSlider"
              onChange={this.handleChange}
            />
          </div>
          <button type="Submit" id="inp" className="ui button">
            Add
          </button>
        </form>
      </div>
    );
  }
}
export default Owner;