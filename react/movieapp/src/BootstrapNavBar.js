import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class BootstrapNavBar extends Component{
  render(){
    return(
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">WebSiteName</Link>
          </div>
          <ul className="nav navbar-nav">
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/favorites">Favorites</Link></li>
          </ul>
        </div>
      </nav>
    ) 
  }
}

export default BootstrapNavBar;

