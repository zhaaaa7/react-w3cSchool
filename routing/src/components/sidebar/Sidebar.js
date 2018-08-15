import React, { Component } from 'react';
import './Sidebar.css';
import {NavLink} from 'react-router-dom';
import { v4 } from 'node-uuid'

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state={
            sidebarItems:{
                html: {
                    'HTML5 Tutorial':['HTML HOME','HTML Introduction','HTML Editors','HTML Basic','HTML Elements','HTML Attibutes','HTML Headings','HTML Paragraphs'],
                    'HTML Forms':['HTML Forms','HTML Form Elements','HTML Input Types']
                      },
                css: {
                    'CSS Tutorial':['CSS HOME', 'CSS Introduction','CSS Syntax','CSS How To','CSS Box Model'],
                    'CSS Advanced': ['CSS Rounded Corners','CSS Border Images','CSS Backgrounds','CSS Media Queries']
                     }
                
            }
        };
    }
    

    render() {
      console.log(this.props.match.url);
      const category=this.props.match.url.split('/')[1];
      const show=this.props.open;
      const sideBar=(
          <ul className="Sidebar">
            {Object.entries(this.state.sidebarItems[category]).map((chunk,i)=>{
                const details=chunk[1].map((detail,index)=>{
                    if(i===0&&index===0) {
                        return <li key={v4()}><NavLink to={this.props.match.url} exact>{detail}</NavLink></li>;

                    }
                    return <li key={v4()}><NavLink to={this.props.match.url+'/'+detail.toLowerCase().replace(/\s/g,'').slice(category.length)}>{detail}</NavLink></li>;
                });
                return <li key={chunk}>
                    <h3>{chunk[0]}</h3>
                    <ul>{details}</ul>
                </li>;
            })
            }
          </ul>);
      return (
        <div>
            {show? sideBar : null}

        </div>
      );
    }
  }
  
  export default Sidebar;