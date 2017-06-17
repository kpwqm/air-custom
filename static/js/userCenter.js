jq(function(){

  /*个人收藏 编辑按钮 start */
  jq('.personal_contral').click(function(){
    jq(this).hide().siblings().show();
    jq('.personal_list input').show().removeAttr("checked");
  });
  /*个人收藏 编辑按钮 end */

  /*个人收藏 删除按钮 start */
  jq('.personal_contral-del').click(function(){
    jq(".personal_list input").each(function(){
      if(jq(this).is(':checked')){
        jq(this).parents('li').remove();
      }
    });
  });
  /*个人收藏 删除按钮 end */

  /*个人收藏 取消按钮 start */
  jq('.personal_contral-can').click(function(){
    jq(this).parent().hide().siblings().show();
    jq('.personal_list input').hide();
  });
  /*个人收藏 取消按钮 end */

  /*购物车 按钮 start */
  jq('.sigle_price').each(function(){
    var car_num=parseInt(jq(this).siblings().find('.car-num').val());
    var car_price=jq(this).siblings('.price').children().text();
    jq(this).children().text((car_price*car_num).toFixed(2))
  });

  jq('.car-plus').click(function(){
    var car_num_val=parseInt(jq(this).siblings('.car-num').val());
    var car_price=jq(this).parent().siblings('.price').children().text();
    if(car_num_val!=0){
      car_num_val = car_num_val -1;
      jq(this).siblings('.car-num').val(car_num_val);
      jq(this).parent().siblings('.sigle_price').children().text((car_price*car_num_val).toFixed(2));

      car_sum();
    }
  });

  jq('.car-add').click(function(){
    var car_num_val = parseInt(jq(this).siblings('.car-num').val());
    var car_price = jq(this).parent().siblings('.price').children().text();
    var toMaxNum = jq(this).parent().find('.return_num').length>0?jq(this).parent().find('.return_num').children().text():false;
    car_num_val++;
    if(toMaxNum){
      if(toMaxNum>=car_num_val){
        jq(this).siblings('.car-num').val(car_num_val);
        jq(this).parent().siblings('.sigle_price').children().text((car_price*car_num_val).toFixed(2));
      }
      else{
        car_num_val--;
      }
    }
    else{
      jq(this).siblings('.car-num').val(car_num_val);
      jq(this).parent().siblings('.sigle_price').children().text((car_price*car_num_val).toFixed(2));
    }
    
    

    car_sum();
  });

  jq('.car-num').keyup(function(){
    if(jq(this).val()!=''){
      var car_num_val=parseInt(jq(this).val());
    }
    else{
      var car_num_val=parseInt(jq(this).val(0));
    }
    var car_price=jq(this).parent().siblings('.price').children().text();
    var toMaxNum = jq(this).parent().find('.return_num').length>0?jq(this).parent().find('.return_num').children().text():false;
    if(toMaxNum){
      if(toMaxNum>=car_num_val){
        jq(this).parent().siblings('.sigle_price').children().text((car_price*car_num_val).toFixed(2));
      }
      else{
        jq(this).val(toMaxNum);
      }
    }
    else{
      jq(this).parent().siblings('.sigle_price').children().text((car_price*car_num_val).toFixed(2));
    }

    car_sum();
  });





  jq('.car-del').click(function(){
    jq(this).parents('tr').remove();

    car_sum();
  });

  jq('.car-all').click(function(){
    if(jq('input[name="car"]').is(':checked')){
      jq('input[name="car"]').prop("checked", false);
    }
    else{
      jq('input[name="car"]').prop("checked", true); 
    } 

    car_sum();
  });

  jq('input[name="car"]').click(function(){
    car_sum();
  });

  /*计算总和*/
  function car_sum(){
    var sum = 0; 
    jq('.personal_car-box input[name="car"]').each(function(){
      if(jq(this).is(':checked')){
        sum = sum + parseFloat(jq(this).parent().siblings('.sigle_price').children().text());
      }
    });
    jq('.car-sum .car-sum-price').children().text(sum.toFixed(2));
  }
  car_sum();


  // function maxNum(toMaxNum,numMax){
  //   if(toMaxNum>numMax){
  //     return false;
  //   }
  // }



  /*购物车 数量加减 按钮 start */

  /*支付方式 start */
  var pay_box;
  jq('.pay_box li label,.pay_box li input').click(function(){
    pay_box = jq(this).find('input').attr('name')||jq(this).attr('name');
    
    jq('.pay_box input').each(function(){
      if(jq(this).attr('name')==pay_box){
        jq(this).parents('li').removeClass('action');
      }
    });
    jq(this).parents('li').addClass('action');
  });

  /*支付方式 end */

  /*服务类型 start */
  jq('.return_type-box a').click(function(){
    jq(this).addClass('action').siblings().removeClass('action');
  });
  /*服务类型 end */


  /*评价 start */


  jq(".assess_star .ratyli").click(function(){
    jq(this).siblings('.score').addClass('click').text(jq(this).attr('data-rate')+"分");
  });

  jq("#assess_textarea").keyup(function(){
    var curLength=jq("#assess_textarea").val().length;
    if(curLength>500)
    {
          var num=jq("#assess_textarea").val().substr(0,5);
          jq("#assess_textarea").val(num);
          alert("超过字数限制，多出的字将被截断！" );
    }
    else
    {
          jq(".return_textarea-txt").text(500-jq("#assess_textarea").val().length+"/500 字");
    }
  });



  /*上传图片插件 */
  var delParent;
	var defaults = {
		fileType         : ["jpg","png","bmp","jpeg"],   // 上传文件的类型
		fileSize         : 1024 * 1024 * 10                  // 上传文件的大小 10M
	};
		/*点击图片的文本框*/
	jq(".file").change(function(){
		var idFile = jq(this).attr("id");
		var file = document.getElementById(idFile);
		var imgContainer = jq(this).parents(".z_photo"); //存放图片的父亲元素
		var fileList = file.files; //获取的图片文件
		console.log(fileList+"======filelist=====");
		var input = jq(this).parent();//文本框的父亲元素
		var imgArr = [];
		//遍历得到的图片文件
		var numUp = imgContainer.find(".up-section").length;
		var totalNum = numUp + fileList.length;  //总的数量
		if(fileList.length > 10 || totalNum > 10 ){
			alert("上传图片数目不可以超过10个，请重新选择");  //一次选择上传超过10个 或者是已经上传和这次上传的到的总数也不可以超过10个
		}
		else if(numUp < 10){
			fileList = validateUp(fileList);
			for(var i = 0;i<fileList.length;i++){
			 var imgUrl = window.URL.createObjectURL(fileList[i]);
			     imgArr.push(imgUrl);
			 var $section = jq("<section class='up-section fl loading'>");
			     imgContainer.prepend($section);
			 var $span = jq("<span class='up-span'>");
			     $span.appendTo($section);
			
		     var $img0 = jq("<img class='close-upimg'>").on("click",function(event){
				    event.preventDefault();
					event.stopPropagation();
					// jq(".works-mask").show();
					delParent = jq(this).parent();
					 var numUp = delParent.siblings().length;
					if(numUp < 11){
						delParent.parent().find(".z_file").show();
					}
					delParent.remove();
				});   
				$img0.attr("src","./dist/images/common/a7.png").appendTo($section);
		     var $img = jq("<img class='up-img up-opcity'>");
		         $img.attr("src",imgArr[i]);
		         $img.appendTo($section);
		     var $p = jq("<p class='img-name-p'>");
		         $p.html(fileList[i].name).appendTo($section);
		     var $input = jq("<input id='taglocation' name='taglocation' value='' type='hidden'>");
		         $input.appendTo($section);
		     var $input2 = jq("<input id='tags' name='tags' value='' type='hidden'/>");
		         $input2.appendTo($section);
		   }
		}
		setTimeout(function(){
             jq(".up-section").removeClass("loading");
		 	 jq(".up-img").removeClass("up-opcity");
		 },450);
		 numUp = imgContainer.find(".up-section").length;
     
		if(numUp >= 10){
			jq(this).parent().hide();
      
		}
    jq('.up-img-massage .up').text(numUp);
    jq('.up-img-massage .now').text(10-numUp);

		
		//input内容清空
		jq(this).val("");
	});
	
	
   
    jq(".z_photo").delegate(".close-upimg","click",function(){
     	//   jq(".works-mask").show();
     	//   delParent = jq(this).parent();
		   var numUp = delParent.siblings().length;
		if(numUp < 6){
			delParent.parent().find(".z_file").show();
		}
		 delParent.remove();
	});
		
	// jq(".wsdel-ok").click(function(){
	// 	jq(".works-mask").hide();
	// 	var numUp = delParent.siblings().length;
	// 	if(numUp < 6){
	// 		delParent.parent().find(".z_file").show();
	// 	}
	// 	 delParent.remove();
		
	// });
	
	// jq(".wsdel-no").click(function(){
	// 	jq(".works-mask").hide();
	// });
		
		function validateUp(files){
			var arrFiles = [];//替换的文件数组
			for(var i = 0, file; file = files[i]; i++){
				//获取文件上传的后缀名
				var newStr = file.name.split("").reverse().join("");
				if(newStr.split(".")[0] != null){
						var type = newStr.split(".")[0].split("").reverse().join("");
						console.log(type+"===type===");
						if(jQuery.inArray(type, defaults.fileType) > -1){
							// 类型符合，可以上传
							if (file.size >= defaults.fileSize) {
								alert(file.size);
								alert('您这个"'+ file.name +'"文件大小过大');	
							} else {
								// 在这里需要判断当前所有文件中
								arrFiles.push(file);	
							}
						}else{
							alert('您这个"'+ file.name +'"上传类型不符合');	
						}
					}else{
						alert('您这个"'+ file.name +'"没有类型, 无法识别');	
					}
			}
			return arrFiles;
		}
		
  
  /*评价 end */

  /*模态框  start*/
  jq('.modal-title').text(jq('.modal_get_title').text());

  /*模态框  end*/

  /*密码强度 - start */
  jq('#password_register').keyup(function () { 
		var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g"); 
		var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g"); 
		var enoughRegex = new RegExp("(?=.{6,}).*", "g"); 
	
		if (false == enoughRegex.test(jq(this).val())) { 
			jq('#level').removeClass('pw-weak'); 
			jq('#level').removeClass('pw-medium'); 
			jq('#level').removeClass('pw-strong'); 
			jq('#level').addClass(' pw-defule'); 
			 //密码小于六位的时候，密码强度图片都为灰色 
		} 
		else if (strongRegex.test(jq(this).val())) { 
			jq('#level').removeClass('pw-weak'); 
			jq('#level').removeClass('pw-medium'); 
			jq('#level').removeClass('pw-strong'); 
			jq('#level').addClass(' pw-strong'); 
			 //密码为八位及以上并且字母数字特殊字符三项都包括,强度最强 
		} 
		else if (mediumRegex.test(jq(this).val())) { 
			jq('#level').removeClass('pw-weak'); 
			jq('#level').removeClass('pw-medium'); 
			jq('#level').removeClass('pw-strong'); 
			jq('#level').addClass(' pw-medium'); 
			 //密码为七位及以上并且字母、数字、特殊字符三项中有两项，强度是中等 
		} 
		else { 
			jq('#level').removeClass('pw-weak'); 
			jq('#level').removeClass('pw-medium'); 
			jq('#level').removeClass('pw-strong'); 
			jq('#level').addClass('pw-weak'); 
			 //如果密码为6为及以下，就算字母、数字、特殊字符三项都包括，强度也是弱的 
		} 
		return true; 
	});
  /*密码强度 - end */

  
  /*运输信息 start */
  jq('.ac_personal_contral').click(function(){
    jq(this).hide();
    jq(this).parents('.ac_personal_index').addClass('revising');
    jq(this).parent().siblings().find('.show_transport').hide();
    jq(this).parent().siblings().find('.revise_transport').show();
  });

  jq('.transport_contral .account_box-cancel').click(function(){
    jq(this).parents('.ac_personal_index').removeClass('revising');
    jq(this).parents('.transport').find('.ac_personal_contral').show();
    jq(this).parents('.transport').find('.show_transport').show();
    jq(this).parents('.transport').find('.revise_transport').hide();
  });

  /*运输信息 end */

  /*产品内页 -start */
  jq('.function_box-main').mouseover(function(){
    jq(this).addClass('hashover');
    jq(this).find('.action_hover').fadeOut(400);

  })
  jq('.pro_hotspot').click(function(){
    jq(this).parent().addClass('action').siblings().removeClass('action');
  });
  /*产品内页 -end */




});