import React from 'react';
import { connect } from 'dva';
import ErrorComponent from './../components/error/error';
import MainLayout from './../components/mainlayout/mainlayout';


function Error() {
  return (
  	<MainLayout location={location}>
	    <div className="error">
	      <ErrorComponent />
	    </div>
    </MainLayout>
  );
}

// function mapStateToProps() {
//   return {};
// }

// export default connect(mapStateToProps)(Users);
export default connect()(Error);
