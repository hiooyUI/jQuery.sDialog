# jQuery.sDialog
A dialog jQuery plugin for mobile site, easy, simple.

##how to use it?
```
<link rel="stylesheet" href="sdialog.min.css" />
<script src="your path/jquery.js"></script>
<script src="sdialog.min.js"></script>
```
```
           //1、确认，取消对话框
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
           //2、成功提示对话框
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

           //3、失败提示对话框
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
           //4、自定义窗体对话框
                $.sWindow({
                    title: "我的标题",//弹出框标题
                    content: '我的内容', //弹出框里面的内容，支持html标签
                    height: 330,//内容部分高度，不是整个对话框高度
                    callback: function () {
                        //加载完成后执行回调函数
                    }
                })
           //5、由底部划出对话框
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
check out the example/example.html example.

or

[live Demo](http://sandbox.runjs.cn/show/fkq0n7jy), you can use mobile phone mode to view the demo for better experience!
