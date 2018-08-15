import React, { Component } from 'react';
import Panel from '../../../components/Panel';
import Session from '../../../components/Session';
import Img from '../../../components/Img';
  class VirtualDom extends Component{
    render(){
      return(
        <Panel title="虚拟DOM">
          <Session title="What's 虚拟DOM">            
            <dl>
              <dt>虚拟dom是什么</dt>
              <dd>虚拟dom就是React用JavaScript实现的DOM树，这些组件的HTML结构并不会直接生成真实DOM，而是映射生成虚拟的JavaScript DOM结构，</dd> 
              <dd>当更新时React又通过在这个虚拟DOM上实现了一个 diff 算法找出最小变更，再把这些变更写入实际的DOM中。</dd>
              <dd>这个虚拟DOM以JS结构的形式存在，计算性能会比较好，而且由于减少了实际DOM操作次数，性能会有较大提升。</dd>                     
            </dl>          
          </Session>
          <Session title="Why 虚拟DOM">
            <Img src="virtualDom.jpg" alt="virtualDom"/>
            <dl>
              <dt>我们需要浏览器加载一个HTML文件需要做哪些事讲起。从上面这个图中，我们可以看到，所有浏览器的引擎工作流程都差不多，
                大致分5步：创建DOM tree –> 创建Style Rules -> 构建Render tree -> 布局Layout –> 绘制Painting</dt>
              <dd><b>第一步</b>，用HTML分析器，分析HTML元素，构建一颗DOM树。</dd>
              <dd><b>第二步</b>：用CSS分析器，分析CSS文件和元素上的inline样式，生成页面的样式表。</dd>
              <dd><b>第三步</b>：将上面的DOM树和样式表，关联起来，构建一颗Render树。这一过程又称为Attachment。每个DOM节点都有attach方法，
                接受样式信息，返回一个render对象（又名renderer）。这些render对象最终会被构建成一颗Render树。</dd>
              <dd><b>第四步</b>：有了Render树后，浏览器开始布局，会为每个Render树上的节点确定一个在显示屏上出现的精确坐标值。</dd>
              <dd><b>第五步</b>：Render数有了，节点显示的位置坐标也有了，最后就是调用每个节点的paint方法，让它们显示出来。</dd>
            </dl>
            <div>那么如果要改变一次DOM状态，进行更新的话，如果直接操作真实DOM，就要把所有的节点位置，状态更新一遍，这工作量在大项目中无疑是巨大的
            频繁操作还是会出现页面卡顿，影响用户的体验。真实的DOM节点，哪怕一个最简单的div也包含着很多属性,所以这就需要一种避免操作真实dom的方法。</div>
            <div>没错，这就是虚拟dom。</div>
            <div>例如前面的例子，假如一次操作中有10次更新DOM的动作，虚拟DOM不会立即操作DOM，而是将这10次更新的diff内容保存到本地的一个js对象中，
              最终将这个js对象一次性attach到DOM树上，通知浏览器去执行绘制工作，这样可以避免大量的无谓的计算量。</div>
          </Session>
        </Panel>
        )
    }
  }
export default VirtualDom;
