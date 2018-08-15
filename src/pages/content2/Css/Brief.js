import React, { Component } from 'react';
import Session from '../../../components/Session';
import Panel from '../../../components/Panel';
  class CssBrief extends Component{
    render(){
      return(
        <Panel title="CSS简介">
          <Session title="CSS概述">
          <dl>
            <dd>CSS 指层叠样式表 (Cascading Style Sheets)</dd>
            <dd>样式定义如何显示 HTML 元素</dd>
            <dd>样式通常存储在样式表中</dd>
            <dd>把样式添加到 HTML 4.0 中，是为了解决内容与表现分离的问题</dd>
            <dd>外部样式表可以极大提高工作效率</dd>
            <dd>外部样式表通常存储在 CSS 文件中</dd>
            <dd>多个样式定义可层叠为一</dd>            
          </dl>
          </Session>         
          <Session title="层叠次序">
          <div>多重样式将层叠为一个</div>
          <div>样式表允许以多种方式规定样式信息。样式可以规定在单个的 HTML 元素中，在 HTML 页的头元素中，
            或在一个外部的 CSS 文件中。甚至可以在同一个 HTML 文档内部引用多个外部样式表。</div>
            <div>当同一个 HTML 元素被不止一个样式定义时，会使用哪个样式呢？</div>
            <dl>
              <dt>一般而言，所有的样式会根据下面的规则层叠于一个新的虚拟样式表中，其中数字 4 拥有最高的优先权。</dt>
              <dd>浏览器缺省设置</dd>
              <dd>外部样式表</dd>
              <dd>内部样式表（位于 &lt;head&gt; 标签内部）</dd>
              <dd>内联样式（在 HTML 元素内部）</dd>
            </dl>
            <div>因此，内联样式（在 HTML 元素内部）拥有最高的优先权，这意味着它将优先于以下的样式声明：&lt;head&gt;
                标签中的样式声明，外部样式表中的样式声明，或者浏览器中的样式声明（缺省值）。</div>   
            </Session>         
        </Panel>
        )
    }
  }
export default CssBrief;
