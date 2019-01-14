import React, { Component } from 'react';
import { connect } from 'react-redux';

class SideBar extends Component {
  render() {
    return (
      <div className="sidenav" style={(this.props.menuClicked)?{width:"250px"}:{width:"0"}}>
        <a href="#">Option1</a>
        <a href="#">Option2</a>
        <a href="#">Option3</a>
        <a href="#">Option4</a>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return{
        menuClicked : state.menuClicked
    }
  }
   
export default connect(mapStateToProps)(SideBar);
