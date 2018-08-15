import React, { Component } from 'react';
import Panel from '../../../components/Panel';
import Session from '../../../components/Session';
import TableList from '../../../components/TableList';
import NoteTip from '../../../components/NoteTip';
import In from '../../../components/Indent';
import XMP from '../../../components/XMP';
import Result from '../../../components/Result';
const columns = [{
  title: '开始标签',
  dataIndex: 'startTag',
  key: 'startTag',
}, {
  title: '元素内容',
  dataIndex: 'eleContent',
  key: 'eleContent',
}, {
  title: '结束标签',
  dataIndex: 'endTag',
  key: 'endTag',
}];

const data = [{
  key: '1',
  startTag: '<p>',
  eleContent:'This is a paragraph',
  endTag: '</p>',
}, {
  key: '2',
  startTag: '<a href="default.htm" >',
  eleContent:'This is a link',
  endTag: '	</a>',
}, {
  key: '3',
  startTag: '<br />',
  eleContent:'',
  endTag: '',
}];
  class HtmlEle extends Component{
    render(){
      return(
        <Panel title="HTML元素">
          <Session title="HTML元素">
          <dl>
            <dt>HTML 文档是由 HTML 元素定义的。</dt>
            <dd>HTML 元素指的是从开始标签（start tag）到结束标签（end tag）的所有代码。</dd>
          </dl>
          <TableList columns={columns} data={data}/>
          <NoteTip title="注释：开始标签常被称为开放标签（opening tag），结束标签常称为闭合标签（closing tag）。"/>
          </Session>
          <Session title="HTML 元素语法">
          <dl>             
            <dd>HTML 元素以开始标签起始</dd>
            <dd>HTML 元素以结束标签终止</dd>
            <dd>元素的内容是开始标签与结束标签之间的内容</dd>
            <dd>某些 HTML 元素具有空内容（empty content）</dd>
            <dd>空元素在开始标签中进行关闭（以开始标签的结束而结束）</dd>
            <dd>大多数 HTML 元素可拥有属性</dd>
          </dl>
          </Session>

          <Session title="p元素">
          <XMP>
            <i>&lt;p>This is my first paragraph.&lt;/p&gt;</i>           
          </XMP>
          <Result>
            <p>This is my first paragraph.</p>
          </Result>
          <dl>
            <dd>这个 &lt;p&gt; 元素定义了 HTML 文档中的一个段落。</dd>
            <dd>这个元素拥有一个开始标签 &lt;p&gt;，以及一个结束标签 &lt;/p&gt;。</dd>
            <dd>元素内容是：This is my first paragraph。</dd>
          </dl>
          </Session>

          <Session title="<body> 元素">
          <XMP>
            <i>&lt;body&gt;</i>
            <In>&lt;p>This is my first paragraph.&lt;/p&gt;</In>    
            <i>&lt;/body&gt;</i>     
          </XMP>
          <Result>
            <div>
              <p>This is my first paragraph.</p>
            </div>
          </Result>
          <dl>
            <dd>&lt;html&gt; 元素定义了整个 HTML 文档。</dd>
            <dd>这个元素拥有一个开始标签 &lt;html&gt;，以及一个结束标签 &lt;/html&gt;。</dd>
            <dd>元素内容是另一个 HTML 元素（body 元素）。</dd>
          </dl>
          </Session>
          
          <Session title="空的 HTML 元素">
          <dl>
            <dd>没有内容的 HTML 元素被称为空元素。空元素是在开始标签中关闭的。</dd>
            <dd>&lt;br&gt; 就是没有关闭标签的空元素（&lt;br&gt; 标签定义换行）。</dd>
            <dd>在 XHTML、XML 以及未来版本的 HTML 中，所有元素都必须被关闭。</dd>
            <dd>在开始标签中添加斜杠，比如 &lt;br /&gt;，是关闭空元素的正确方法，HTML、XHTML 和 XML 都接受这种方式。</dd>
            <dd>即使 &lt;br&gt; 在所有浏览器中都是有效的，但使用 &lt;br /&gt; 其实是更长远的保障。</dd>
          </dl>
          </Session>

          <Session title="HTML 提示：使用小写标签">
          <dl>
            <dd>HTML 标签对大小写不敏感：&lt;P&gt; 等同于 &lt;p&gt;。许多网站都使用大写的 HTML 标签。</dd>
            <dd>W3School 使用的是小写标签，因为万维网联盟（W3C）在 HTML 4 中推荐使用小写，而在未来 (X)HTML 版本中强制使用小写。</dd>
          </dl>
          </Session>
        </Panel>
        )
    }
  }
export default HtmlEle;
