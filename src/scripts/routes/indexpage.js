import React, { Component }  from 'react';
import { connect } from 'dva';
import { Router, Route, IndexRoute, Link ,hashHistory,browserHistory} from 'dva/router';
import MainLayout from './../components/mainlayout/mainlayout';

class IndexPage extends Component{

  componentDidMount(){

  }


  render(){
    return (
      <MainLayout location={location}>
        <div className="demo">
        IndexPage
        </div>
      </MainLayout>
    )
  }
}


IndexPage = connect()(IndexPage);

export default IndexPage


