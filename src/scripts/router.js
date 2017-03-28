import React, { PropTypes , Component} from 'react';
import { Router, Route,hashHistory} from 'dva/router';
import error from "./routes/error";
import indexpage from "./routes/indexpage";

module.exports = function({hashHistory}) {
  return (
    <Router history={ hashHistory }>
      <Route path="/" component={ indexpage } />
      <Route path="*" component={ error } />
    </Router>
  );
};


