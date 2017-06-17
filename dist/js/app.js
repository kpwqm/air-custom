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
console.log('loaded index.js ...');

// search.html > tabs切换
jq(".search-tabs__ul li").on("click", function(){
  jq(this).addClass("active").siblings().removeClass("active");
})
// index.html > 点击播放视频
jq(".index-play__btn").on("click", function(){
  jq('.banner-wrap').empty();
  var _html = '<video id="video_box" controls="" name="media" height="100%" \
              src="http://101.37.29.221/image/web/upload/video/20170418/20170418185817.mp4"></video>';
  jq('.banner-wrap').append(_html);
})
// product.html > 点击播放视频
jq(".product-play__btn").on("click", function(){
  jq('.banner-product-wrap').css("background", "none");
  jq(this).remove();
  var _html = '<video id="video_box" controls="" name="media" height="100%" \
              src="http://101.37.29.221/image/web/upload/video/20170418/20170418185817.mp4"></video>';
  jq('.banner-product-box').append(_html);
})



// index.html > 切换类型
jq("#index-type-home, #index-type-business").on('change',function(){
  if(this.checked){
    if(this.value == "home"){
      jq('.index-business__data').hide();
      jq('.index-home__data').show();
    }else if(this.value == "business"){
      jq('.index-home__data').hide();
      jq('.index-business__data').show();
    }
  }else{
    return false;
  }
})


console.log('End index.js ...');