var Router = require("director").Router;
var ajax = require("./until/ajax");
var Thenjs = require('../../lib/thenjs/then');
var index_Action = require('./viewAction/index');
var base_Action = require('./viewAction/base');
//渲染目标页面
var main=$('.currentPage');
var loading=$('.loadBlock');
var requestPage = function(data,complete,param){
    var targetPage = $(data);
    main.html(targetPage);
    //无请求页面使用
    if(!complete){
        setTimeout(function(){
            loading.hide();
        },350);
        setTimeout(function(){
            nextPage();
        },350);
        return;
    }
    Thenjs(function (cont) {
        //渲染目标页面
        complete && complete(cont,param);
    }).then(function (cont) {
        //渲染完毕，跳转到目标页
        setTimeout(function(){
            loading.hide();
        },350);
        setTimeout(function(){
            nextPage();
        },350);
    }).fail(function (cont, error) { // 通常应该在链的最后放置一个 `fail` 方法收集异常
        main.html(error);
        setTimeout(function(){
            loading.hide();
        },350);
        setTimeout(function(){
            nextPage();
        },350);
    });
};
//请求目标页面
var hashchange = function (url, complete,param) {
	loading.show();
    $.ajax({
        url: url,
        success: function (data) {
            requestPage(data,complete,param);
        },
        error:function (XMLHttpRequest, textStatus, errorThrown){
            if(XMLHttpRequest.status==404){
                toast('Not found this page');
            }else{
                toast('page load error!');
            }
            requestPage('<div class="errorreq">加载失败，请稍后再试</div>');
            console.log(XMLHttpRequest.status);
            console.log(XMLHttpRequest.readyState);
        }
    });
};
//切换到目标页的动画
var nextPage = function(){
    main.css({"right":"0"})
};
var routes = {
    '/index': function () {
        document.title="首页";
        hashchange('./view/index.html',index_Action);
    },
    '/base': function () {
        document.title="基本功能展示";
        hashchange('./view/base.html',base_Action);
    }
};

var router = Router(routes);
router.init();
module.exports = {
    router:router
};