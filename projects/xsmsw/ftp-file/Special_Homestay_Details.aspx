<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Special_Homestay_Details.aspx.cs" Inherits="Web.Special_Homestay_Details" %>

<%@ Register Src="~/WebControl/PageTop.ascx" TagPrefix="uc1" TagName="PageTop" %>
<%@ Register Src="~/WebControl/PageBottom.ascx" TagPrefix="uc1" TagName="PageBottom" %>
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
	<meta charset="UTF-8" />
	<title>特色民宿-详情页</title>
	<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
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
	<section class="content clearfix">
		<!-- 内容头部begin -->
		<article class="now_position_wrap">
			<div class="container clearfix">
				<ul class="now_position">
					<li class="par_pos"><a href="/Index.aspx">首页</a></li>
					<li>></li>
					<li class="par_pos"><a href="/Special_Homestay.aspx">特色民宿</a></li>
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
					<span class="collects"><img src="images/collect1.png" alt=""><i class="collect">收藏</i></span>				
					<span><img src="images/share.png" alt=""><i class="share">分享</i></span>
				</div>
				<div class="hostel_detail">
					<%= entity.TitleFu %>
				</div>
				<span class="stars fll"><img src="images/star4.png" alt=""></span>
				<span class="comment mgt5_m fll"><a href="javascript:;"><i>0</i>条评论</a></span>
			</div>
		</article>
		<!-- 内容头部end -->
		<!-- banner轮播图begin -->
		<article class="banner_exchange clearfix">
			<div class="container">
                <%
                    int counts1 = 0;
                    Model.HouseImg entSel = new Model.HouseImg();
                    List<Model.HouseImg> imgList = DAL.HouseImg.Select(99, 1, entSel, ref counts1);
                    for (int i = 0; i < imgList.Count; i++)
                    {
                        if (i == 0)
                        {
                %>
                    <div class="banner_big"><img src="<%= imgList[i].Img %>" alt="特色民宿" width="812px" height="480px"></div>
				    <ul class="banner_ul">
                        <li class="active"><img src="<%= imgList[i].Img %>" alt="特色民宿"></li>
                <%
                        }
                        else
                        { 
                %>
					    <li><img src="<%= imgList[i].Img %>" alt=""></li>
                <%
                        }
                    }
                    if (imgList.Count > 0)
                    {
                %>
				        </ul>
                <%
                    }
                %>
			</div>
		</article>
		<!-- banner轮播图end -->
		<div class="nav_ul_wrap clearfix">
			<div class="container">
				<ul class="nav_ul">
					<li class="active"><a href="#select_home">选择房间</a></li>
					<li><a href="#homestay_summary">民宿简介</a></li>
					<li><a href="#order_tip">预订须知</a></li>
					<li><a href="#equip_service">服务设施</a></li>
					<li><a href="#person_comment">游客点评</a></li>
					<li><a href="#return_rule">退订规则</a></li>
				</ul>
				<section class="logo_wrap">
					<div class="ele_logo">
						<img src="images/ele_logo.png" alt="">
						<p class="logo_word">住房查询</p>
					</div>
					<div class="checkIn_date">
						<input type="text" name="checkIn_date" id="checkIn_date" placeholder="入住时间">
						<img class="date_sign1" src="images/date_sign.png" alt="">
					</div>
					<div class="checkOut_date mgt10_m">
						<input type="text" name="checkOut_date" id="checkOut_date" placeholder="离开时间" onclick="checkdate1()" onChange="checkdate2()">
						<img class="date_sign1" src="images/date_sign.png" alt="">
					</div>
					<div class="search_btn2">查询</div>
				</section>
			</div>
		</div>
		<!-- 住房信息 -->
		<div class="house_info" id="select_home">
			<div class="container">
				<ul class="house_ul">
                    <%
                        int counts2 = 0;
                        Model.HouseRoom entRoomSel = new Model.HouseRoom();
                        entRoomSel.Hid = entity.Id;
                        List<Model.HouseRoom> roomList = DAL.HouseRoom.Select(99, 1, entRoomSel, ref counts2);
                        foreach (Model.HouseRoom ent in roomList)
                        {
                    %>
					    <li class="house_li">
						    <p class="house_title1">
							    <%= ent.Title %>
						    </p>
						    <div class="house_img">
							    <img src="<%= ent.Img %>" alt="">
						    </div>
						    <div class="house_ul_wrap">
							    <ul class="house_info_ul">
								    <li>房间面积：25m<sup>2</sup></li>
								    <li>最多入住：2人</li>
								    <li>床位信息：双人床</li>
							    </ul>
							    <div class="money_tip"><span class="money_sign">¥</span><%= ent.Price %></div>
						    </div>
						    <button class="order_btn" onclick="window.location.href='Homestay_Details.aspx?id=<%= ent.Id %>';">立即预订</button>
					    </li>
                    <%
                        }
                    %>
				</ul>
			</div>
		</div>
		<article class="intro_wrap">
			<!-- 民宿简介begin -->
			<article class="house_intro clearfix" id="homestay_summary">
				<div class="container">
					<section class="logo_wrap">
						<div class="ele_logo">
							<img src="images/ele_logo.png" alt="">
							<p class="logo_word">民宿简介</p>
						</div>
					</section>
					<div class="house_intro_content">
						<p>
							<%= entity.JianJie %>
						</p>
					</div>
				</div>
			</article>
			<!-- 民宿简介end -->
			<!-- 预订须知begin -->
			<article class="house_intro clearfix" id="order_tip">
				<div class="container">
					<section class="logo_wrap">
						<div class="ele_logo">
							<img src="images/ele_logo.png" alt="">
							<p class="logo_word">预订须知</p>
						</div>
					</section>
					<div class="house_intro_content">
						<p>
							<%= entity.YuDing %>
						</p>
					</div>
				</div>
			</article>
			<!-- 预订须知end -->
			<!-- 设施服务begin -->
			<article class="house_intro clearfix" id="equip_service">
				<div class="container">
					<section class="logo_wrap">
						<div class="ele_logo">
							<img src="images/ele_logo.png" alt="">
							<p class="logo_word">服务设施</p>
						</div>
					</section>
					<div class="house_intro_content">
						<p>
							<%= entity.SheShi %>
						</p>
					</div>			
					<div class="service_list">
						<dl>
							<dt>居家</dt>
	                        <%= DAL.HouseInfo.getJuJia(entity.JuJias) %>
						</dl>
						<dl>
							<dt>卫浴</dt>
							<%= DAL.HouseInfo.getWeiYu(entity.WeiYus) %>
						</dl>
						<dl>
							<dt>餐厨</dt>
							<%= DAL.HouseInfo.getCanChu(entity.CanChus) %>
						</dl>
						<dl>
							<dt>娱乐</dt>
							<%= DAL.HouseInfo.getYuLe(entity.YuLes) %>
						</dl>
						<dl>
							<dt>安全</dt>
							<%= DAL.HouseInfo.getAnQuan(entity.AnQuans) %>
						</dl>
						<dl>
							<dt>建筑</dt>
							<%= DAL.HouseInfo.getJianZhu(entity.JianZhus) %>
						</dl>
						<dl>
							<dt>周边（500米内）</dt>
							<%= DAL.HouseInfo.getZhouBian(entity.ZhouBians) %>
						</dl>
						<dl>
							<dt>其他</dt>
							<%= DAL.HouseInfo.getQiTa(entity.QiTas) %>
						</dl>
					</div>
				</div>
			</article>
			<!-- 设施服务end -->
			<!-- 评论区begin -->
			<article class="comment_article" id="person_comment">
				<div class="container">
					<section class="logo_wrap">
						<div class="ele_logo">
							<img src="images/ele_logo.png" alt="">
							<p class="logo_word">游客点评</p>
						</div>
					</section>
					<span class="stars fll"><img src="images/star4.png" alt=""></span>
					<span class="comment fll"><a href=""><i>0</i>条评论</a></span>
					<ul class="user_comment_ul pdt50">
						<%--<li class="house_comment_li">
							<div class="comment_left">
								<div class="comment_headimg">
									<img src="images/comment_headimg.png" alt="">
								</div>
								<p class="comment_name">
									游客昵称
								</p>
							</div>
							<div class="comment_right">
								<span class="stars1"><img src="images/star5.png" alt="">5.0分</span>
								<div class="comment_content1">
									内容描述内容描述内容描述内容描述内容描述
								</div>
								<p class="comment_time">
									2018-03-12 15:11:33 
								</p>
							</div>
							<div class="comment_reply">
								<p class="comment_reply_name">房东回复：</p>
								<div class="comment_content1">
									内容描述内容描述内容描述内容描述内容描述
								</div>
							</div>
						</li>--%>
					</ul>
				</div>
			</article>
			<!-- 评论区end -->
			<!-- 退订规则begin -->
			<article class="house_intro clearfix" id="return_rule">
				<div class="container">
					<section class="logo_wrap">
						<div class="ele_logo">
							<img src="images/ele_logo.png" alt="">
							<p class="logo_word">退订规则</p>
						</div>
					</section>
					<div class="house_intro_content">
						<p>
							<%= entity.TuiDing %>
						</p>
					</div>
				</div>
			</article>
			<!-- 退订规则end -->
			<!-- 精品推荐begin -->
			<article class="recommend clearfix">
				<div class="container">
					<div class="recommend_head">
						<img src="images/logo1.png" alt="象山民宿">精品推荐
					</div>
					<ul class="recommend_ul">
						<li>
							<div class="img_wrap">
								<div class="recommend_img">
									<a href="special_homestay-details.html"><img src="images/li_img.png" alt="精品推荐" width="295px" height="195px"></a>
								</div>
								<div class="recommend_title">
									<a href="special_homestay-details.html">相关标题文字</a>
								</div>
							</div>
						</li>
						<li>
							<div class="img_wrap">
								<div class="recommend_img">
									<a href="special_homestay-details.html"><img src="images/li_img.png" alt="精品推荐" width="295px" height="195px"></a>
								</div>
								<div class="recommend_title">
									<a href="special_homestay-details.html">相关标题文字</a>
								</div>
							</div>
						</li>
						<li>
							<div class="img_wrap">
								<div class="recommend_img">
									<a href="special_homestay-details.html"><img src="images/li_img.png" alt="精品推荐" width="295px" height="195px"></a>
								</div>
								<div class="recommend_title">
									<a href="special_homestay-details.html">相关标题文字</a>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</article>
			<!-- 精品推荐end -->
		</article>
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
	    $('.collects').click(function (event) {
	        if (!$(this).hasClass('love')) {
	            $(this).addClass('love').find("img").attr('src', 'images/love_1.png');
	            $('.collect').text("已收藏");
	        }
	        else {
	            $(this).removeClass('love').find("img").attr('src', 'images/collect1.png');
	            $('.collect').text("收藏");
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
	    $('.banner_ul li').click(function (event) {
	        var index = $(this).index();
	        var src = $(this).find('img').attr("src");
	        $('.banner_big').find('img').attr('src', src);
	        $(this).addClass('active').siblings().removeClass('active');
	    });
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
