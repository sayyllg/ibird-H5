import React, { Component }  from 'react';
import { connect } from 'dva';
import { Router, Route, IndexRoute, Link ,hashHistory,browserHistory} from 'dva/router';

class Header extends Component{

      componentDidMount(){
            

      }
      
      render(){
        return (
          <div className="header">
              header
          </div>
        )
      }
}


Header = connect()(Header);

export default Header