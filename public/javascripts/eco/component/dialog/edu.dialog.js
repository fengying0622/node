// 弹框
eco.define("dialog", function() {
    var dialog={
        callback:null,
        /**
         * 带确认框的弹框
         * @param str[显示内容] callback[需要回调执行的函数]
         * @return callback
         */
        confirm: function (str,callback) {
            var self=this;
            var dom='<div class="modal dialog-win" tabindex="-1" role="dialog">\
                    <div class="modal-dialog modal-sm">\
                    <div class="modal-content">\
                        <div class="modal-body">'+str+'</div>\
                        <div class="modal-footer">\
                            <button type="button" class="btn btn-success dialog-confirm" data-dismiss="modal">确认</button>\
                            <button type="button" class="btn btn-warning dialog-cancel" data-dismiss="modal">取消</button>\
                        </div>\
                    </div></div></div>';
            if($(".dialog-win").length <= 0){
                $(document.body).append(dom);
            }
            $('.dialog-win').modal('show');
            self.callback=callback;
            $('.dialog-confirm').on('click',function(){
                $('.dialog-win').modal('hide').remove();
                self.callback();
            });
            $('.dialog-cancel').on('click',function(){
                $('.dialog-win').modal('hide').remove();
            });
        },
        /**
         * 不带确认框的弹框
         * @param str[显示内容]
         */
        info:function(str){
            var self=this;
            var dom='<div class="modal info-win" tabindex="-1" role="dialog">\
                    <div class="modal-dialog modal-sm">\
                    <div class="modal-content">\
                        <div class="modal-body">'+str+'</div>\
                    </div></div></div>';
            if($(".info-win").length <= 0){
                $(document.body).append(dom);
            }
            $('.info-win').modal('show');
            setTimeout(function(){
                $('.info-win').modal('hide').remove();
            },2000);
        },
    }
    dialog.alert = dialog.info;
    return dialog;
});
