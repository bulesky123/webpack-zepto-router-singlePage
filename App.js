var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');
var app = express();
var compiler = webpack(config);
//生成文件在内存中
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
//监听每个页面
app.get(/^(\/\w+)*\/(\w+)\.html(\?\S*)?$/, function(req, res) {
  var url = req.url;
  var src = 'src/'+url.replace(/(\/)(\S+)(\.html)(\?\S*)?/, '$2')+'.html';
  res.sendFile(path.join(__dirname,src ));
});
//样式
app.get(/^(\/\w+)*\/(\w+)\.css(\?\S*)?$/, function(req, res) {
  var url = req.url;
  var src = 'src/'+url.replace(/(\/)(\S+)(\.css)(\?\S*)?/, '$2')+'.css';
  res.sendFile(path.join(__dirname,src ));
});
//图片
app.get(/^(\/\w+)*\/(\w+)\.(png|gif|jpg)(\?\S*)?$/, function(req, res) {
  var url = req.url;
  var src = 'src/'+url;
  res.sendFile(path.join(__dirname,src ));
});
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'src/index.html'));
});

app.listen(3000, function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:3000');
});