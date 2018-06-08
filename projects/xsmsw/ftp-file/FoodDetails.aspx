<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="FoodDetails.aspx.cs" Inherits="Web.FoodDetails" %>

<%@ Register Src="~/WebControl/PageTop.ascx" TagPrefix="uc1" TagName="PageTop" %>
<%@ Register Src="~/WebControl/PageBottom.ascx" TagPrefix="uc1" TagName="PageBottom" %>
<%@ Register Assembly="AspNetPager" Namespace="Wuqi.Webdiyer" TagPrefix="webdiyer" %>
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
	<meta charset="UTF-8" />
	<title>象山美食-详情页</title>
	<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
	<meta http-equiv="X-UA-Compatible" content="IE=edge" /> 
	<link rel="stylesheet" href="css/jquery-ui.min.css" />
	<link rel="stylesheet" href="css/base.css" />
</head>
<body>
    <form id="form1" runat="server">
    <% 
        if (entity != null)
        { 
    %>
    <uc1:PageTop runat="server" ID="PageTop1" />
	<!-- 内容区begin -->
	<section class="content clearfix">
		<!-- 内容头部begin -->
		<article class="now_position_wrap">
			<div class="container clearfix">
				<ul class="now_position">
					<li class="par_pos"><a href="/Index.aspx">首页</a></li>
					<li>></li>
					<li class="par_pos"><a href="/Foods.aspx">象山美食</a></li>
					<li>></li>
					<li class="chi_pos"><%= entity.Title %></li>
				</ul>
			</div>
		</article>
		<article class="hostel_article clearfix">
			<div class="container">
				<div class="hostel_title">
					<p>
						<%= entity.Title %>
					</p>
					<span><img src="images/collect1.png" alt=""><i class="collect">收藏</i></span>
					<span><img src="images/share.png" alt=""><i class="collect">分享</i></span>
				</div>
				<div class="hostel_detail">
					<%= entity.TitleFu %>
				</div>		
			</div>
		</article>
		<!-- 内容头部end -->
		<!-- banner轮播图begin -->
		<article class="banner_exchange clearfix">
			<div class="container">
				<div class="banners"><img src="<%= entity.Img %>" alt="" style="max-width:944px; max-height:631px;" /></div>			
			</div>
		</article>
		<!-- banner轮播图end -->
		<div class="nav_ul_wrap clearfix">
			<div class="container">
				<ul class="nav_ul">
					<li class="active"><a href="#restaurant_intro">饭店介绍</a></li>
					<li><a href="#dishes_intro">菜肴介绍</a></li>
					<li><a href="#positions">地理位置</a></li>
					<li><a href="#order_tip">预订说明</a></li>
					<li><a href="#warm_tip">温馨提示</a></li>
				</ul>
			</div>
		</div>
		<article class="intro_wrap">
			<!-- 饭店介绍begin -->
			<article class="house_intro clearfix" id="restaurant_intro">
				<div class="container">
					<section class="logo_wrap">
						<div class="ele_logo">
							<img src="images/ele_logo.png" alt="">
							<p class="logo_word">饭店介绍</p>
						</div>
					</section>
					<div class="house_intro_content">
						<p>
							<%= entity.Contents %>
						</p>
					</div>
				</div>
			</article>
			<!-- 饭店介绍end -->
			<!-- 菜肴介绍begin -->
			<article class="house_intro clearfix" id="dishes_intro">
				<div class="container">
					<section class="logo_wrap">
						<div class="ele_logo">
							<img src="images/ele_logo.png" alt="">
							<p class="logo_word">菜肴介绍</p>
						</div>
					</section>
					<div class="house_intro_content">
						<p>
							<%= entity.CaiYao %>
						</p>
					</div>
				</div>
			</article>
			<!-- 菜肴介绍end -->
			<!-- 地理位置begin -->
			<article class="house_intro clearfix" id="positions">
				<div class="container">
					<section class="logo_wrap">
						<div class="ele_logo">
							<img src="images/ele_logo.png" alt="">
							<p class="logo_word">地理位置</p>
						</div>
					</section>
					<div class="house_intro_content">
						<p>
							<%= entity.WeiZhi %>
						</p>
					</div>
				</div>
			</article>
			<!-- 地理位置end -->
			<!-- 预订说明begin -->
			<article class="house_intro clearfix" id="order_tip">
				<div class="container">
					<section class="logo_wrap">
						<div class="ele_logo">
							<img src="images/ele_logo.png" alt="">
							<p class="logo_word">预订说明</p>
						</div>
					</section>
					<div class="house_intro_content">
						<p>
							<%= entity.YuDing %>
						</p>
					</div>
				</div>
			</article>
			<!-- 预订说明end -->
			<!-- 温馨提示begin -->
			<article class="house_intro clearfix" id="warm_tip">
				<div class="container">
					<section class="logo_wrap">
						<div class="ele_logo">
							<img src="images/ele_logo.png" alt="">
							<p class="logo_word">温馨提示</p>
						</div>
					</section>
					<div class="house_intro_content">
						<p>
							<%= entity.TiShi %>
						</p>
					</div>
				</div>
			</article>
			<!-- 温馨提示end -->
		</article>
		<!-- 猜你喜欢begin -->
		<article class="recommend clearfix">
			<div class="container">
				<div class="recommend_head">
					<img src="images/logo1.png" alt="">猜你喜欢
				</div>
				<ul class="guess_ul">
					<li class="collection_li">
						<div class="li_img">
							<a href="xiangshan_food-details.html">
								<img src="images/li_img.png" alt="猜你喜欢" width="217px" height="197px">
							</a>
						</div>
						<div class="li_title">
							<a href="xiangshan_food-details.html">相关标题相关标题</a>
						</div>
						<div class="sub_title">
							<a href="xiangshan_food-details.html">相关标题相关标题</a>
						</div>
					</li>
					<li class="collection_li">
						<div class="li_img">
							<a href="xiangshan_food-details.html">
								<img src="images/li_img.png" alt="猜你喜欢" width="217px" height="197px">
							</a>
						</div>
						<div class="li_title">
							<a href="xiangshan_food-details.html">相关标题相关标题</a>
						</div>
						<div class="sub_title">
							<a href="xiangshan_food-details.html">相关标题相关标题</a>
						</div>
					</li>
					<li class="collection_li">
						<div class="li_img">
							<a href="xiangshan_food-details.html">
								<img src="images/li_img.png" alt="猜你喜欢" width="217px" height="197px">
							</a>
						</div>
						<div class="li_title">
							<a href="xiangshan_food-details.html">相关标题相关标题</a>
						</div>
						<div class="sub_title">
							<a href="xiangshan_food-details.html">相关标题相关标题</a>
						</div>
					</li>
					<li class="collection_li">
						<div class="li_img">
							<a href="xiangshan_food-details.html">
								<img src="images/li_img.png" alt="猜你喜欢" width="217px" height="197px">
							</a>
						</div>
						<div class="li_title">
							<a href="xiangshan_food-details.html">相关标题相关标题</a>
						</div>
						<div class="sub_title">
							<a href="xiangshan_food-details.html">相关标题相关标题</a>
						</div>
					</li>
				</ul>
			</div>
		</article>
		<!-- 猜你喜欢end -->
	</section>
	<!-- 内容区end -->
	<!-- 底部版权区begin -->
    <uc1:PageBottom runat="server" ID="PageBottom1" />
    <%
        } 
    %>
	<script src="js/jquery.min.js"></script>
	<script src="js/jquery-ui.min.js"></script>
	<script src="js/nav.js"></script>
	<script>
	    $('.nav_ul').navScroll({
	        mobileDropdown: true,
	        mobileBreakpoint: 768,
	        scrollSpy: true
	    });
	    $('.collapse_btn').click(function (event) {
	        $('.head_nav').slideToggle();
	    });
	    $('.collection').click(function (event) {
	        if (!$(this).hasClass('love')) {
	            $(this).addClass('love').find("img").attr('src', 'images/love_1.png');
	        }
	        else {
	            $(this).removeClass('love').find("img").attr('src', 'images/love_0.png');
	        }
	    })
	    $("#checkIn_date").datepicker();
	    $("#checkIn_date").datepicker("option", "showAnim", "blind");
	    $("#checkOut_date").datepicker();
	    $("#checkOut_date").datepicker("option", "showAnim", "blind");
	    function checkdate1() {
	        var date1 = document.getElementById('checkIn_date').value;
	        if (date1 == "") {
	            alert('请先选择入住时间！');
	            document.getElementById('checkOut_date').value = "";
	        }
	    }
	    function checkdate2() {
	        var date1 = document.getElementById('checkIn_date').value;
	        var date2 = document.getElementById('checkOut_date').value;
	        if (date1 == "") {
	            alert('请先选择离开时间！');
	            document.getElementById('checkOut_date').value = "";
	        }
	        if (date1 > date2) {
	            alert('离开时间不得小于入住时间！');
	            document.getElementById('checkOut_date').value = "";
	        }
	    }
	    window.onload = function () {
	        $('.register_box').eq(0).hide();
	    }
	    $('.register_select_ul li').click(function () {
	        var index = $(this).index();
	        $(this).addClass('active').siblings().removeClass('active');
	        $('.register_box').eq(index).show().siblings().hide();
	    })
	    $('.close_btn').click(function () {
	        $(this).parents('.alert_wrap').fadeOut();
	    })
	    $('.forget_btn').click(function () {
	        $(this).parents('.alert_wrap').fadeOut();
	        $('.findpass_wrap').fadeIn();
	    })
	    $('.login_btn1').click(function () {
	        $('.login_wrap').fadeIn();
	    })
	</script>
    </form>
</body>
</html>
