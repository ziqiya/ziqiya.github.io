<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Groups.aspx.cs" Inherits="Web.Groups" %>

<%@ Register Src="~/WebControl/PageTop.ascx" TagPrefix="uc1" TagName="PageTop" %>
<%@ Register Src="~/WebControl/PageBottom.ascx" TagPrefix="uc1" TagName="PageBottom" %>
<%@ Register Assembly="AspNetPager" Namespace="Wuqi.Webdiyer" TagPrefix="webdiyer" %>
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta charset="UTF-8" />
    <title>民宿部落</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <link rel="stylesheet" href="css/jquery-ui.min.css" />
    <link rel="stylesheet" href="css/base.css" />
</head>
<body>
    <form id="form1" runat="server">
        <uc1:PageTop runat="server" ID="PageTop1" />
        <!-- 条件筛选start -->
        <section class="type_select">
            <ul class="type_select_ul">
                <a href="Groups.aspx" target="_top">
                    <li class="first_li">全部
                    </li>
                </a>
                <a href="Groups.aspx?t=民宿故事" target="_top">
                    <li class="first_li">民宿故事
                    </li>
                </a>
                <a href="Groups.aspx?t=旅游攻略" target="_top">
                    <li class="first_li">旅游攻略
                    </li>
                </a>
                <a href="Groups.aspx?t=热门活动" target="_top">
                    <li class="first_li">热门活动
                    </li>
                </a>
            </ul>
        </section>
        <!-- 条件筛选end -->
        <!-- 内容区begin -->
        <section class="content clearfix">
            <!-- 图片列表begin -->
            <article class="story_article">
                <div class="container clearfix">
                    <div class="select_ul_wrap">
                        <div class="select_ul">
                            <li class="active">最新发布</li>
                            <li>最热排行</li>
                        </div>
                    </div>
                    <div class="exchange_wrap">
                        <!-- 最新发布 -->
                        <ul class="story_ul">
                            <asp:Repeater ID="rptList" runat="server">
                                <ItemTemplate>
                                    <li>
                                        <div class="story_img">
                                            <a href="GroupDetails.aspx?id=<%# Eval("Id") %>" target="_blank">
                                                <img src="<%# Eval("Img") %>" alt="" style="width:394px; height:262px;"></a>
                                        </div>
                                        <div class="story_info">
                                            <div class="stroy_title">
                                                <a href="GroupDetails.aspx?id=<%# Eval("Id") %>" target="_blank"><%# Eval("Title") %></a></div>
                                            <div class="article_info">
                                                <span class="publish_date grey"><%# Eval("AddDate","{0:d}") %></span>
                                                <div class="function_li">
                                                    <img src="images/message_icon.png" alt=""><span class="message_num">0</span>
                                                </div>
                                                <div class="function_li">
                                                    <img src="images/eye_icon.png" alt=""><span class="browse_num"><%# Eval("Click") %></span>
                                                </div>
                                                <div class="story_content whitewrap">
                                                    <a href="GroupDetails.aspx?id=<%# Eval("Id") %>" target="_blank"><%# Eval("TitleFu") %></a>
                                                </div>
                                                <%--<div class="story_label">
                                                    <ul class="story_label_ul">
                                                        <a href="folk_group-details.html">
                                                            <li>民宿故事</li>
                                                        </a>
                                                        <a href="folk_group-details.html">
                                                            <li>旅游攻略</li>
                                                        </a>
                                                    </ul>
                                                </div>--%>
                                            </div>
                                        </div>
                                    </li>
                                </ItemTemplate>
                            </asp:Repeater>
                        </ul>
                        <!-- 最热排行 -->
                        <ul class="story_ul">
                            <li>
                                <div class="story_img">
                                    <a href="folk_group-details.html">
                                        <img src="images/story_img.png" alt=""></a>
                                </div>
                                <div class="story_info">
                                    <div class="stroy_title"><a href="folk_group-details.html">相关标题文字1</a></div>
                                    <div class="article_info">
                                        <span class="publish_date grey">2018-03-13</span>
                                        <div class="function_li">
                                            <img src="images/message_icon.png" alt=""><span class="message_num">6</span>
                                        </div>
                                        <div class="function_li">
                                            <img src="images/eye_icon.png" alt=""><span class="browse_num">6</span>
                                        </div>
                                        <div class="story_content whitewrap">
                                            <a href="folk_group-details.html">相关标题文字相关标题文字相关标题文字相关标题文字相关标题文字</a>
                                        </div>
                                        <div class="story_label">
                                            <ul class="story_label_ul">
                                                <a href="folk_group-details.html">
                                                    <li>民宿故事</li>
                                                </a>
                                                <a href="folk_group-details.html">
                                                    <li>旅游攻略</li>
                                                </a>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="story_img">
                                    <a href="folk_group-details.html">
                                        <img src="images/story_img.png" alt=""></a>
                                </div>
                                <div class="story_info">
                                    <div class="stroy_title"><a href="folk_group-details.html">相关标题文字</a></div>
                                    <div class="article_info">
                                        <span class="publish_date grey">2018-03-13</span>
                                        <div class="function_li">
                                            <img src="images/message_icon.png" alt=""><span class="message_num">6</span>
                                        </div>
                                        <div class="function_li">
                                            <img src="images/eye_icon.png" alt=""><span class="browse_num">6</span>
                                        </div>
                                        <div class="story_content whitewrap">
                                            <a href="folk_group-details.html">相关标题文字相关标题文字相关标题文字相关标题文字相关标题文字</a>
                                        </div>
                                        <div class="story_label">
                                            <ul class="story_label_ul">
                                                <a href="folk_group-details.html">
                                                    <li>民宿故事</li>
                                                </a>
                                                <a href="folk_group-details.html">
                                                    <li>旅游攻略</li>
                                                </a>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="story_img">
                                    <a href="folk_group-details.html">
                                        <img src="images/story_img.png" alt=""></a>
                                </div>
                                <div class="story_info">
                                    <div class="stroy_title"><a href="folk_group-details.html">相关标题文字</a></div>
                                    <div class="article_info">
                                        <span class="publish_date grey">2018-03-13</span>
                                        <div class="function_li">
                                            <img src="images/message_icon.png" alt=""><span class="message_num">6</span>
                                        </div>
                                        <div class="function_li">
                                            <img src="images/eye_icon.png" alt=""><span class="browse_num">6</span>
                                        </div>
                                        <div class="story_content whitewrap">
                                            <a href="folk_group-details.html">相关标题文字相关标题文字相关标题文字相关标题文字相关标题文字</a>
                                        </div>
                                        <div class="story_label">
                                            <ul class="story_label_ul">
                                                <a href="folk_group-details.html">
                                                    <li>民宿故事</li>
                                                </a>
                                                <a href="folk_group-details.html">
                                                    <li>旅游攻略</li>
                                                </a>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="story_img">
                                    <a href="folk_group-details.html">
                                        <img src="images/story_img.png" alt=""></a>
                                </div>
                                <div class="story_info">
                                    <div class="stroy_title"><a href="folk_group-details.html">相关标题文字</a></div>
                                    <div class="article_info">
                                        <span class="publish_date grey">2018-03-13</span>
                                        <div class="function_li">
                                            <img src="images/message_icon.png" alt=""><span class="message_num">6</span>
                                        </div>
                                        <div class="function_li">
                                            <img src="images/eye_icon.png" alt=""><span class="browse_num">6</span>
                                        </div>
                                        <div class="story_content whitewrap">
                                            <a href="folk_group-details.html">相关标题文字相关标题文字相关标题文字相关标题文字相关标题文字</a>
                                        </div>
                                        <div class="story_label">
                                            <ul class="story_label_ul">
                                                <a href="folk_group-details.html">
                                                    <li>民宿故事</li>
                                                </a>
                                                <a href="folk_group-details.html">
                                                    <li>旅游攻略</li>
                                                </a>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="story_img">
                                    <a href="folk_group-details.html">
                                        <img src="images/story_img.png" alt=""></a>
                                </div>
                                <div class="story_info">
                                    <div class="stroy_title"><a href="folk_group-details.html">相关标题文字</a></div>
                                    <div class="article_info">
                                        <span class="publish_date grey">2018-03-13</span>
                                        <div class="function_li">
                                            <img src="images/message_icon.png" alt=""><span class="message_num">6</span>
                                        </div>
                                        <div class="function_li">
                                            <img src="images/eye_icon.png" alt=""><span class="browse_num">6</span>
                                        </div>
                                        <div class="story_content whitewrap">
                                            <a href="folk_group-details.html">相关标题文字相关标题文字相关标题文字相关标题文字相关标题文字</a>
                                        </div>
                                        <div class="story_label">
                                            <ul class="story_label_ul">
                                                <a href="folk_group-details.html">
                                                    <li>民宿故事</li>
                                                </a>
                                                <a href="folk_group-details.html">
                                                    <li>旅游攻略</li>
                                                </a>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="story_img">
                                    <a href="folk_group-details.html">
                                        <img src="images/story_img.png" alt=""></a>
                                </div>
                                <div class="story_info">
                                    <div class="stroy_title"><a href="folk_group-details.html">相关标题文字</a></div>
                                    <div class="article_info">
                                        <span class="publish_date grey">2018-03-13</span>
                                        <div class="function_li">
                                            <img src="images/message_icon.png" alt=""><span class="message_num">6</span>
                                        </div>
                                        <div class="function_li">
                                            <img src="images/eye_icon.png" alt=""><span class="browse_num">6</span>
                                        </div>
                                        <div class="story_content whitewrap">
                                            <a href="folk_group-details.html">相关标题文字相关标题文字相关标题文字相关标题文字相关标题文字</a>
                                        </div>
                                        <div class="story_label">
                                            <ul class="story_label_ul">
                                                <a href="folk_group-details.html">
                                                    <li>民宿故事</li>
                                                </a>
                                                <a href="folk_group-details.html">
                                                    <li>旅游攻略</li>
                                                </a>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="story_img">
                                    <a href="folk_group-details.html">
                                        <img src="images/story_img.png" alt=""></a>
                                </div>
                                <div class="story_info">
                                    <div class="stroy_title"><a href="folk_group-details.html">相关标题文字</a></div>
                                    <div class="article_info">
                                        <span class="publish_date grey">2018-03-13</span>
                                        <div class="function_li">
                                            <img src="images/message_icon.png" alt=""><span class="message_num">6</span>
                                        </div>
                                        <div class="function_li">
                                            <img src="images/eye_icon.png" alt=""><span class="browse_num">6</span>
                                        </div>
                                        <div class="story_content whitewrap">
                                            <a href="folk_group-details.html">相关标题文字相关标题文字相关标题文字相关标题文字相关标题文字</a>
                                        </div>
                                        <div class="story_label">
                                            <ul class="story_label_ul">
                                                <a href="folk_group-details.html">
                                                    <li>民宿故事</li>
                                                </a>
                                                <a href="folk_group-details.html">
                                                    <li>旅游攻略</li>
                                                </a>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </article>
            <!-- 图片列表end -->
            <!-- 页码begin -->
            <article class="pages clearfix">
                <table class="MovePage" cellpadding="0" cellspacing="0" border="0" align="center" style="width:100%;">
                    <tr>
                        <td height="30">
                            <div class="page">
                                <div class="sort_list">                                  
                                    <webdiyer:AspNetPager ID="Pager" runat="server" CurrentPageButtonClass="on" CustomInfoHTML=""
                                        FirstPageText="" LastPageText="" LayoutType="Div" NextPageText="下一页 &lt;b&gt;&lt;/b&gt;"
                                        NumericButtonCount="10" PagingButtonSpacing="0px" PrevNextButtonsClass="prev-down"
                                        PrevPageText="&lt;i&gt;&lt;/i&gt; 上一页" ShowFirstLast="false" ShowPageIndexBox="Auto"
                                        UrlPaging="True" MoreButtonsClass="text" ShowMoreButtons="false" PageSize="12"
                                        AlwaysShow="true">
                                    </webdiyer:AspNetPager> 
                                    <div class="fr" style="width:100%;">
                                        <i>共 <b>
                                            <%=recordcount %></b> 条数据</i><i class="ipage"><%=page %></i>/<%=this.Pager.PageCount %>&nbsp;&nbsp;
                                    </div>
                                </div>
                                <div class="cl">
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td height="30"></td>
                    </tr>
                </table>
            </article>
            <!-- 页码end -->
            <!-- 精品推荐begin -->
            <article class="recommend clearfix">
                <div class="container">
                    <div class="recommend_head">
                        <img src="images/logo1.png" alt="">精品推荐
                    </div>
                    <ul class="recommend_ul">
                        <li>
                            <div class="img_wrap">
                                <div class="recommend_img">
                                    <a href="folk_group-details.html">
                                        <img src="images/li_img.png" alt="精品推荐" width="217px" height="143px"></a>
                                </div>
                                <div class="recommend_title">
                                    <a href="folk_group-details.html">相关标题文字</a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="img_wrap">
                                <div class="recommend_img">
                                    <a href="folk_group-details.html">
                                        <img src="images/li_img.png" alt="精品推荐" width="217px" height="143px"></a>
                                </div>
                                <div class="recommend_title">
                                    <a href="folk_group-details.html">相关标题文字</a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="img_wrap">
                                <div class="recommend_img">
                                    <a href="folk_group-details.html">
                                        <img src="images/li_img.png" alt="精品推荐" width="217px" height="143px"></a>
                                </div>
                                <div class="recommend_title">
                                    <a href="folk_group-details.html">相关标题文字</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </article>
            <!-- 精品推荐end -->
        </section>
        <!-- 内容区end -->
        <!-- 底部版权区begin -->
        <uc1:PageBottom runat="server" ID="PageBottom1" />
        <script src="js/jquery.min.js"></script>
        <script src="js/jquery-ui.min.js"></script>
        <script>
            $('.collapse_btn').click(function (event) {
                $('.head_nav').slideToggle();
            });
            $("#checkin_time").datepicker();
            $("#checkin_time").datepicker("option", "showAnim", "blind");
            $("#checkout_time").datepicker();
            $("#checkout_time").datepicker("option", "showAnim", "blind");
            function checkdate1() {
                var date1 = document.getElementById('checkin_time').value;
                if (date1 == "") {
                    alert('请先选择入住时间！');
                    document.getElementById('checkout_time').value = "";
                }
            }
            function checkdate2() {
                var date1 = document.getElementById('checkin_time').value;
                var date2 = document.getElementById('checkout_time').value;
                if (date1 == "") {
                    alert('请先选择离开时间！');
                    document.getElementById('checkout_time').value = "";
                }
                if (date1 > date2) {
                    alert('离开时间不得小于入住时间！');
                    document.getElementById('checkout_time').value = "";
                }
            }
            window.onload = function () {
                $('.story_ul').eq(0).show();
                $('.register_box').eq(0).hide();
            }
            $('.select_ul li').click(function () {
                var index = $(this).index();
                $('.story_ul').eq(index).show().siblings().hide();
                $(this).addClass('active').siblings().removeClass('active');
            })
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
