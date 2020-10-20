jQuery(function(){
            jQuery('.navbar-nav').singlePageNav({
                offset: 50,                  // 距离浏览器顶部的偏移量
                currentClass: 'current',    // 修改默认的导航的高亮样式
                currentThreshold: 0,        // Threshold for triggering current section action
                duration: 500,              // 动画速度：默认是500毫秒 
                effect: 'swing',            // 动画效果。默认是swing，可以是linear
                started: function (){},     // Callback at start of animation
                finished: function (){}     // Callback after animation is finished
            });
});

document.body.onscroll=function(){
    console.log(document.documentElement.scrollTop);
}
$(window).scroll(function(){
    // console.log(document.documentElement.scrollTop)
    if(document.documentElement.scrollTop>=100){
        $("#header>section").addClass("position-fixed");
    }else{
        $("#header>section").removeClass("position-fixed");
    }
    
});
// $(window).scroll(function(){
//     // console.log(document.documentElement.scrollTop)
//     $("#header>section").toggleClass(function(){
//         if(document.documentElement.scrollTop>=100){
//             return "position-fixed";
//         }else{
//             return "";
//         }
//     });
        
    
// });

var wow=new WOW({
    boxClass: 'wow',
    // 设置全局的视觉偏移量
    offset: 100,   
    // 回调，指的是当前区域的动画结束后是否需要执行对应的函数
    // box指的是那个正在进行动画的元素
    callback:function(box){
        // console.log(box)
    }
})
//调用实例方法init
wow.init();