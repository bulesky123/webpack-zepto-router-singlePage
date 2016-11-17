var path = require('path');
var fs = require('fs');
var webpack = require('webpack');
var baseurl = path.resolve(process.cwd(), 'src');
var sourceMap = require('./sourceMap.json');
module.exports = {
    devtool: 'cheap-module-eval-source-map',//启用source-map
    entry: genEntries(),
    //entry: ['eventsource-polyfill'] // necessary for hot reloading with IEf
    output: {
        path: path.join(__dirname, 'src/dist'),
        filename: 'app.js',
        publicPath: '/dist/',//require方式引入静态资源的请求地址（图片，字库等）  可能是cdn地址 //html引用路径，在这里是本地地址。
        chunkFilename: "[name].chunk.js"// 未在页面 入口文件中列，但是项目中引入了的js文件
    }, 
     plugins: [
        new webpack.ProvidePlugin({//webpack提供一个插件 把一个全局变量插入到所有的代码中
            $:'zepto'
        }),
        new webpack.optimize.UglifyJsPlugin({
            mangle: {//不免混淆变量
                except: ['Router', '$', 'exports', 'require','wx','Url','module']
            }
        })
       ],
       resolve: {
        //配置别名，在项目中可缩减引用路径
        alias: {
        	root: path.join(__dirname, 'src/lib/'), //绝对路径
        	extensions: ['', '.js', '.json', '.scss'],
            alias: sourceMap
        }
    },
    module:{
     noParse:['zepto','director'],
     loaders:[
            {test: /\.css$/, loader: 'style!css'},
            {
                test: /\.js$/, loader: 'babel',
                include: path.join(__dirname, 'src/js')
            },
            {test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
     }
};
function genEntries() {
    var jsDir = path.resolve(baseurl, 'js');
    var names = fs.readdirSync(jsDir);
    var map = {};

    names.forEach(function (name) {
        var m = name.match(/(.+)\.js$/);
        var entry = m ? m[1] : '';
        var entryPath = entry ? path.resolve(jsDir, name) : '';
        if (entry) map[entry] = [entryPath];
    });
    return map;
}