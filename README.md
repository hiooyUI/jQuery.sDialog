# jQuery.sDialog
A dialog jquery-plugin for mobile site, easy, simple.

##how to use it?
```
<link rel="stylesheet" href="sdialog.min.css" />
<script src="your path/jquery.js"></script>
<script src="sdialog.min.js"></script>
```
```javascript
           //1、open a OK/Cancel Dialog
                $.sDialog({
                    skin: "block",
                    content: "添加购物车成功！",
                    okBtnText: "再逛逛",
                    cancelBtnText: "去购物车",
                    width: 250,
                    okFn: function () {
                        console.log("click 去购物车!");
                    },
                    cancelFn: function () {
                        console.log("click 再逛逛!");
                    },
                    onDestroy: function () {
                        console.log("destroy!");
                    }
                });
           //2、open a success Dialog
                $.sDialog({
                    skin: "green",
                    content: "添加购物车成功！",
                    "okBtn": false, //是否显示确定按钮
                    "cancelBtn": false, //是否显示确定按钮
                    width: 250,
                    onDestroy: function () {
                        console.log("destroy!");
                    }
                });

           //3、open a warning Dialog
                $.sDialog({
                    skin: "red",
                    content: "你输入的东西有误！",
                    "okBtn": false, //是否显示确定按钮
                    "cancelBtn": false, //是否显示确定按钮
                    width: 250,
                    onDestroy: function () {
                        console.log("destroy!");
                    }
                });
           //4、open a window Dialog
                $.sWindow({
                    title: "我的标题",//弹出框标题
                    content: '我的内容', //弹出框里面的内容，支持html标签
                    height: 330,//内容部分高度，不是整个对话框高度
                    callback: function () {
                        //加载完成后执行回调函数
                    }
                })
           //5、slide up a Menu Dialog
                $.sMenu({
                    "menus": [
                    {
                        name: "退款", class: "rf", onclick: function () {
                            console.log("点击了退款");
                        }
                    },
                    {
                        name: "退款退货", class: "rg", onclick: function () {
                            console.log("点击了退款退货");
                        }
                    }
                    ],
                    "okBtn": false, //是否显示确定按钮
                    "cancelBtnText": "取消", //取消按钮的文字
                    "cancelFn": function () {
                        console.log("点击了取消");
                    }//点击取消按钮执行的函数
                })
```
check out the example/example.html demo.

or

[live Demo](http://www.iampua.com/pui/sdialog.html), you can use mobile phone mode to view the demo for better experience!
