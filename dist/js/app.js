console.log('loaded common.js ...');
jq(document).ready(function(){
  // 右侧置顶
  jq('#fixed-top').on("click", function(){
    jq('html, body').animate({scrollTop:0}, 200);
  })

  jq('.user-name__a, .user-nav-wrap').on("mouseenter", function(){
    jq('.user-nav-wrap').show();
  })
  .on("mouseleave", function(){
    jq('.user-nav-wrap').hide();
  })
})
  
console.log('End common.js ...');
console.log('loaded index.js ...');

  
console.log('End index.js ...');