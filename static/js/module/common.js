console.log('loaded common.js ...');

// 滚动右侧固定栏显示
jq(window).scroll(function(){
  jq(document).scrollTop() > 10 ?
    jq(".fixed-bar-box").fadeIn() : jq(".fixed-bar-box").fadeOut();
})
// 右侧置顶
jq('#fixed-top').on("click", function(){
  jq('html, body').animate({scrollTop:0}, 200);
})

jq('.user-name__a, .user-nav-wrap').on("mouseenter", function(){
  jq('.user-nav-wrap').show();
}).on("mouseleave", function(){
  jq('.user-nav-wrap').hide();
})
  
console.log('End common.js ...');