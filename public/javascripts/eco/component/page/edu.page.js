// 弹框
eco.define("page", function() {
    var page={
        init:function(num){
            $('table').after('<div style="text-align:right">\
                <div class="btn-group" style="margin-top:5px;">\
                    <button type="button" class="btn btn-default prev">\
                        <i class="glyphicon glyphicon-chevron-left"></i>\
                    </button>\
                    <button type="button" class="btn btn-default next">\
                        <i class="glyphicon glyphicon-chevron-right"></i>\
                    </button>\
                </div>\
            </div>');
            var page=parseInt(edu.getQueryString('page'))?parseInt(edu.getQueryString('page')):1;
            $('.prev').after('<button type="button" class="btn btn-azure thispage pagenum">'+page+'</button>');
            if(page>1){
                $('.prev').after('<button type="button" class="btn btn-default pagenum">'+(page-1)+'</button>');
            }else{
                $('.prev').addClass('disabled')
            }
            if(page<num){
                $('.thispage').after('<button type="button" class="btn btn-default pagenum">'+(page+1)+'</button>');
            }else{
                $('.next').addClass('disabled')
            }
            $('.pagenum').on('click',function(){
                var pagenum=$(this).html();
                var href=location.pathname;
                var query=location.search.split('&');
                for(i in query){
                    if(!query[i].match('page')){
                        href+=query[i]
                    }
                }
                (query[0].match(/\?/)&&!query[0].match('page'))?href+='&':href+='?';
                href+='page='+pagenum
                location.href=href
            });
            $('.prev').on('click',function(){
                if(!$(this).hasClass('disabled')){
                    var pagenum=1;
                    var href=location.pathname;
                    var query=location.search.split('&');
                    for(i in query){
                        if(!query[i].match('page')){
                            href+=query[i]
                        }
                    }
                    (query[0].match(/\?/)&&!query[0].match('page'))?href+='&':href+='?';
                    href+='page='+pagenum
                    location.href=href
                }
            });
            $('.next').on('click',function(){
                if(!$(this).hasClass('disabled')){
                    var pagenum=num;
                    var href=location.pathname;
                    var query=location.search.split('&');
                    for(i in query){
                        if(!query[i].match('page')){
                            href+=query[i]
                        }
                    }
                    (query[0].match(/\?/)&&!query[0].match('page'))?href+='&':href+='?';
                    href+='page='+pagenum
                    location.href=href
                }
            });
        }
    }
    return page;
});
