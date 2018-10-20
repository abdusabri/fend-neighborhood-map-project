import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.css';
import React, { Component } from 'react';
import Header from './components/header';
import Sidebar from 'react-sidebar';
import { MdMenu } from 'react-icons/md';

const sidebarMediaQuery = window.matchMedia(`(min-width: 650px)`);
const sidebarStyle = {
  sidebar: {
    top: 56
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
    sidebarOpen: false
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
        <Header/>
        {!this.state.sidebarDocked && (
          <button 
            type='button' 
            className='btn btn-link menu-link'
            onClick={this.toggleOpen}>
              <MdMenu className='.test'/>
          </button>
        )}
        <main>
          <Sidebar
            open={this.state.sidebarOpen}
            docked={this.state.sidebarDocked}
            onSetOpen={this.onSetSidebarOpen}
            styles={sidebarStyle}
            sidebar={<input class='form-control form-control-lg' 
                            type='text' placeholder='Filter locations'/>}>

          </Sidebar>
        </main>
      </div>
    );
  }
}

export default App;
