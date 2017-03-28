该框架是基于DVA改造的一款适用于H5移动端应用开发的框架

1、采用rem布局
2、封装了css3动画效果。
3、部分解决了Android、IOS以及各品牌Android手机的兼容问题
4、如果设计图是使用iPhone 6即（375）的，则需要修改scss文件夹下Variables.scss下$fontSize 为 37.5。如果设计是按照iPhone PLUS设计的，则需要改成41.4。
   因为我们的设计是按照iPhone PLUS的3倍出的设计图。所以我们在设置字体的时候除以3.
   在index.html中document.documentElement.style.fontSize = document.documentElement.clientWidth / 10 / 3 + 'px';
5、简易分装了touch事件。对于很老旧的Android手机是不兼容的。使用时请注意自己H5应用的使用群体。
6、欢迎大家提出改造意见和建议