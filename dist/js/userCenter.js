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
    var car_num_val=parseInt(jq(this).siblings('.car-num').val());
    var car_price=jq(this).parent().siblings('.price').children().text();
    car_num_val++;
    jq(this).siblings('.car-num').val(car_num_val);
    jq(this).parent().siblings('.sigle_price').children().text((car_price*car_num_val).toFixed(2));

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
    jq(this).parent().siblings('.sigle_price').children().text((car_price*car_num_val).toFixed(2));

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
    console.log(11)
  });

  /*支付方式 end */

  /*服务类型 start */
  jq('.return_type-box a').click(function(){
    jq(this).addClass('action').siblings().removeClass('action');
  });
  /*服务类型 end */


});