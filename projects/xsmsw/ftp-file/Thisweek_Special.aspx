<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Thisweek_Special.aspx.cs" Inherits="Web.Thisweek_Special" %>

<%@ Register Src="~/WebControl/PageTop.ascx" TagPrefix="uc1" TagName="PageTop" %>
<%@ Register Src="~/WebControl/PageBottom.ascx" TagPrefix="uc1" TagName="PageBottom" %>
<%@ Register Assembly="AspNetPager" Namespace="Wuqi.Webdiyer" TagPrefix="webdiyer" %>
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta charset="UTF-8" />
    <title>本周特惠</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta http-equiv="X-UA-Compatible" contents="IE=edge" />
    <link rel="stylesheet" href="css/base.css" />
</head>
<body>
    <form id="form1" runat="server">
        <uc1:PageTop runat="server" ID="PageTop1" />
        <!-- 内容区begin -->
        <section class="content clearfix">
            <!-- 图片列表begin -->
            <article>
                <div class="container clearfix">
                    <ul class="item_ul">
                        <asp:Repeater ID="rptList" runat="server">
                            <ItemTemplate>
                                <li class="item_li">
                                    <div class="li_img">
                                        <a href="Special_Homestay_Details.aspx?id=<%# Eval("Id") %>" target="_blank">
                                            <img src="<%# Eval("Img") %>" alt="本周特惠" width="295px" height="195px" style="width:100%;height:100%;"/>
                                        </a>
                                        <div class="collection">
                                            <img src="/images/love_0.png" alt="" onclick="isCollection('<%= Common.Common.GetInt(Session["Uid"]) %>','1','<%# Eval("Id") %>')" />
                                        </div>
                                    </div>
                                    <div class="li_title">
                                        <a href="Special_Homestay_Details.aspx?id=<%# Eval("Id") %>" target="_blank"><%# Eval("Title") %></a>
                                    </div>
                                    <div class="sub_title">
                                        <a href="Special_Homestay_Details.aspx?id=<%# Eval("Id") %>" target="_blank"><%# Eval("TitleFu") %></a>
                                    </div>
                                    <div class="contents">
                                        <span class="money_sign">¥</span><span class="money"><%# Eval("TitleFu") %></span>
                                        <span class="comment">
                                            <a href="Special_Homestay_Details.aspx?id=<%# Eval("Id") %>" target="_blank"><i>0</i>条评论</a>
                                        </span>
                                        <span class="stars">
                                            <img src="/images/star4.png" alt=""></span>
                                    </div>
                                </li>
                            </ItemTemplate>
                        </asp:Repeater>
                    </ul>
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
                                    <a href="special_homestay-details.html">
                                        <img src="images/li_img.png" alt=""></a>
                                </div>
                                <div class="recommend_title">
                                    <a href="special_homestay-details.html">相关标题文字</a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="img_wrap">
                                <div class="recommend_img">
                                    <a href="special_homestay-details.html">
                                        <img src="images/li_img.png" alt=""></a>
                                </div>
                                <div class="recommend_title">
                                    <a href="special_homestay-details.html">相关标题文字</a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="img_wrap">
                                <div class="recommend_img">
                                    <a href="special_homestay-details.html">
                                        <img src="images/li_img.png" alt=""></a>
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
        </section>
        <!-- 内容区end -->
        <!-- 底部版权区begin -->
        <uc1:PageBottom runat="server" ID="PageBottom1" />
        <script src="js/jquery.min.js"></script>
        <script>
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
            function isCollection(mid, type, pid) {
                if (mid == "0") {

                }
                else {
                    var post_url = '/ajax/api.ashx?act=collection&mid=' + mid + '&types=' + type + '&pid=' + pid + '&rid=' + Math.random();
                    $.ajax({
                        url: post_url,
                        type: 'GET',
                        cache: false,
                        async: false,
                        dataType: 'JSON',
                        timeout: 5000,
                        success: function (result) {

                        }
                    });
                }
            }
        </script>
    </form>
</body>
</html>
