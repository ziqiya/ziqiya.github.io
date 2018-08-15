import React, { Component } from 'react';
import Panel from '../../../components/Panel';
import Session from '../../../components/Session';
  class JsBrief extends Component{
    render(){
      return(
        <Panel title="JS简介">
          <Session title="JavaScript简介">
          <dl>
            <dd>JavaScript 是一种轻量级的编程语言。</dd>
            <dd>JavaScript 是可插入 HTML 页面的编程代码。</dd>
            <dd>JavaScript 插入 HTML 页面后，可由所有的现代浏览器执行。</dd>
            <dd>JavaScript 很容易学习。</dd>           
          </dl>
          </Session>         
          <Session title="JavaScript 使用">
          <div>HTML 中的脚本必须位于 &lt;script&gt; 与 &lt;/script&gt; 标签之间。</div>
          <div>脚本可被放置在 HTML 页面的 &lt;body&gt; 和 &lt;head&gt; 部分中。</div>
          </Session>   
        </Panel>
        )
    }
  }
export default JsBrief;
