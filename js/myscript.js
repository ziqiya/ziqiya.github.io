$(".banner").mousemove(function(e) {
				var deg=e.clientY/5+e.clientX/5;
				$('.object-leaf').css({
			        		left: e.clientX-60+'px',
			        		top: e.clientY-40+'px',
		        		'transform':'rotate('+deg+'deg)'

		        	});	
			});
			$('#wowslider-container1').mousemove(function(e) {
				var cliX=(e.clientX-document.documentElement.clientWidth/2)/80-150;
				var cliY=(e.clientY-document.documentElement.clientHeight/2)/80-125;
				$('.intro_wrap').css("transform", "translate("+cliX+"px,"+cliY+"px)"+"skewX("+(150+cliX)*2+"deg)"+"skewY("+(cliY+124)*6+"deg)");
			});
			if((/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent))) { //移动端
			     var swiper = new Swiper('.swiper-container2', {	    	
				      slidesPerView: 1,
				      spaceBetween: 30,
				      loop : true,
				      navigation: {
					    nextEl: '.swiper-button-next',
					    prevEl: '.swiper-button-prev',
					  },
				    });

			}
			else{
				var swiper = new Swiper('.swiper-container2', {	    	
				      slidesPerView: 3,
				      spaceBetween: 30,
				      loop : true,
				      navigation: {
					    nextEl: '.swiper-button-next',
					    prevEl: '.swiper-button-prev',
					  },
				    });
			}
		    var mySwiper1 = new Swiper ('.swiper-container1', {
		    	 direction: 'vertical',    
		        mousewheel: true,
		        height:document.documentElement.clientHeight,
		        pagination: {
		          el: '.swiper-pagination1',
		          clickable: true,
		        },
			    on:{
			      init: function(){
			       // swiperAnimateCache(this); //隐藏动画元素 
			        swiperAnimate(this); //初始化完成开始动画
			      }, 
			      slideChangeTransitionEnd: function(){ 
			        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
			      } 
			    }
	  		}) 
		   
		$(function(){
			$('.nav').singlePageNav({
				offset:70,
			});							//;位于中括号后，位于值后面
			$('.navbar-collapse a').click(function(){
				$('.navbar-collapse').collapse('hide');
			});			
		})
		//$('.content-box').scrollTop();
		function scrolls(){
			var scroll=0;
			if(!$(window).scrollTop()<$('.content-box').offset().top){
				var timer=setInterval(function(){					
					if($('.content-box').offset().top-$(window).scrollTop()<80){
						$(window).scrollTop($('.content-box').offset().top);
						window.clearInterval(timer);
					}
					else{
						document.documentElement.scrollTop+=($('.content-box').offset().top-$(window).scrollTop())/80;
					}
				},5)
			}
		}
		$('.swiper-container1').mouseover(scrolls);
		$('.swiper-container1').on('touchmove',function(){
			if(!$(window).scrollTop()!=$('.content-box').offset().top){
				$(window).scrollTop($('.content-box').offset().top);
			}
			$(window).scrollTop($('.content-box').offset().top);
		});
		$('.swiper-container1').on('touchstart',function(){
			if(!$(window).scrollTop()<$('.content-box').offset().top){
				$(window).scrollTop($('.content-box').offset().top);
			}
		});
		new WOW().init();
		$('.nav-list-group .list-group-item').click(function(event) {
			var index = $(this).index();
			if (!$(this).hasClass('active')) {
				$(this).addClass('active').siblings().removeClass('active');
				$('.content-box .content-box-panel').eq(index).addClass('active').siblings(index).removeClass('active');
				}			
		})
		$('.html').click(function(event) {
			$('.sub-html').slideToggle();
		})
		$('.css').click(function(event) {
			$('.sub-css').slideToggle();
		})
		$('.js').click(function(event) {
			$('.sub-js').slideToggle();
		});
		$('.kj').click(function(event) {
			$('.sub-kj').slideToggle();
		});
		$('.nav-tool').click(function(event) {
			$(this).css('left', '-44px');
			setTimeout(function(){
				$('.aside-nav').css('left', '0px');
				$('.content-box').css('width', '80%');
			},500)			
		});
		$('.aside-nav .panel-heading,.aside-nav .sub-list-group,.aside-nav .myself').click(function(event) {
			$(this).parents('.aside-nav').css('left', '-40%');
			$('.banner').fadeIn();
			$('.aside-nav').css('marginTop', '0px');
			$('.content-box').css('width', '100%');
			setTimeout(function(){
				$('.nav-tool').css('left', '0px');
			},500)			
			if ($('.myself').hasClass('active')) {
				$('.content-box').css('padding', '0');
				if ((/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent))) {
					$('.banner').hide();
				};
				$('.aside-nav').css('marginTop', '50px');
			}
			else if(/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) { //移动端
			    $('.content-box').css('padding', '0 20px 20px');
			}
			else{
				$('.content-box').css('padding', '20px 50px');

			}
		});
		$('.run-btn').click(function(event) {
			var code_html;
			code_html=$(this).parent(".panel-body").find('xmp').html();
			if(code_html){
	          var win = window.open('', '运行窗口');
	          win.document.open();
	          win.document.write(code_html);
	          win.document.close();
	        }
	        else{
	          alert('请输入!');
	        }
		});
		var _title,_source,_sourceUrl,_pic,_showcount,_desc,_summary,_site,
            _width = 600,
            _height = 600,
            _top = (screen.height-_height)/2,
            _left = (screen.width-_width)/2,
            _url = 'www.baidu.com',
            _pic = '';


    //分享到新浪微博
    function shareToSinaWB(event){
        event.preventDefault();
        var _shareUrl = 'http://v.t.sina.com.cn/share/share.php?&appkey=895033136';     //真实的appkey，必选参数
        _shareUrl += '&url='+ encodeURIComponent(_url||document.location);     //参数url设置分享的内容链接|默认当前页location，可选参数
        _shareUrl += '&title=' + encodeURIComponent(_title||document.title);    //参数title设置分享的标题|默认当前页标题，可选参数
        _shareUrl += '&source=' + encodeURIComponent(_source||'');
        _shareUrl += '&sourceUrl=' + encodeURIComponent(_sourceUrl||'');
        _shareUrl += '&content=' + 'utf-8';   //参数content设置页面编码gb2312|utf-8，可选参数
        _shareUrl += '&pic=' + encodeURIComponent(_pic||'');  //参数pic设置图片链接|默认为空，可选参数
        window.open(_shareUrl,'_blank','width='+_width+',height='+_height+',top='+_top+',left='+_left+',toolbar=no,menubar=no,scrollbars=no, resizable=1,location=no,status=0');
    }

    //分享到QQ空间
    function shareToQzone(event){
        event.preventDefault();

        var _shareUrl = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?';
        _shareUrl += 'url=' + encodeURIComponent(_url||document.location);   //参数url设置分享的内容链接|默认当前页location
        _shareUrl += '&showcount=' + _showcount||0;      //参数showcount是否显示分享总数,显示：'1'，不显示：'0'，默认不显示
        _shareUrl += '&desc=' + encodeURIComponent(_desc||'分享的描述');    //参数desc设置分享的描述，可选参数
        _shareUrl += '&summary=' + encodeURIComponent(_summary||'分享摘要');    //参数summary设置分享摘要，可选参数
        _shareUrl += '&title=' + encodeURIComponent(_title||document.title);    //参数title设置分享标题，可选参数
        _shareUrl += '&site=' + encodeURIComponent(_site||'');   //参数site设置分享来源，可选参数
        _shareUrl += '&pics=' + encodeURIComponent(_pic||'');   //参数pics设置分享图片的路径，多张图片以＂|＂隔开，可选参数
        window.open(_shareUrl,'_blank','width='+_width+',height='+_height+',top='+_top+',left='+_left+',toolbar=no,menubar=no,scrollbars=no,resizable=1,location=no,status=0');
    }

    //分享到百度贴吧
    function shareToTieba(event){
        event.preventDefault();

        var _shareUrl = 'http://tieba.baidu.com/f/commit/share/openShareApi?';
        _shareUrl += 'title=' + encodeURIComponent(_title||document.title);  //分享的标题
        _shareUrl += '&url=' + encodeURIComponent(_url||document.location);  //分享的链接
        _shareUrl += '&pic=' + encodeURIComponent(_pic||'');    //分享的图片
        window.open(_shareUrl,'_blank','width='+_width+',height='+_height+',left='+_left+',top='+_top+',toolbar=no,menubar=no,scrollbars=no,resizable=1,location=no,status=0');
    }

    //分享到豆瓣
    function shareToDouban(event){
        event.preventDefault();

        var _shareUrl = 'http://shuo.douban.com/!service/share?';
        _shareUrl += 'href=' + encodeURIComponent(_url||location.href);    //分享的链接
        _shareUrl += '&name=' + encodeURIComponent(_title||document.title);    //分享的标题
        _shareUrl += '&image=' + encodeURIComponent(_pic||'');    //分享的图片
        window.open(_shareUrl,'_blank','width='+_width+',height='+_height+',left='+_left+',top='+_top+',toolbar=no,menubar=no,scrollbars=no,resizable=1,location=no,status=0');
    }
    //分享到腾讯微博
    function shareToQQwb(event){
        event.preventDefault();

        var _shareUrl = 'http://v.t.qq.com/share/share.php?';
        _shareUrl += 'title=' + encodeURIComponent(_title||document.title);    //分享的标题
        _shareUrl += '&url=' + encodeURIComponent(_url||location.href);    //分享的链接
        _shareUrl += '&appkey=5bd32d6f1dff4725ba40338b233ff155';    //在腾迅微博平台创建应用获取微博AppKey
        _shareUrl += '&site=' + encodeURIComponent(_site||'');   //分享来源
        _shareUrl += '&pic=' + encodeURIComponent(_pic||'');    //分享的图片，如果是多张图片，则定义var _pic='图片url1|图片url2|图片url3....'
        window.open(_shareUrl,'_blank','width='+_width+',height='+_height+',left='+_left+',top='+_top+',toolbar=no,menubar=no,scrollbars=no,resizable=1,location=no,status=0');
    }
    //分享到人人网
    function shareToRenren(event){
        event.preventDefault();

        var _shareUrl = 'http://share.renren.com/share/buttonshare.do?';
        _shareUrl += 'link=' + encodeURIComponent(_url||location.href);   //分享的链接
        _shareUrl += '&title=' + encodeURIComponent(_title||document.title);     //分享的标题
        window.open(_shareUrl,'_blank','width='+_width+',height='+_height+',left='+_left+',top='+_top+',toolbar=no,menubar=no,scrollbars=no,resizable=1,location=no,status=0');
    }

    //分享到开心网
    function shareToKaixin(event){
        event.preventDefault();

        var _shareUrl = 'http://www.kaixin001.com/rest/records.php?';
        _shareUrl += 'url=' + encodeURIComponent(_url||location.href);    //分享的链接
        _shareUrl += '&content=' + encodeURIComponent('分享的文字');    //需要分享的文字，当文字为空时，自动抓取分享网址的title
        _shareUrl += '&pic=' + encodeURIComponent(_pic||'');     //分享的图片,多个使用半角逗号分隔
        _shareUrl += '&showcount=0';    //是否显示分享数，显示：'1'，不显示：'0'
        _shareUrl += '&style=11';      //显示的样式，必选参数
        _shareUrl += '&aid=' + encodeURIComponent(_site||'');    //显示分享来源
        window.open(_shareUrl,'_blank','width='+_width+',height='+_height+',left='+_left+',top='+_top+',toolbar=no,menubar=no,scrollbars=no,resizable=1,location=no,status=0');
    }

    function shareToKaixin2(event){
        event.preventDefault();

        var _shareUrl = 'http://www.kaixin001.com/repaste/share.php?';
        _shareUrl += 'rtitle=' + encodeURIComponent(_title||document.title);   //分享的标题
        window.open(_shareUrl,'_blank','width='+_width+',height='+_height+',left='+_left+',top='+_top+',toolbar=no,menubar=no,scrollbars=no,resizable=1,location=no,status=0');
    }

    //分享到facebook
    function shareToFacebook(event){
        event.preventDefault();

        var _shareUrl = 'http://www.facebook.com/sharer/sharer.php?';
        _shareUrl += 'u=' + encodeURIComponent(_url||location.href);    //分享的链接
        _shareUrl += '&t=' + encodeURIComponent(_title||document.title);    //分享的标题
        window.open(_shareUrl,'_blank','width='+_width+',height='+_height+',left='+_left+',top='+_top+',toolbar=no,menubar=no,scrollbars=no,resizable=1,location=no,status=0');
    }
    //分享到facebook
    function shareToFacebook(event){
        event.preventDefault();

        var _shareUrl = 'http://www.facebook.com/sharer/sharer.php?';
        _shareUrl += 'u=' + encodeURIComponent(_url||location.href);    //分享的链接
        _shareUrl += '&t=' + encodeURIComponent(_title||document.title);    //分享的标题
        window.open(_shareUrl,'_blank','width='+_width+',height='+_height+',left='+_left+',top='+_top+',toolbar=no,menubar=no,scrollbars=no,resizable=1,location=no,status=0');
    }

    //分享到Twitter
    function shareToTwitter(event){
        event.preventDefault();

        var _shareUrl = 'http://twitter.com/intent/tweet?';
        _shareUrl += 'url=' + encodeURIComponent(_url||location.href);    //分享的链接
        _shareUrl += '&text=' + encodeURIComponent(_title||document.title);    //分享的标题
        window.open(_shareUrl,'_blank','width='+_width+',height='+_height+',left='+_left+',top='+_top+',toolbar=no,menubar=no,scrollbars=no,resizable=1,location=no,status=0');
    }