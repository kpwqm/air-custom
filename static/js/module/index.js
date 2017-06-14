console.log('loaded index.js ...');

// search.html > tabs切换
jq(".search-tabs__ul li").on("click", function(){
  jq(this).addClass("active").siblings().removeClass("active");
})
// index.html > 点击播放视频
jq(".index-play__btn").on("click", function(){debugger
  alert('播放视频的交互处理...')
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