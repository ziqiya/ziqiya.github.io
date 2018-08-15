import React, { Component } from 'react';
import Panel from '../../../components/Panel';
import Img from '../../../components/Img';
import Session from '../../../components/Session';
  class EchartBrief extends Component{
    render(){
      return(
        <Panel title="Echarts简介">
          <Session title="Echarts特性">
          <div>ECharts，一个使用 JavaScript 实现的开源可视化库，可以流畅的运行在 PC 和移动设备上，
            兼容当前绝大部分浏览器（IE8/9/10/11，Chrome，Firefox，Safari等），
            底层依赖轻量级的矢量图形库 ZRender，提供直观，交互丰富，可高度个性化定制的数据可视化图表。</div>
          </Session>
      
          <Session title="丰富的可视化类型">
            <dl>
              <dt>实际上有多种编译Sass的方法：</dt>
              <dd>ECharts 提供了常规的折线图、柱状图、散点图、饼图、K线图，用于统计的盒形图，用于地理数据可视化的地图、热力图、线图，用于关系数据可视化的关系图、treemap、旭日图，多维数据可视化的平行坐标，还有用于 BI 的漏斗图，仪表盘，并且支持图与图之间的混搭。</dd>
              <dd>除了已经内置的包含了丰富功能的图表，ECharts 还提供了自定义系列，只需要传入一个renderItem函数，就可以从数据映射到任何你想要的图形，更棒的是这些都还能和已有的交互组件结合使用而不需要操心其它事情。</dd>
              <dd>你可以在下载界面下载包含所有图表的构建文件，如果只是需要其中一两个图表，又嫌包含所有图表的构建文件太大，也可以在在线构建中选择需要的图表类型后自定义构建。</dd>
            </dl>
          </Session>
          <Session title="千万数据的前端展现">
            <dl>           
              <dd>通过增量渲染技术（4.0+），配合各种细致的优化，ECharts 能够展现千万级的数据量，并且在这个数据量级依然能够进行流畅的缩放平移等交互。</dd>
              <dd>几千万的地理坐标数据就算使用二进制存储也要占上百 MB 的空间。因此 ECharts 同时提供了对流加载（4.0+）的支持，你可以使用 WebSocket 或者对数据分块后加载，加载多少渲染多少！不需要漫长地等待所有数据加载完再进行绘制。</dd>            
            </dl>
            <Img src='scatterGL.png'/>
          </Session>
          <Session title="移动端优化">
            <dl>           
              <dd>ECharts 针对移动端交互做了细致的优化，例如移动端小屏上适于用手指在坐标系中进行缩放、平移。 PC 端也可以用鼠标在图中进行缩放（用鼠标滚轮）、平移等。</dd>
              <dd>细粒度的模块化和打包机制可以让 ECharts 在移动端也拥有很小的体积，可选的 SVG 渲染模块让移动端的内存占用不再捉襟见肘。</dd>            
            </dl>
          </Session>
          <Session title="多渲染方案，跨平台使用！">
            <dl>           
              <dd>ECharts 支持以 Canvas、SVG（4.0+）、VML 的形式渲染图表。VML 可以兼容低版本 IE，SVG 使得移动端不再为内存担忧，Canvas 可以轻松应对大数据量和特效的展现。不同的渲染方式提供了更多选择，使得 ECharts 在各种场景下都有更好的表现。</dd>
              <dd>除了 PC 和移动端的浏览器，ECharts 还能在 node 上配合 node-canvas 进行高效的服务端渲染（SSR）。从 4.0 开始我们还和微信小程序的团队合作，提供了 ECharts 对小程序的适配！</dd> 
              <dd>社区热心的贡献者也为我们提供了丰富的其它语言扩展，比如 Python 的pyecharts，R 语言的 recharts, Julia 的 ECharts.jl 等等。</dd>           
            </dl>
          </Session>
          <Session title="深度的交互式数据探索">
            <dl>           
              <dd>交互是从数据中发掘信息的重要手段。“总览为先，缩放过滤按需查看细节”是数据可视化交互的基本需求。</dd>
              <dd>ECharts 一直在交互的路上前进，我们提供了 图例、视觉映射、数据区域缩放、tooltip、数据刷选等开箱即用的交互组件，可以对数据进行多维度数据筛取、视图缩放、展示细节等交互操作。</dd>        
            </dl>
          </Session>
        </Panel>
        )
    }
  }
export default EchartBrief;
