if (!String.prototype.startsWith) {
    String.prototype.startsWith = function(searchString, position){
      position = position || 0;
      return this.substr(position, searchString.length) === searchString;
  };
}
import dva from 'dva';
// import createLoading from 'dva-loading';
const app = dva();
jw.config({
	appid: ''
});

jw.config({
      appid: '84ac2c048c4949dbbab3d13cbc2e0b49',      // 必填，公众号的唯一标识
	  corpid: 'Z93sI7BcGWQIrMgL' // 企业ID 
  });


// $('#root')[0].addEventListener('touchmove', touch, false);

jw.ready = function(){

	jw.setTitle({title: 'KPI'});
	jw.setBarBg({
	  background:'f69d00'
	});
	jw.getInfo({success:function(res){
		window.users = res['info'];
		jw.setFuncBtns([{type:4}]);
		    window.onJwNavBtnClick = function( type ){
		      if(type["type"]=='4'){
		        jw.chartInit({
		          id:'chailv-review-demo',
		          name:'Comp Sales GC',
		          users:[
		            window.users['email'],
		            'dennis.huang@cn.mcd.com',
		            'tony.tang@cn.mcd.com',
		            'phoenix.sun@cn.mcd.com',
		            'kelvin.wang@cn.mcd.com',
		            'spark.wang@cn.mcd.com',
		            'david.deng@cn.mcd.com'
		          ].join(","),
		          type:'email'
		        },{
		          success:function(res){
		          }
		        })
		      }
		    }
	}})	
};

app.router(require('./router'));
app.start('#root');




