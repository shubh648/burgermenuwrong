import React, { Component } from 'react';
import { connect} from 'react-redux'

class Home extends Component {

  bodyClick = (e) =>{
    return (this.props.menuClicked)?(this.props.menuOnClick()):(e.stopPropagation())
  }
  render() {
    return (
      <div className="body" onClick={this.bodyClick}>
        <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, quos, illo architecto sapiente asperiores ducimus maiores ex dolores placeat rem dolorum nulla recusandae numquam facilis voluptas? Beatae eaque provident ullam!</h1>
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
  
  export default connect(mapStateToProps,mapDispatchToProps)(Home);