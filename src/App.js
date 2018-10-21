import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.css';
import React, { Component } from 'react';
import Header from './components/header';
import Sidebar from 'react-sidebar';
import { MdMenu } from 'react-icons/md';
import Map from './components/map';
import LocationsList from './components/locations-list'

import LOCATIONS from './data/locations.json';

const sidebarMediaQuery = window.matchMedia(`(min-width: 650px)`);
const sidebarStyle = {
  sidebar: {
    top: 56,
    zIndex: 3
  },
  content: {
    top: 56
  },
  overlay: {
    top: 56
  }
}

class App extends Component {
  
  state = {
    sidebarDocked: sidebarMediaQuery.matches,
    sidebarOpen: false,
    locations: LOCATIONS
  }

  componentDidMount() {
    sidebarMediaQuery.addListener(this.mediaQueryChanged);
  }

  mediaQueryChanged = () => {
    this.setState({ sidebarDocked: sidebarMediaQuery.matches, 
      sidebarOpen: false });
  }

  onSetSidebarOpen = (open) => {
    this.setState({ sidebarOpen: open });
  }

  toggleOpen = (e) => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });

    if (e) {
      e.preventDefault();
    }
  }

  render() {
    return (
      <div>
        <Header />
        {!this.state.sidebarDocked && (
          <button type='button'
                  className='btn btn-link menu-link' onClick={this.toggleOpen}>
              <MdMenu />
          </button>
        )}
        <main>
          <Sidebar
            open={this.state.sidebarOpen}
            docked={this.state.sidebarDocked}
            onSetOpen={this.onSetSidebarOpen}
            styles={sidebarStyle}
            sidebar={<LocationsList locations={this.state.locations}/>}>
              <Map locations={this.state.locations}/>
          </Sidebar>
        </main>
      </div>
    );
  }
}

export default App;
