var Router = require("director").Router;
var ajax = require("./until/ajax");
var index_Action=require('./viewAction/index');
//渲染目标页面
var layout=$('#layout');
debugger;
var requestPage = function(data,complete,param){
    layout.append($(data));
    //无请求页面使用
    if(!complete){
       
        nextPage();
        return;
    }
    Thenjs(function (cont) {
        //渲染目标页面
        complete && complete(cont,param);
    }).then(function (cont) {
        //渲染完毕，跳转到目标页
        nextPage();
    }).fail(function (cont, error) { // 通常应该在链的最后放置一个 `fail` 方法收集异常
        layout.html('<div class="page targetPage slideIn">' +
        '<div style="height: '+viewHight+'px" class="_scrollBox"><span class="errorreq">'+error+'</span></div></div>');
        nextPage();
    });
};
//请求目标页面
var hashchange = function (url, complete,param) {
    ajax._get({
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
    
};
var routes = {
    '/index': function () {
        document.title="闪电分期";
        hashchange('view/index.html',index_Action);
    }
};

var router = Router(routes);
router.init();
module.exports = {
    router:router
};