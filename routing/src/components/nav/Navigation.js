import React, { Component } from 'react';
import './Navigation.css';
import {NavLink} from 'react-router-dom';


class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state={
            navItems:['HTML','CSS','JAVASCRIPT','SQL','PHP','BOOTSTRAP','HOW TO','JQUERY','W3.CSS','PYTHON','MORE'],
        };
    }
    

    render() {
      
      return (
        <div>
          <nav>
            <ul className="Nav">          
                <li onClick={this.props.sidebarOpen}>
                    <div></div>
                    <div></div>
                    <div></div>
                </li>
                
                {this.state.navItems.map(element => {
                    return <li key={element}>
                        <NavLink to={`/${element.toLowerCase()}`}>{element}</NavLink>
                    </li>;
                })}
            </ul>
          </nav>

        </div>
      );
    }
  }
  
  export default Navigation;