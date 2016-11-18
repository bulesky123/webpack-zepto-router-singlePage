/**
 * Created by zhoufei on 2016/11/13.
 */
(function(){
    module.exports=function(callback){
        /*var data = [
            {
                "id": 0,
                "name":"东野圭吾天王套装（套装共4册）",
                "price":"106.50",
                "author": "[日] 东野圭吾 著",
                "url":"book1.png",
                "rec":[
                    {"auth":"《朝鲜日报》","text":"《嫌疑人X的献身》是一位天才作家的天才作品，两个天才对手的天才对决。"},
                    {"auth":"东野圭吾","text":"《嫌疑人X的献身》是我所能想到纯粹的爱情，好的诡计。"},
                    {"auth":"康辉（央视主播）","text":"推荐日本推理小说作家东野圭吾的代表作《嫌疑人X的献身》，非常具有可读性。"},
                    {"auth":"《朝日新闻》","text":"只要提到涉情推理，必定绕不开东野圭吾的《白夜行》。"}
                ],
                "text":""
            },
            {
                "id": 1,
                "name":"鬼吹灯（典藏版）",
                "price":"123.10",
                "author": "天下霸唱 著",
                "url":"book2.png",
                "rec":[],
                "text":"《鬼吹灯》是一部中国大陆的网络小说，作者为天下霸唱，主要内容是盗墓寻宝，是一部经典的悬疑盗墓小说。作者创造历史上四大盗墓门派——摸金、卸岭、发丘、搬山，其中摸金是技术含量高，规矩多的门派。“人点烛，鬼吹灯”是传说中摸金派的不传之秘，意为进入古墓之中先在东南角点燃一支蜡烛才能开棺，如果蜡烛熄灭，须速速退出，不可取一物。相传这是祖师爷所定的一条活人与死人的契约，千年传承，不得破。"
            },

            {
                "id": 2,
                "name":"慈禧全传（全十册）",
                "price":"298.50",
                "author": "高阳 著",
                "url":"book3.png",
                "rec":[
                    {"auth":"张爱玲","text":"高阳的小说我一直看。《瀛台落日》非常好，全都闻所未闻。"},
                    {"auth":"金庸","text":"高阳是一流的历史小说家。"},
                    {"auth":"二月河","text":"高阳的书，我是见一本买一本，买一本读一本。"}
                ],
                "text":""
            }
        ];
        //书籍缩略图组件
        var BookImg = React.createClass({
            render: function(){
                return (
                    <div className="bookImg">
                    <img src={"img/"+this.props.url} />
                    </div>
                )
            }
        });
        //书籍介绍数据
        var BookData = React.createClass({
            render: function(){
                return (
                    <div className="bookData">
                    <h4>{this.props.data.name}</h4>
                <label>作者：</label><span>{this.props.data.author}</span>
                <label>价格：</label><span>{"￥"+this.props.data.price}</span>
                <button>点击购买</button>
                </div>
                )
            }
        });
        //推荐或介绍
        var BookRec = React.createClass({
            render: function(){
                var regData;
                if(this.props.data.rec.length > 0){
                    regData = this.props.data.rec.map(
                        function(rec){
                            return (
                                <div>
                                <p>{rec.text}</p>
                            <span>{"----"+rec.auth}</span>
                            </div>
                            )
                        })
                }else{
                    regData = <p>{this.props.data.text}</p>
                }
                return (
                    <div className="bookRec">
                    {regData}
                    </div>
                );
            }
        });
        //一本书
        var BookItem = React.createClass({
            render: function(){
                return (
                    <div className="bookBox">
                    <BookImg url={this.props.data.url} />
                <BookData data={this.props.data}/>
                <BookRec data={this.props.data}/>
                </div>
                )
            }
        });
        //列表
        var BookList = React.createClass({
            render: function(){
                var bookNodes = this.props.data.map(
                    function(book){
                        return (
                            <BookItem data={book} ></BookItem>
                        )
                    })
                return (
                    <div className="bookList">
                    {bookNodes}
                    </div>
                )
            }
        });

        // 实例化根组件，启动框架，把标记注入到第二个参数指定的原生的 DOM 元素中
        ReactDOM.render(
        <BookList data={data} />,
            document.getElementById('App')
        )*/
        callback();
    }
})();