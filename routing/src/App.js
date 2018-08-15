import React, { Component } from 'react';
import './App.css';
import Navigation from './components/nav/Navigation';
import Sidebar from './components/sidebar/Sidebar';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Page1 from './components/content/Page1';
import Page2 from './components/content/Page2';
import Page3 from './components/content/Page3';
import Page4 from './components/content/Page4';
import NotFound from './components/content/NotFound';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      sidebarOpen: false,
    };
  }

  sidebarHandeller=()=>{
    this.setState({sidebarOpen:!this.state.sidebarOpen});
  }

  updateDimensions=()=>{
    console.log(window.innerWidth);
    if(window.innerWidth>1000) {
      this.setState({sidebarOpen:true});
    }else{
      this.setState({sidebarOpen:false});
    }
  }
  
  componentDidMount=()=> {
    this.updateDimensions();
    let timeout=null;

    window.addEventListener('resize', ()=> {
      // clear the timeout
      clearTimeout(timeout);
      // start timing for event "completion"
      timeout = setTimeout(this.updateDimensions, 100);
    });
  } 

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/:category" render={(props)=>(<Navigation sidebarOpen={this.sidebarHandeller} {...props}/>)} />
          <Route path="/:category" render={(props)=>(<Sidebar open={this.state.sidebarOpen} {...props}/>)} />
          <Switch>
            <Route path="/html" exact component={Page1} />
            <Route path="/html/forms" component={Page2} />
            <Route path="/css/mediaqueries" component={Page3} />
            <Route path="/css/boxmodel" component={Page4} />
            <Route path="*" component={NotFound} />
          </Switch>
          
        </div>
      </BrowserRouter >
    );
  }
}

export default App;
