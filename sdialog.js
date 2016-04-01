(function ($) {
    /*
       sdialog弹出对话框
       使用方式
                $.sDialog({
                    skin: "block",
                    content: "弹出框内容！",
                    "okBtnText": "确认",
                    "cancelBtnText": "取消",
                    width: 400,
                    okFn: function () {
                        //点击ok后回调事件 
                    },
                    cancelFn: function () {
                        //点击cancel后回调事件 
                    }
                });
    */
    $.extend({
        sDialog: function (options) {
            var defaults = {
                autoTime: '2000', //当没有 确定和取消按钮的时候，弹出框自动关闭的时间
                "skin": 'block', //皮肤，默认黑色
                "content": "出错了", //弹出框里面的内容
                "width": 250, //弹出框宽度
                "okBtn": true, //是否显示确定按钮
                "cancelBtn": true, //是否显示确定按钮
                "okBtnText": "确定", //确定按钮的文字
                "cancelBtnText": "取消", //取消按钮的文字
                "lock": true, //是否显示遮罩
                "okFn": function () { }, //点击确定按钮执行的函数
                "cancelFn": function () { },//点击取消按钮执行的函数
                "onDestroy": function () { }//对话框消失前执行的函数
            };
            var opts = $.extend({}, defaults, options);
            function _init() {
                var mask_height = ($("body").height() > $(window).height()) ? $("body").height() : $(window).height();
                var windowH = parseInt($(window).height());
                var warpTop = (opts.top == undefined) ? windowH / 2 : opts.top;
                var dTmpl = '<div class="simple-dialog-wrapper">';
                if (opts.lock) { //是否有锁定
                    dTmpl += '<div class="s-dialog-mask" style="height:' + mask_height + 'px;"></div>';
                }
                dTmpl += '<div style="left:50%;top:' + warpTop + 'px;width:' + opts.width + 'px" class="s-dialog-wrapper s-dialog-skin-' + opts.skin + '">' + '<div class="s-dialog-content">' + opts.content + '</div>'
                if (opts.okBtn || opts.cancelBtn) {
                    dTmpl += '<div class="s-dialog-btn-wapper">';
                    if (opts.okBtn) {
                        dTmpl += '<a href="javascript:void(0)" class="s-dialog-btn-ok">' + opts.okBtnText + '</a>';
                    }
                    if (opts.cancelBtn) {
                        dTmpl += '<a href="javascript:void(0)" class="s-dialog-btn-cancel">' + opts.cancelBtnText + '</a>';
                    }
                    dTmpl += '</div>';
                }
                dTmpl += '</div>';
                dTmpl += '</div>';
                $("body").append(dTmpl);
                var d_wrapper = $(".s-dialog-wrapper");
                var mLeft = -parseInt(d_wrapper.width()) / 2;
                d_wrapper.css({
                    "margin-left": mLeft,
                });
                //绑定事件
                _bind();
            }

            function _bind() {
                var okBtn = $(".s-dialog-btn-ok");
                var cancelBtn = $(".s-dialog-btn-cancel");
                okBtn.click(_okFn);
                cancelBtn.click(_cancelFn);
                if (!opts.okBtn && !opts.cancelBtn) {
                    setTimeout(function () {
                        _close();
                    }, opts.autoTime);
                }
            }

            function _okFn() {
                opts.okFn();
                _close();
            }

            function _cancelFn() {
                opts.cancelFn();
                _close();
            }

            function _close() {
                opts.onDestroy();
                $(".simple-dialog-wrapper").remove();
            }

            _init();
        },
        /**
         * @sWindow	弹出蒙版层对话框窗口插件
         * @调用方式	
           $.sWindow({
              title: "出错了",//弹出框标题
              content: "出错了", //弹出框里面的内容，支持html标签
              height: 328,//内容部分高度，不是整个对话框高度
              callback: function () { }，//加载完成后执行回调函数
              duration:0//对话框持续时间，过了指定时间后会自动消失
           })
         */
        sWindow: function (options) {
            var defaults = {
                title: "出错了",//弹出框标题
                content: "出错了", //弹出框里面的内容，支持html标签
                height: 328,//内容部分高度，不是整个对话框高度
                callback: function () { },//加载完成后执行回调函数
                duration: 0//对话框持续时间，过了指定时间后会自动消失
            };
            var options = $.extend({}, defaults, options);
            var mask_h = ($("body").height() > $(window).height()) ? $("body").height() : $(window).height(),
                dialog_top = $(window).height() / 2 - options.height / 2 - 50;
            var html = '<div id="simple-window-wrapper" class="simple-window-wrapper">'
                    + '<div id="simple-window" class="simple-window" style="width:'
                    + 100
                    + '%; position: absolute; z-index: 9000; display: block; overflow: hidden; top: '
                    + dialog_top
                    + 'px; left: '
                    + 0
                    + 'px;"><div class="simple-window-title" style="width: '
                    + (options.width - 20)
                    + 'px;"><span>'
                    + options.title
                    + '</span></div><div class="simple-window-content" style="height: '
                    + options.height
                    + 'px; width: '
                    + 100
                    + '%; overflow: hidden;">'
                    + options.content
                    + '</div><a class="simple-window-close" title="关闭"><span class="ui-icon ui-icon-delete"></span></a></div>'
                    + '<div id="simple-window-mask" class="simple-window-mask" style="position: absolute; left: 0px; top: 0px; opacity: 0.25; z-index: 8998; width: 100%; height:'
                    + mask_h
                    + 'px; background-color: rgb(0, 0, 0); filter: progid:DXImageTransform.Microsoft.Alpha(opacity=25);"></div>'
                    + '</div>';
            $("#simple-window-wrapper").remove();
            $("body").append(html).find("#simple-window").find(".simple-window-close").click(function () {
                $("#simple-window-wrapper").remove();
            });
            options.callback();
            if (options.duration > 0) {
                setTimeout(function () {
                    $("#simple-window-wrapper").remove();
                }, options.duration);
            }
        },
        /**
         * @sMenu	向上划出菜单
         * @调用方式	
           $.sMenu({
              "menus": [
              {name:"退款",class:"rf",onclick:function(){}},
              {name:"退款退货",class:"rg",onclick:function(){}}
                     ],
              "okBtnText": "确定", //确定按钮的文字
              "cancelBtnText": "取消", //取消按钮的文字
              "okFn": function () { }, //点击确定按钮执行的函数
              "cancelFn": function () { },//点击取消按钮执行的函数
              "onDestroy": function () { }，//加载完成后执行回调函数
           })
         */
        sMenu: function (options) {
            var defaults = {
                "menus": "",
                "okBtn": true, //是否显示确定按钮
                "cancelBtn": true, //是否显示确定按钮
                "okBtnText": "确定", //确定按钮的文字
                "cancelBtnText": "取消", //取消按钮的文字
                "okFn": function () { }, //点击确定按钮执行的函数
                "cancelFn": function () { },//点击取消按钮执行的函数
                "onDestroy": function () { }//对话框消失前执行的函数
            };
            var opts = $.extend({}, defaults, options);
            function _init() {
                $("#s-slideup-wrapper").remove();
                var html = '';
                html += '<div class="s-slideup-wrapper" id="s-slideup-wrapper"><div class="s-slideup" id="s-slideup">';
                if (opts.menus == "") {
                    if (opts.okBtn) {
                        html += '<a href="javascript:;" class="s_nav confirm" id="smenu_confirm">' + opts.okBtnText + '</a>';
                    }
                    if (opts.cancelBtn) {
                        html += '<a href="javascript:;" class="s_nav cancel" id="smenu_cancel">' + opts.cancelBtnText + '</a>';
                    }
                } else {
                    var mLen = opts.menus.length;
                    if (mLen > 0) {
                        for (var i = 0; i < mLen; i++) {
                            html += '<a href="javascript:;" class="s_nav sitem ' + (opts.menus[i].class || '') + '">' + (opts.menus[i].name || '') + '</a>';
                        }
                    }
                    if (opts.okBtn) {
                        html += '<a href="javascript:;" class="s_nav confirm" id="smenu_confirm">' + opts.okBtnText + '</a>';
                    }
                    if (opts.cancelBtn) {
                        html += '<a href="javascript:;" class="s_nav cancel" id="smenu_cancel">' + opts.cancelBtnText + '</a>';
                    }
                }
                html += '</div></div>';
                $("body").append(html);
                var This = $("#s-slideup-wrapper");
                _bind(This);
                This.slideDown();
            }
            function _bind(This) {
                This.find(".sitem").each(function (n) {
                    $(this).click(function () {
                        if (typeof (opts.menus[n].onclick) === 'function') {
                            opts.menus[n].onclick();
                            _close();
                        } else {
                            _close();
                        }
                    });
                });
                This.find("#smenu_confirm").click(_okFn);
                This.find("#smenu_cancel").click(_cancelFn);
            }
            function _okFn() {
                opts.okFn();
                _close();
            }

            function _cancelFn() {
                opts.cancelFn();
                _close();
            }

            function _close() {
                opts.onDestroy();
                $("#s-slideup-wrapper").remove();
            }
            _init();
        }
    });
})(jQuery);
