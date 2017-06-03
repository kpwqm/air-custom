# AIR CUSTOM
## 注意  
页面加载jQuery后，为避免与ecstore中的mootools库的$标识符的冲突，需要加上下面的语句进行重置jQuery标识符。
```javascript
<script>
  var jq = jQuery.noConflict();  
</script>
```

## 安装
先安装好npm
```
npm install
gulp air-custom && gulp air-custom-watch
```