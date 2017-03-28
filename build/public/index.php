<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /> 
  <title>KPI</title>
  <link rel="stylesheet" type="text/css" href="../styles/animate.css?v=<?php echo '1.0'; ?>"></link>
  <link rel="stylesheet" type="text/css" href="../styles/common.css?v=<?php echo '1.0'; ?>"></link>
  <link rel="stylesheet" type="text/css" href="../styles/header.css?v=<?php echo '1.0'; ?>"></link>
  <link rel="stylesheet" type="text/css" href="../styles/IndexPage.css?v=<?php echo '1.0'; ?>"></link>
  <link rel="stylesheet" type="text/css" href="../styles/report.css?v=<?php echo '1.0'; ?>"></link>
  <link rel="stylesheet" type="text/css" href="../styles/selectCity.css?v=<?php echo '1.0'; ?>"></link>
</head>
<body>
<div id="root">
<div style="width:50px;height:50px;" class="startloading">
  <div class="jwLoading_1"></div>
  <div class="jwLoading_2"></div>
  <div class="jwLoading_3"></div>
  <div class="jwLoading_4"></div>
</div>
</div>
</body>
<script type="text/javascript">
document.documentElement.style.fontSize = document.documentElement.clientWidth / 10 / 3 + 'px';
function touch(event){

  var event = event || window.event;
         
      var touchVal={};
 
      switch(event.type){

          case "touchstart":
              touchVal.clientX = event.touches[0].clientX;
              touchVal.clientY = event.touches[0].clientY;
              break;
          case "touchend":
              touchVal.clientX = event.changedTouches[0].clientX;
        touchVal.clientY = event.changedTouches[0].clientY
              break;
        }

       return touchVal;
}

function touchType(el, callback, type, prames){

  var start_xy;
  var item = el;
  item.addEventListener('touchstart', function(event){

    start_xy = touch(event);

  }, false);
  item.addEventListener('touchend', function(){

    var xy = touch(event);
    var touchtypeVal = '';

    if(start_xy.clientX - xy.clientX > 0 && start_xy.clientX - xy.clientX > 10){

      touchtypeVal = 'left';
    }else if(start_xy.clientX - xy.clientX < 0 && start_xy.clientX - xy.clientX < -10){

      touchtypeVal = 'right';
    }else if(start_xy.clientX - xy.clientX  <  10 && start_xy.clientX - xy.clientX > -10  && start_xy.clientY - xy.clientY < 10 && start_xy.clientY - xy.clientY > -10){
      touchtypeVal = 'click';
    }

    if(touchtypeVal == type){
        callback(prames)
    }



  }, false);
    

}

</script>
<script type="text/javascript" src="https://www.joywok.com/public/scripts/jssdk.js"></script>
<script type="text/javascript" src="https://www.joywok.com/dist/scripts/jquery.js"></script>
<script type="text/javascript" src="https://www.joywok.com/dist/scripts/underscore.js"></script>
<script type="text/javascript" src="../scripts/index.js"></script>

</html>
