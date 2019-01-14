import React, { Component } from 'react';
import { connect } from 'react-redux';

class BurgerMenu extends Component {

  componentDidUpdate(){
    sessionStorage.setItem('menuState', this.props.menuClicked);
  }

  componentDidMount(){
    let menuState = sessionStorage.getItem('menuState');

    if(menuState!=null){
        return (menuState==="true")?this.props.menuOnClick():null;
    }
  }

  render() {
    return (
      <div className="btn-container">
        <button onClick={this.props.menuOnClick} 
        className={(this.props.menuClicked)?"burger_button change":"burger_button"}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return{
        menuClicked : state.menuClicked
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return{
        menuOnClick: () => dispatch({ type: 'MENU_CLICKED'})
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(BurgerMenu);
