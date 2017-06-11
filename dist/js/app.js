/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){if(a(b.target).is(this))return b.handleObj.handler.apply(this,arguments)}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.7",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a("#"===f?[]:f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.7",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c).prop(c,!0)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c).prop(c,!1))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target).closest(".btn");b.call(d,"toggle"),a(c.target).is('input[type="radio"], input[type="checkbox"]')||(c.preventDefault(),d.is("input,button")?d.trigger("focus"):d.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(a>this.$items.length-1||a<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){if(!this.sliding)return this.slide("next")},c.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.7",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.7",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){document===a.target||this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);if(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),!c.isInStateTrue())return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element&&e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);if(this.$element.trigger(g),!g.isDefaultPrevented())return f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=window.SVGElement&&c instanceof window.SVGElement,g=d?{top:0,left:0}:f?null:b.offset(),h={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},i=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,h,i,g)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null,a.$element=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.7",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.7",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){
this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.7",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return e<c&&"top";if("bottom"==this.affixed)return null!=c?!(e+this.unpin<=f.top)&&"bottom":!(e+g<=a-d)&&"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&e<=c?"top":null!=d&&i+j>=a-d&&"bottom"},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
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
// Ratyli: jquery rating plugin
// version 0.2.1
// (c) 2015 Peter Varga [info@vargapeter.com]
// released under the Apache 2.0 license
(function($){
    $.ratyli = function(el, options){
        var base = this;
        base.$el = $(el);
        base.el = el;
        
        base.$el.data("ratyli", base);
        
        base.init = function(){
            // extend with parameters
            base.options = $.extend({},$.ratyli.defaultOptions, options);
          
            // extend with html5 dataset
            base.options =$.extend({},base.options,base.$el.data());
  
            // for the loop
            base.set(base.options.rate,true);
          
            // event listeners for rating signs
            base.$el.on("click","> *",function(e){
              if(!base.options.disable){
                var target= e.target;
                if(target.tagName!="SPAN") target=target.parentNode;
                
                base.options.onSignClick.call(base,target);
                var val=$(target).prevAll().length+1;

                base.set(val);
              }
            });
          
            base.$el.on("mouseenter","> *",function(e){
                var target= e.target;
                if(target.tagName!="SPAN") target=target.parentNode;
              
                if(!base.options.disable){
                  $(target).addClass("rate-active");
                  $(target).prevAll().addClass("rate-active");
                }
                base.options.onSignEnter.apply(null,[base.options.rate,target]);
            });

            base.$el.on("mouseleave","> *",function(e){
                var target= e.target;
                if(target.tagName!="SPAN") target=target.parentNode;
              
                if(!base.options.disable){
                  $(target).removeClass("rate-active");
                  $(target).prevAll().removeClass("rate-active");
                }
                base.options.onSignLeave.apply(null,[base.options.rate,target]);
            });

        };
      
        base.set=function(val,init){
            if(val<0 || (val % 1 != 0) || val>base.options.ratemax) val=0; // reset to 0.

            if(val==1 && base.options.rate==1 && base.options.unrateable==true && !init){
                val=0;
            }

            base.options.rate=val;
 
            // reset html
            base.$el.html("");

            // set data-rate
            if (base.options.rate!=0) base.$el.attr("data-rate",base.options.rate);

            // set data-ratemax
            base.$el.attr("data-ratemax",base.options.ratemax);


            // generate signs
             var i=0;
             while (i < base.options.ratemax) {
                  var tmp="";
                  if(i<base.options.rate){
                    tmp=base.signTemplate("full");
                  }else{
                    tmp=base.signTemplate("empty");
                  }
                  base.$el.append(tmp);
                  i++;
            }
            
            // set rated
            if(!init && !base.options.disable){
                base.$el.addClass("rated");
                base.$el.attr("data-rate",val);
            }

            //rated callack
            base.options.onRated.call(base,val,init);
          
            return base.options.rate;
        };
      
      
        base.signTemplate=function(type){
            return "<span class='rate rate-"+type+"'>"+base.options[type]+"</span>";
        };
                  
        base.init();
       
    };
    
    $.ratyli.defaultOptions = {
        disable: false,
        unrateable: false,
        full: "★",
        empty: "☆",
        cursor:"default",
        rate:0,
        ratemax:5,
        onSignEnter:function(){},
        onSignLeave:function(){},
        onSignClick:function(){},
        onRated:function(){}
    };
    
    $.fn.ratyli = function(options){
        return this.each(function(){
            (new $.ratyli(this, options));
        });
    };
    
})(jQuery);

/*
 * error:an teleiwsei to upload kai iparxei ena sti lista pou den exei patithei
 * */

(function (root, factory) {
    //@author http://ifandelse.com/its-not-hard-making-your-library-support-amd-and-commonjs/
    if (typeof module === "object" && module.exports) {
        module.exports = factory(require("jquery"));
    } else {
        factory(root.jQuery);
    }
}(this, function ($) {
    var Ssi_upload = function (element, options) {
        this.options = options;
        this.$element = '';
        this.language = locale[this.options.locale];
        this.uploadList = [];
        this.totalProgress = [];
        this.toUpload = [];
        this.imgNames = [];
        this.totalFilesLength = 0;
        this.successfulUpload = 0;
        this.aborted = 0;
        this.abortedWithError = 0;
        this.pending = 0;
        this.inProgress = 0;
        this.currentListLength = 0;
        this.init(element);
    };
    Ssi_upload.prototype.init = function (element) {
        $(element).addClass('ssi-uploadInput')
         .after(this.$element = $('<div class="ssi-uploader">'));
        var $chooseBtn = $('' +
         '<span class="ssi-InputLabel">' +
         '<button class="ssi-button success">' + this.language.chooseFiles + '</button>' +
         '</span>').append(element);
        var $uploadBtn = $('<button id="ssi-uploadBtn" class="ssi-button success ssi-hidden" >' +
         '<span class="ssi-btnIn">' + this.language.upload + '&nbsp;</span>' +
         '<div id="ssi-up_loading" class="ssi-btnIn"></div></button>');
        var $clearBtn = $('<button id="ssi-clearBtn" class="ssi-hidden ssi-button info" >' + this.language.clear +
         '</button>');
        var $abortBtn = $('<button id="ssi-abortBtn" class="ssi-button error ssi-cancelAll ssi-hidden" ><span class="inBtn">' + this.language.abort + ' </span></button>');

        this.$element.append($('<div class="ssi-buttonWrapper">').append($chooseBtn, $abortBtn, $uploadBtn, $clearBtn));
        var $uploadBox;
        if (!this.options.preview) {
            this.$element.addClass('ssi-uploaderNP');
            var $fileList = $('<table id="ssi-fileList" class="ssi-fileList"></table>');
            var $namePreview = $('<span class="ssi-namePreview"></span>');
            var $mainBox = $('<div id="ssi-uploadFiles" class="ssi-tooltip ssi-uploadFiles ' + (this.options.dropZone ? 'ssi-dropZone' : '') + '"><div id="ssi-uploadProgressNoPreview" class="ssi-uploadProgressNoPreview"></div></div>')
             .append($namePreview);
            var $uploadDetails = $('<div class="ssi-uploadDetails"></div>').append($fileList);
            $uploadBox = $('<div class="ssi-uploadBoxWrapper ssi-uploadBox"></div>').append($mainBox, $uploadDetails);
            this.$element.prepend($uploadBox);
        } else {
            $uploadBox = $('<div id="ssi-previewBox" class="ssi-uploadBox ssi-previewBox ' + (this.options.dropZone ? 'ssi-dropZonePreview ssi-dropZone"><div id="ssi-DropZoneBack">' + this.language.drag + '</div>' : '">') + '</div>');
            this.$element.append($uploadBox);
        }
        var thisS = this;
        var $input = $chooseBtn.find(".ssi-uploadInput");
        $chooseBtn.find('button').click(function () {
            $input.trigger('click');
        });

        $input.on('change', function () { //choose files
            thisS.toUploadFiles(this.files);
            $input.val('');
        });
        //drag n drop
        if (thisS.options.dropZone) {
            $uploadBox.on("drop", function (e) {
                e.preventDefault();
                $uploadBox.removeClass("ssi-dragOver");
                var files = e.originalEvent.dataTransfer.files;
                thisS.toUploadFiles(files);
            });
            $uploadBox.on("dragover", function (e) {
                e.preventDefault();
                $uploadBox.addClass("ssi-dragOver");
                return false;
            });
            $uploadBox.on("dragleave", function (e) {
                e.preventDefault();
                $uploadBox.removeClass("ssi-dragOver");
                return false;
            });
        }

        if (!thisS.options.preview) {
            $mainBox.click(function () {
                if (thisS.currentListLength > 1)
                    $uploadDetails.toggleClass('ssi-uploadBoxOpened');
            })
        }

        $clearBtn.click(function () { //choose files completed and pending files
            thisS.clear();
        });

        var $tooltip;

        $uploadBox.on('mouseenter', '.ssi-statusLabel', function (e) { //the tooltip
            var $eventTarget = $(e.currentTarget);
            var title = $eventTarget.attr('data-status');
            if (!title || title === '') {
                return;
            }
            var tooltipHeight = '35';
            if ($eventTarget.hasClass('ssi-noPreviewSubMessage')) {
                tooltipHeight = 0;
            }
            $tooltip = $('<div class="ssi-infoTooltip">'
             + title +
             '</div>')
             .appendTo(thisS.$element)
             .css({top: $eventTarget.position().top - tooltipHeight, left: $eventTarget.position().left - 5})
             .fadeIn('slow');

        });

        $uploadBox.on('mouseleave', '.ssi-statusLabel', function () {
            if ($tooltip)
                $tooltip.remove();
        });

        $uploadBox.on('click', '.ssi-removeBtn', function (e) { //remove the file from list
            var $currentTarget = $(e.currentTarget);
            var index = $currentTarget.data('delete'); //get file's index
            thisS.pending--; //reduce pending number by 1
            thisS.currentListLength--; //reduce current list length by 1
            if (thisS.pending === 0) {
                $uploadBtn.prop('disabled', true); //if there is no more files disable upload button
            }
            if (thisS.options.preview) { //if preview is true
                $currentTarget.parents('table.ssi-imgToUploadTable').remove(); //remove table
            } else {
                var target = $currentTarget.parents('tr.ssi-toUploadTr'); //find the tr of file
                $namePreview.html((thisS.currentListLength) + ' files'); //set the main name to the remaining files
                target.prev().remove();// remove empty tr (using id for margin between rows)
                target.remove();// remove the file
                if (thisS.currentListLength === 1) { //if only one file left in the list
                    setLastElementName(thisS); //set main preview to display the name
                }
            }
            thisS.toUpload[index] = null; //set the file's obj to null (we don't splice it because we need to keep the same indexes)
            thisS.imgNames[index] = null; //set the file's name to null

            if (thisS.currentListLength === 0) { // if no more files in the list
                if (!thisS.options.dropZone) { // if drag and drop is disabled
                    $uploadBox.removeClass('ssi-uploadNoDropZone');
                }
                $clearBtn.addClass('ssi-hidden');
                $uploadBtn.addClass('ssi-hidden');
            }
        });
        $uploadBox.on('click', '.ssi-abortUpload', function (e) {//abort one element
            var $eventTarget = $(e.currentTarget);
            var index = $eventTarget.data('delete');// get the element id
            thisS.abort(index); // abort request
        });
//----------------------------UPLOADFILES------------------------------------
        $uploadBtn.click(function () {// upload the files
            thisS.uploadFiles();
        });
        $abortBtn.click(function () { // abort all requests
            thisS.abortAll();
        });

    };
    Ssi_upload.prototype.abortAll = function () {
        for (var i = 0; i < this.uploadList.length; i++) { //all element in the list
            if (typeof this.uploadList[i] === 'object') {// check if not deleted
                this.abort(i)
            }
        }
    };
    Ssi_upload.prototype.toUploadFiles = function (files) {
        if (typeof this.options.maxNumberOfFiles === 'number') {
            if ((this.inProgress + this.pending) >= this.options.maxNumberOfFiles) {// if in progress files + pending files are more than the number that we have define as max number of files pre download
                return;//don't do anything
            }
        }
        var thisS = this,
         j = 0,
         length,
         imgContent = '',
         $uploadBtn = this.$element.find('#ssi-uploadBtn'),
         $clearBtn = this.$element.find('#ssi-clearBtn'),
         $fileList = this.$element.find('#ssi-fileList'),
         $uploadBox = this.$element.find('.ssi-uploadBox'),
         imgs = [];
        if ((this.inProgress === 0 && this.pending === 0)) { //if no file are pending or are in progress
            this.clear(); //clear the list
        }
        var extErrors = [], sizeErrors = [], errorMessage = '';
        var toUploadLength, filesLength = length = toUploadLength = files.length;
        if (typeof this.options.maxNumberOfFiles === 'number') {//check if requested files agree with our arguments
            if (filesLength > this.options.maxNumberOfFiles - (this.inProgress + this.pending)) { //if requested files is more than we need
                filesLength = toUploadLength = this.options.maxNumberOfFiles - (this.inProgress + this.pending); // set variable to the number of files we need
            }
        }
        //
        for (var i = 0; i < filesLength; i++) {
            var file = files[i],
             ext = file.name.getExtension();// get file's extension
            if ($.inArray(ext, this.options.allowed) === -1) { // if requested file not allowed
                if (length > filesLength) {//there are more file we dont pick
                    filesLength++;//the add 1 more loop
                } else {
                    toUploadLength--;
                }
                if ($.inArray(ext, extErrors) === -1) {//if we see first time this extension
                    extErrors.push(ext); //push it to extErrors variable
                }
            } else if ((file.size * Math.pow(10, -6)).toFixed(2) > this.options.maxFileSize) {//if file size is more than we ask
                if (length > filesLength) {
                    filesLength++;
                } else {
                    toUploadLength--;
                }
                sizeErrors.push(cutFileName(file.name, ext, 15));//register a size error
            } else if ($.inArray(file.name, this.imgNames) === -1) {// if the file is not already in the list
                $uploadBtn.prop("disabled", false);
                setupReader(file);
                this.pending++; // we have one more file that is pending to be uploaded
                this.currentListLength++;// we have one more file in the list
            } else {
                if (length > filesLength) {
                    filesLength++;
                } else {
                    toUploadLength--;
                }
            }
        }
        var extErrorsLength = extErrors.length, sizeErrorsLength = sizeErrors.length;
        if (extErrorsLength + sizeErrorsLength > 0) { // in the end expose all errors
            if (extErrorsLength > 0) {
                errorMessage = this.language.extError.replaceText(extErrors.toString().replace(/,/g, ', '));
            }
            if (sizeErrorsLength > 0) {
                errorMessage += this.language.sizeError.replaceText(sizeErrors.toString().replace(/,/g, ', '), this.options.maxFileSize + 'mb');
            }
            this.options.errorHandler.method(errorMessage, this.options.errorHandler.error);
        }
        function setupReader() {
            var index = thisS.totalFilesLength + thisS.pending;
            if (index === 0) {//do it only the first time
                if (thisS.options.preview) {
                    if (!thisS.options.dropZone) {
                        $uploadBox.addClass('ssi-uploadNoDropZone')
                    }
                }
                $uploadBtn.removeClass('ssi-hidden');
                $clearBtn.removeClass('ssi-hidden');
            }
            $clearBtn.prop('disabled', false);
            thisS.toUpload[index] = file;
            var filename = file.name;
            var ext = filename.getExtension(); //get file's extension
            thisS.imgNames[index] = filename; //register file's name
            if (thisS.options.preview) {
                var getTemplate = function (content) {
                    return '<table class="ssi-imgToUploadTable ssi-pending">' +
                     '<tr><td class="ssi-upImgTd">' + content + '</td></tr>' +
                     '<tr><td><div id="ssi-uploadProgress' + index + '" class="ssi-hidden ssi-uploadProgress"></div></td></tr>' +
                     '<tr><td><button data-delete="' + index + '" class=" ssi-button error ssi-removeBtn"><span class="trash10 trash"></span></button></td></tr>' +
                     '<tr><td>' + cutFileName(filename, ext, 15) + '</td></tr></table>'
                };
                var fileType = file.type.split('/');

                if (fileType[0] == 'image') {
                    $uploadBtn.prop("disabled", true);
                    $clearBtn.prop("disabled", true);
                    var fileReader = new FileReader();
                    fileReader.onload = function () {
                        imgContent += getTemplate('<img class="ssi-imgToUpload" src=""/><i class="fa-spin fa fa-spinner fa-pulse"></i>'); // set the files element without the img
                        imgs[index] = fileReader.result;
                        j++;
                        if (toUploadLength === j) {// if all elements are in place lets load images
                            $uploadBox.append(imgContent);
                            $uploadBtn.prop("disabled", false);
                            $clearBtn.prop("disabled", false);
                            setTimeout(function () {
                                setImg();//and load the images
                            }, 10);
                            imgContent = '';
                            toUploadLength = [];
                        }
                    };
                    fileReader.readAsDataURL(file);
                } else {
                    imgs[index] = null;
                    $uploadBox.append(getTemplate('<div class="document-item" href="test.mov" filetype="' + ext + '"><span class = "fileCorner"></span></div>'));
                    j++;
                }
            } else {
                thisS.$element.find('.ssi-namePreview').html((index === 0 ? cutFileName(filename, ext, 13) : (thisS.currentListLength + 1) + ' ' + thisS.language.files));//set name preview
                $fileList.append('<tr class="ssi-space"><td></td></tr>' +//append files element to dom
                 '<tr class="ssi-toUploadTr ssi-pending"><td><div id="ssi-uploadProgress' + index + '" class="ssi-hidden ssi-uploadProgress ssi-uploadProgressNoPre"></div>' +
                 '<span>' + cutFileName(filename, ext, 20) + '</span></td>' +
                 '<td><a data-delete="' + index + '" class="ssi-button ssi-removeBtn  ssi-removeBtnNP"><span class="trash7 trash"></span></a></td></tr>');
            }

            var setImg = function () {//load the images
                for (var i = 0; i < imgs.length; i++) {
                    if (imgs[i] !== null) {
                        $uploadBox.find("#ssi-uploadProgress" + i).parents('table.ssi-imgToUploadTable')
                         .find('.ssi-imgToUpload')
                         .attr('src', imgs[i]) //set src of the image
                         .next().remove();//remove the spinner
                        imgs[i] = null;
                    }
                }
                imgs = [];
            };
        }
    };
    var clearCompleted = function (thisS) {//clear all completed files
        var $completed = thisS.$element.find('.ssi-completed');
        thisS.successfulUpload = 0;
        thisS.aborted = 0;
        thisS.abortedWithError = 0;
        if (!thisS.options.preview)$completed.prev('tr').remove();
        $completed.remove();
    };
    var clearPending = function (thisS) {//clear all pending files
        var $pending = thisS.$element.find('.ssi-pending');
        var length = thisS.imgNames.length;
        for (var i = 0; i < length; i++) {
            if (thisS.imgNames[i] === null) {
                thisS.toUpload.splice(i, 1);
                thisS.imgNames.splice(i, 1);
            }
        }
        thisS.toUpload.splice(-thisS.pending, thisS.pending);
        thisS.imgNames.splice(-thisS.pending, thisS.pending);
        thisS.pending = 0;
        if (!thisS.options.preview)$pending.prev('tr').remove();
        $pending.remove();
    };

    Ssi_upload.prototype.clear = function (action) {//clean the list of all non in progress files
        switch (action) {
            case 'pending':
                clearPending(this);
                break;
            case 'completed':
                clearCompleted(this);
                break;
            default:
                clearPending(this);
                clearCompleted(this);
        }
        var $uploadBtn = this.$element.find('#ssi-uploadBtn'),
         $clearBtn = this.$element.find('#ssi-clearBtn');
        this.currentListLength = getCurrentListLength(this);
        if (this.inProgress === 0) { //if no file are uploading right now
            this.totalProgress = [];
        }
        if ((this.currentListLength === 0)) { // if no items in the list
            $clearBtn.addClass('ssi-hidden');
            $uploadBtn.addClass('ssi-hidden');
            this.totalFilesLength = 0;
            if (!this.options.dropZone) {
                this.$element.find('.ssi-uploadBox').removeClass('ssi-uploadNoDropZone')
            }
        }
        $clearBtn.prop('disabled', true);
        $uploadBtn.prop('disabled', true);

        if (!this.options.preview) {
            setNamePreview(this);
        }
    };

    var setNamePreview = function (thisS) {//set the name preview according to the remaining elements in the list
        if (thisS.currentListLength > 1) {//if more than one element left
            thisS.$element.find('.ssi-namePreview').html(thisS.currentListLength + ' files'); // set the name preview to the length of the remaining items
        } else if (thisS.currentListLength === 1) {//if one left
            setLastElementName(thisS); // set the name of the element
        } else { //if no elements left
            thisS.$element.find('.ssi-uploadDetails').removeClass('ssi-uploadBoxOpened');
            thisS.$element.find('#ssi-fileList').empty();//empty list
            thisS.$element.find('.ssi-namePreview').empty();//empty the name preview
        }

    };
    Ssi_upload.prototype.uploadFiles = function () {// upload the pending files
        if (this.pending > 0) {
            this.$element.find('#ssi-abortBtn').removeClass('ssi-hidden');
            this.$element.find('.ssi-removeBtn')
             .addClass('ssi-abortUpload')
             .removeClass('ssi-removeBtn')
             .children('span').removeClass('trash7 trash10 trash')
             .addClass((this.options.preview ? 'ban7w' : 'ban7'));//transform remove button to abort button
            var $uploadBtn = this.$element.find('#ssi-uploadBtn'),
             $clearBtn = this.$element.find('#ssi-clearBtn');
            $uploadBtn.prop("disabled", true);
            var thisS = this,
             formData = new FormData(),//set the form data
             i = this.totalFilesLength;
            if (this.totalFilesLength !== 0 && !this.options.preview) {
                setNamePreview(this);
            }
            this.inProgress += this.pending;// add pending to in progress
            this.totalFilesLength += this.pending;// this variable is to prevent id duplication during uploads
            this.pending = 0;
            if (this.inProgress === this.currentListLength) {// disable the clear button if no items in list we can be remove
                $clearBtn.prop("disabled", true);
            }
            while (this.toUpload[i] === null) { // do it until you find a file
                i++;
            }
            formData.append('files[]', thisS.toUpload[i]);//append the first file to the form data
            $.each(this.options.data, function (key, value) {// append all extra data
                formData.append(key, value);
            });
            if (typeof this.options.beforeUpload === 'function') {
                try {
                    this.options.beforeUpload();// execute the beforeUpload callback
                } catch (err) {
                    console.log('There is an error in beforeUpload callback');
                    console.log(err);
                    thisS.abortAll();
                    return;
                }
            }
            thisS.$element.find('input.ssi-uploadInput').trigger('beforeUpload.ssi-uploader');
            ajaxLoopRequest(formData, i);// make the request
        }

        //--------------start of ajax request-----------------------
        function ajaxLoopRequest(formData, ii) {
            var selector = 'table.ssi-imgToUploadTable';
            if (!thisS.options.preview) {
                selector = 'tr.ssi-toUploadTr'
            }
            var uploadBar = thisS.$element.find('#ssi-uploadProgress' + ii);//get the file's  progress bar
            uploadBar.removeClass('ssi-hidden') //make it visible
             .parents(selector).removeClass('ssi-pending');
            var ajaxOptions = $.extend({}, {//store the request to the uploadList variable
                xhr: function () {
                    var xhr = new window.XMLHttpRequest();
                    xhr.upload.addEventListener('progress', function (e) {// add event listener to progress
                        if (e.lengthComputable) {
                            var percentComplete = (e.loaded / e.total) * 100;// calculate the progress
                            if (uploadBar) {
                                uploadBar.css({
                                    width: percentComplete + '%'//update the progress bar width according to the progress
                                });
                            }
                            thisS.totalProgress[ii] = percentComplete;//store the progress to the array
                            var sum = arraySum(thisS.totalProgress) / (thisS.inProgress + thisS.successfulUpload);//and calculate the overall progress
                            if (!thisS.options.preview) {
                                thisS.$element.find('#ssi-uploadProgressNoPreview')
                                 .removeClass('ssi-hidden')
                                 .css({
                                     width: sum + '%'
                                 });
                            }
                            $uploadBtn.find('#ssi-up_loading').html(Math.ceil(sum) + '%');// add to upload button the current overall progress percent number
                        }
                    }, false);
                    return xhr;
                },
                async: true,
                beforeSend: function (xhr) {
                    thisS.uploadList[ii] = xhr;
                    $uploadBtn.find('#ssi-up_loading') //add spiner to uploadbutton
                     .html('<i class="fa fa-spinner fa-pulse"></i>');
                    if (typeof thisS.options.beforeEachUpload === 'function') {
                        try {
                            var msg = thisS.options.beforeEachUpload({// execute the beforeEachUpload callback and save the returned value
                                name: thisS.toUpload[ii].name,//send some info of the file
                                type: thisS.toUpload[ii].type,
                                size: (thisS.toUpload[ii].size / 1024).toFixed(2)

                            }, xhr);
                        } catch (err) {
                            console.log('There is an error in beforeEachUpload callback');
                            console.log(err);
                            thisS.abortAll();
                            return;
                        }
                    }
                    thisS.$element.find('input.ssi-uploadInput').trigger('beforeEachUpload.ssi-uploader');
                    if (xhr.status === 0) {
                        if (xhr.statusText === 'canceled') {//if user used beforeEachUpload to abort the request
                            if (typeof msg === 'undefined') {//if no message
                                msg = false; //because user have already aborted the request set to false or anything else except undefined to prevent to abort it again
                            }
                            thisS.abortedWithError++;// we have one error more
                            thisS.abort(ii, msg);//call the abort function
                        }
                    }
                },
                type: 'POST',
                data: formData,
                cache: false,
                contentType: false,
                processData: false,
                url: thisS.options.url,
                error: function (request, error) {
                    if (error !== 'abort') {
                        uploadBar.addClass('ssi-canceledProgressBar');
                        var msg = thisS.language.error;
                        thisS.abortedWithError++;//add one more error
                        thisS.totalProgress.splice(ii, 1); //remove from progress array
                        if (!thisS.options.preview) {
                            msg = '<span class="exclamation7"></span>';
                        }
                        setElementMessage(thisS, ii, 'error', msg, thisS.language.serverError);
                        thisS.totalProgress[ii] = '';
                        thisS.inProgress--;
                        $clearBtn.prop("disabled", false);
                        if (typeof thisS.options.onEachUpload === 'function') {//execute the onEachUpload callback
                            try {
                                thisS.options.onEachUpload({//and return some info
                                    uploadStatus: 'error',
                                    name: thisS.toUpload[ii].name,
                                    size: (thisS.toUpload[ii].size / 1024).toFixed(2),
                                    type: thisS.toUpload[ii].type
                                });
                            } catch (err) {
                                console.log('There is an error in onEachUpload callback');
                                console.log(err);
                            }
                        }
                        if (getCompleteStatus(thisS)) {//if no more elements in progress
                            finishUpload(thisS);
                        }
                        console.log(arguments);//log the error
                        console.log(" Ajax error: " + error);
                    }
                }
            }, thisS.options.ajaxOptions);
            $.ajax(ajaxOptions).done(function (responseData, textStatus, jqXHR) {
                var msg, title = '', dataType = 'error', spanClass = 'exclamation', data;
                try {
                    data = $.parseJSON(responseData);
                } catch (err) {
                    data = responseData;
                }
                if (thisS.options.responseValidation) {
                    var valData = thisS.options.responseValidation;
                    if (typeof valData.validationKey === 'object' && valData.resultKey == 'validationKey') {
                        if (data.hasOwnProperty(valData.validationKey.success)) {
                            cb(true);
                        } else {
                            cb(false, data[valData.validationKey.error]);
                        }
                    } else {
                        if (data[valData.validationKey] == valData.success) {
                            cb(true);
                        } else {
                            cb(false, data[valData.resultKey]);
                        }
                    }
                } else {
                    if (jqXHR.status == 200) {
                        cb(true);
                    } else {
                        cb(false, data);
                    }
                }
                function cb(result, data) {
                    if (result) {//if response type is success
                        dataType = 'success';
                        msg = thisS.language.success;
                        spanClass = 'check';
                        thisS.successfulUpload++;// one more successful upload
                    } else {
                        uploadBar.addClass('ssi-canceledProgressBar');
                        if (thisS.options.preview) {
                            msg = thisS.language.error;
                        }
                        title = data;
                        thisS.abortedWithError++;
                    }
                }

                if (!thisS.options.preview) {
                    msg = '<span class="' + spanClass + '7"></span>';
                }
                setElementMessage(thisS, ii, dataType, msg, title);

                if (typeof thisS.options.onEachUpload === 'function') {//execute the onEachUpload callback
                    try {
                        thisS.options.onEachUpload({//and return some info
                            uploadStatus: dataType,
                            name: thisS.toUpload[ii].name,
                            size: (thisS.toUpload[ii].size / 1024).toFixed(2),
                            type: thisS.toUpload[ii].type
                        });
                    } catch (err) {
                        console.log('There is an error in onEachUpload callback');
                        console.log(err);
                    }
                }
                thisS.$element.find('input.ssi-uploadInput').trigger('onEachUpload.ssi-uploader');
                thisS.inProgress--;//one less in progress upload
                $clearBtn.prop("disabled", false);
                if (getCompleteStatus(thisS)) {//if no more files in progress
                    finishUpload(thisS);
                }
                // thisS.totalProgress[ii]='';
                thisS.uploadList[ii] = '';
                thisS.toUpload[ii] = '';
                thisS.imgNames[ii] = '';
            });
            //--------------end of ajax request-----------------------

            i = ii;
            i++;//go to the next element
            while (thisS.toUpload[i] === null) {// do it until you find a file
                i++;
            }
            if (i < thisS.toUpload.length) {// if more files exist start the next request
                formData = new FormData();
                $.each(thisS.options.data, function (key, value) {
                    formData.append(key, value);
                });
                formData.append('files[]', thisS.toUpload[i]);
                ajaxLoopRequest(formData, i);
            }
        }
    };
    var setElementMessage = function (thisS, index, msgType, msg, title) {
        var className = '', elementSelector = 'table.ssi-imgToUploadTable', element;
        if (!thisS.options.preview) {
            className = 'ssi-noPreviewSubMessage';
            elementSelector = 'tr.ssi-toUploadTr';
            if (thisS.currentListLength === 1) {
                thisS.errors = title;
            }
        }

        element = thisS.$element.find(".ssi-abortUpload[data-delete='" + index + "']");
        element.parents(elementSelector).addClass('ssi-completed');
        element.after(getResultMessage(msgType, msg, title, className))
         .remove();
    };

    var getCompleteStatus = function (thisS) {//check if file are in progress
        return (thisS.inProgress === 0);
    };

    var getResultMessage = function (type, msg, title, classes) {//return a message label
        return '<span class="ssi-statusLabel ' + classes + ' ' + type + '" data-status="' + title + '">' + msg + '</span>';
    };

    var getCurrentListLength = function (thisS) { //get the list length
        return (thisS.inProgress + thisS.successfulUpload + thisS.aborted + thisS.abortedWithError + thisS.pending);
    };
    var setLastElementName = function (thisS) { //if one file in list get the last file's name and put it to the name preview
        var fileName = thisS.$element.find('#ssi-fileList').find('span').html();//find the only span left
        var ext = fileName.getExtension();//get the extension
        thisS.$element.find('.ssi-uploadDetails').removeClass('ssi-uploadBoxOpened');
        thisS.$element.find('.ssi-namePreview').html(cutFileName(fileName, ext, 15));//short the name and put it to the name preview
    };
    Ssi_upload.prototype.abort = function (index, title) {//abort a request
        if (typeof title === 'undefined') {//if no title
            this.uploadList[index].abort();// abort the element
            this.totalProgress[index] = '';
            title = 'Aborted';
            this.aborted++;// one more aborted file
        } else if (typeof title !== 'string') {//if not string that means that the request aborted with the beforeUpload callback and no message returned
            title = '';
        }
        //nothing of the above happened that means the user aborted the request with the beforeUpload callback and returned a message
        var msg = this.language.aborted;
        if (!this.options.preview) {
            msg = '<span class="ban7w"></span>';
        }
        setElementMessage(this, index, 'error', msg, title);
        this.$element.find('#ssi-uploadProgress' + index).removeClass('ssi-hidden').addClass('ssi-canceledProgressBar');
        this.toUpload[index] = undefined;
        this.uploadList[index] = undefined;
        this.imgNames[index] = undefined;
        this.$element.find('#ssi-clearBtn').prop("disabled", false);
        this.inProgress--;//one less in progress file
        if (getCompleteStatus(this)) {//if no more file in progress
            finishUpload(this);
        }

    };

    var finishUpload = function (thisS) {//when every uplaod ends

        thisS.$element.find('#ssi-abortBtn').addClass('ssi-hidden');
        if (!thisS.options.preview) {//display tha main message in the name preview
            var type = 'error', title = '', msg = '';
            if (thisS.abortedWithError > 0) { //if no errors
                if (thisS.totalFilesLength === 1) {// if only one file in the list
                    title = thisS.errors; //display the error
                } else {//else display something more general message
                    title = thisS.language.someErrorsOccurred
                }
                msg = '<span class="exclamation23"></span>';
            } else if (thisS.aborted > 0 && thisS.successfulUpload === 0) {//if all request aborted
                msg = '<span class="ban23"></span>';
                title = thisS.language.aborted;
            } else if (thisS.successfulUpload > 0) {// all request were successfull
                type = 'success';
                msg = '<span class="check23"></span>';
                title = thisS.language.sucUpload;
            }
            thisS.$element.find('.ssi-namePreview').append(getResultMessage(type, msg, title, 'ssi-noPreviewMessage'));//show the message in the name preview
            thisS.$element.find('#ssi-uploadProgressNoPreview') //remove main overall progress bar
             .removeAttr('styles')
             .addClass('ssi-hidden');
        }
        if (typeof thisS.options.onUpload === 'function') {
            try {
                thisS.options.onUpload();//execute the on Upload callback
            } catch (err) {
                console.log('There is an error in onUpload callback');
                console.log(err);
            }
        }
        thisS.$element.find('input.ssi-uploadInput').trigger('onUpload.ssi-uploader');
        var $uploadBtn = thisS.$element.find('#ssi-uploadBtn');
        thisS.$element.find('#ssi-clearBtn').prop("disabled", false);
        $uploadBtn.prop("disabled", false)
         .find('#ssi-up_loading')
         .empty();
        if (thisS.pending === 0) {
            $uploadBtn.addClass('ssi-hidden');
            thisS.toUpload = [];
            thisS.imgNames = [];
            thisS.totalFilesLength = 0;
        }
        thisS.uploadList = [];
        thisS.totalProgress = [];
        thisS.currentListLength = getCurrentListLength(thisS);
        thisS.successfulUpload = 0;
        thisS.aborted = 0;
        thisS.abortedWithError = 0;
        thisS.inProgress = 0;
    };

    $.fn.ssi_uploader = function (opts) {
        var defaults = {
            url: '',
            data: {},
            locale: 'zh_cn',
            preview: true,
            dropZone: true,
            maxNumberOfFiles: '',
            responseValidation: false,
            maxFileSize: 2,
            ajaxOptions: {},
            onUpload: function () {
            },
            onEachUpload: function () {
            },
            beforeUpload: function () {
            },
            beforeEachUpload: function () {
            },
            allowed: ['jpg', 'jpeg', 'png', 'bmp', 'gif'],
            errorHandler: {
                method: function (msg) {
                    alert(msg);
                },
                success: 'success',
                error: 'error'
            }
        };
        var options = $.extend(true, defaults, opts);
        return this.each(function () {
            var $element = $(this);
            if ($element.is('input[type="file"]')) {
                if ($element.data('ssi_upload')) return;
                var ssi_upload = new Ssi_upload(this, options);
                $element.data('ssi_upload', ssi_upload);
            } else {
                console.log('The targeted element is not file input.')
            }

        });
    };
    //functions
    String.prototype.replaceText = function () {//replace $ with variables
        var args = Array.apply(null, arguments);
        var text = this;
        for (var i = 0; i < args.length; i++) {
            text = text.replace('$' + (i + 1), args[i])
        }
        return text;
    };
    String.prototype.getExtension = function () {//returns the extension of a path or file
        return this.split('.').pop().toLowerCase();
    };
    var cutFileName = function (word, ext, maxLength) {//shorten the name
        if (typeof ext === 'undefined')ext = '';
        if (typeof maxLength === 'undefined')maxLength = 10;
        var min = 4;
        if (maxLength < min)return;
        var extLength = ext.length;
        var wordLength = word.length;
        if ((wordLength - 2) > maxLength) {
            word = word.substring(0, maxLength);
            var wl = word.length - extLength;
            word = word.substring(0, wl);
            return word + '...' + ext;
        } else return word;
    };

    var arraySum = function (arr) {//return the sum of an array
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
            if (typeof arr[i] === 'number')
                sum += arr[i];
        }
        return sum;
    };

    var locale = {
        en: {
            success: 'Success',
            sucUpload: 'Successful upload',
            chooseFiles: 'Choose files',
            uploadFailed: 'Upload failed',
            serverError: 'Internal server error',
            error: 'Error',
            abort: 'Abort',
            aborted: 'Aborted',
            files: 'files',
            upload: 'Upload',
            clear: 'Clear',
            drag: 'Drag n Drop',
            sizeError: '$1 exceed the size limit of $2',// $1=file name ,$2=max ie( example.jpg has has exceed the size limit of 2mb)
            extError: '$1 file types are not supported',//$1=file extension ie(exe files are not supported)
            someErrorsOccurred: 'Some errors occurred!'
        },
        zh_cn: {
            success: '成功',
            sucUpload: '上传成功',
            chooseFiles: '选择图片',
            uploadFailed: '上传失败',
            serverError: '服务器内部错误',
            error: '错误',
            abort: '中止',
            aborted: '失败',
            files: '文件夹',
            upload: '上传',
            clear: '清除',
            drag: '拖放',
            sizeError: '$1 超过尺寸限制 $2',// $1=file name ,$2=max ie( example.jpg has has exceed the size limit of 2mb)
            extError: '$1 不支持文件类型',//$1=file extension ie(exe files are not supported)
            someErrorsOccurred: '出现了一些错误！'
        },
        gr: {
            success: 'Επιτυχία',
            sucUpload: 'Επιτυχής μεταφόρτωση',
            chooseFiles: 'Επιλέξτε αρχεία',
            uploadFailed: 'Η μεταφόρτωση απέτυχε!',
            serverError: 'Εσωτερικό σφάλμα διακομιστή!',
            error: 'Σφάλμα',
            abort: 'Διακοπή',
            aborted: 'Διακόπηκε',
            files: 'αρχεία',
            upload: 'Μεταφόρτωση',
            clear: 'Εκκαθάριση',
            drag: 'Συρετε εδώ...',
            sizeError: '$1 έχει ξεπεράσει το όριο των $2.',// $1=file name ,$2=max file size ie( example.jpg has has exceed the size limit of 2mb)
            extError: '$1 αρχεία δεν υποστηρίζονται.',// $1=file extension ie(exe files are not supported)
            someErrorsOccurred: 'Σημειώθηκαν ορισμένα λάθη!'
        }
    };

}));

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



});