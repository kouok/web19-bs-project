// 载入动画
var wow=new WOW({
            boxClass: 'mywow',
            // 设置全局的视觉偏移量
            offset:0,   
            // 回调，指的是当前区域的动画结束后是否需要执行对应的函数
            // box指的是那个正在进行动画的元素
            callback:function(box){
                console.log(box)
            }
        })
        //调用实例方法init
        wow.init();