import React, { Component } from 'react';
import Panel from '../../../components/Panel';
import Session from '../../../components/Session';
import TableList from '../../../components/TableList';
import Result from '../../../components/Result';
import NoteTip from '../../../components/NoteTip';
import In from '../../../components/Indent';
import XMP from '../../../components/XMP';
const columns1 = [{
  title: '标签',
  dataIndex: 'Tag',
  key: 'Tag',
},{
  title: '描述',
  dataIndex: 'Description',
  key: 'Description',
}];
const columns2 = [{
  title: '属性',
  dataIndex: 'Tag',
  key: 'Tag',
},{
  title: '描述',
  dataIndex: 'Description',
  key: 'Description',
}];

const data1 = [{
  key: '1',
  Tag: '<center>',
  Description:'定义居中的内容。',
}, {
  key: '2',
  Tag: '<font> 和 <basefont>',
  Description:'定义 HTML 字体。',
}, {
  key: '3',
  Tag: '<s> 和 <strike>',
  Description:'	定义删除线文本',
}, {
  key: '4',
  Tag: '<u>',
  Description:'定义下划线文本',
}];

const data2 = [{
  key: '1',
  Tag: 'align',
  Description:'定义文本的对齐方式',
}, {
  key: '2',
  Tag: 'bgcolor',
  Description:'定义背景颜色',
}, {
  key: '3',
  Tag: 'color',
  Description:'	定义文本颜色',
}];
  class HtmlStyle extends Component{
    render(){
      return(
        <Panel title="HTML样式">
          <Session title="HTML 的 style 属性">
          <dl>
            <dt>style 属性的作用：</dt>
            <dd>样式是 HTML 4 引入的，它是一种新的首选的改变 HTML 元素样式的方式。通过 HTML 样式，
              能够通过使用 style 属性直接将样式添加到 HTML 元素，或者间接地在独立的样式表中（CSS 文件）进行定义。</dd>
          </dl>           
          </Session>
          <Session title="不赞成使用的标签和属性">
          <dl>            
            <dd>在 HTML 4 中，有若干的标签和属性是被废弃的。
              被废弃（Deprecated）的意思是在未来版本的 HTML 和 XHTML 中将不支持这些标签和属性。</dd>
            <dd>请避免使用这些被废弃的标签和属性！</dd>
            <dt>应该避免使用下面这些标签和属性：</dt>
          </dl>
          <TableList columns={columns1} data={data1}/>
          <TableList columns={columns2} data={data2}/>
          <NoteTip title="对于以上这些标签和属性：请使用样式代替"/>
          </Session>

          <Session title="Style例子">
          <XMP>
            <i>&lt;p style="font-family:Verdana;color:red">This text is in Verdana and red&lt;/p></i>
            <i>&lt;p style="font-family:Times;color:blue">This text is in Times and blue&lt;/p></i>
            <i>&lt;p style="font-size:30px">This text is 30 pixels high&lt;/p></i>           
          </XMP>
          <Result>
            <p style={{fontFamily:'Verdana',color:'red'}}>This text is in Verdana and red</p>
            <p style={{fontFamily:'Times',color:'blue'}}>This text is in Times and blue</p>
            <p style={{fontSize:'30px'}}>This text is 30 pixels high</p>
          </Result>
          </Session>

          <Session title="style实例-文本对齐">
            <p>text-align 属性规定了元素中文本的水平对齐方式：</p>
            <XMP>
              <i>&lt;html&gt;</i>
              <In>&lt;body&gt;</In>
              <In><In>&lt;h1 style="text-align:center"&gt; This is a heading &lt;/h1&gt;</In></In>   
              <In><In>&lt;p&gt;The heading above is aligned to the center of this page.&lt;/p&gt;</In></In> 
              <In>&lt;/body&gt;</In>
              <i>&lt;/html&gt;</i>
            </XMP>
            <Result>
              <div>
                <h1 style={{textAlign:'center'}}> This is a heading </h1>
                <p>The heading above is aligned to the center of this page.</p>
              </div>
            </Result>
            <dl>
              <dd>在这个例子中，h1标签中的文字居中展示了</dd>
              <dd>style 属性淘汰了旧的 "align" 属性。</dd>
            </dl> 
          </Session>          
        </Panel>
        )
    }
  }
export default HtmlStyle;
