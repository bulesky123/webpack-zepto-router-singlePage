(function(){
    var _ajax =function(params){
        return $.ajax({
            url:params.url,
            type: params.type || "POST",
            async: true,
            contentType:params.contentType || 'application/json;charset=UTF-8;',
            data: JSON.stringify(params.data),
            success:params.success || function(){},
            error:params.error || function(){},
            complete: params.complete || function() {}
        })
    };
    //符合项目参数的get请求
    var _get = function(params){
        params.type = "GET";
        return _ajax(params);
    };
    //符合项目参数的post请求
    var _post = function(params){
        return _ajax(params);
    };
    //与微信沟通的请求
    var _req = function(params){
    	var paramData={};
        params.data = $.extend(paramData,params.data);
        return _ajax(params);
    };
    module.exports = {
        _ajax:_ajax,
        _get: _get,
        _post: _post,
        req:_req
    };
})(undefined);