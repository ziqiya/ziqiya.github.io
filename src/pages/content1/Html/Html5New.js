import React, { Component } from 'react';
import Panel from '../../../components/Panel';
import Session from '../../../components/Session';
import TableList from '../../../components/TableList';
import NoteTip from '../../../components/NoteTip';
import In from '../../../components/Indent';
import XMP from '../../../components/XMP';
const columns = [{
  title: '元素',
  dataIndex: 'element',
  key: 'element',
}, {
  title: '描述',
  dataIndex: 'meaning',
  key: 'meaning',
}];

const data = [{
  key: '1',
  element: '<article>',
  meaning:'',
},{
    key: '2',
    element: '<aside>',
    meaning:'定义页面的侧边栏内容。',
},{
    key: '3',
    element: '<bdi>',
    meaning:'允许您设置一段文本，使其脱离其父元素的文本方向设置。',
  },{
    key: '4',
    element: '<command>',
    meaning:'定义命令按钮，比如单选按钮、复选框或按钮',
  },{
    key: '5',
    element: '<details>',
    meaning:'用于描述文档或文档某个部分的细节',
  },{
    key: '6',
    element: '<dialog>',
    meaning:'定义对话框，比如提示框',
  },{
    key: '7',
    element: '<summary>',
    meaning:'标签包含 details 元素的标题',
  },{
    key: '8',
    element: '<figure>',
    meaning:'规定独立的流内容（图像、图表、照片、代码等等）。',
  },{
    key: '9',
    element: '<figcaption>',
    meaning:'定义 <figure> 元素的标题',
  },{
    key: '10',
    element: '<footer>',
    meaning:'定义 section 或 document 的页脚。',
  },{
    key: '11',
    element: '<header>',
    meaning:'定义了文档的头部区域',
  },{
    key: '12',
    element: '<mark>',
    meaning:'定义带有记号的文本。',
  },{
    key: '13',
    element: '<meter>',
    meaning:'定义度量衡。仅用于已知最大和最小值的度量。',
  },{
    key: '14',
    element: '<nav>',
    meaning:'定义导航链接的部分。',
  },{
    key: '15',
    element: '<progress>',
    meaning:'定义任何类型的任务的进度。',
  },{
    key: '16',
    element: '<ruby>',
    meaning:'定义 ruby 注释（中文注音或字符）。',
  },{
    key: '17',
    element: '<rt>',
    meaning:'定义字符（中文注音或字符）的解释或发音。',
  },{
    key: '18',
    element: '<rp>',
    meaning:'在 ruby 注释中使用，定义不支持 ruby 元素的浏览器所显示的内容。',
  },{
    key: '19',
    element: '<section>',
    meaning:'定义文档中的节（section、区段）。',
  },{
    key: '20',
    element: '<time>',
    meaning:'定义日期或时间。',
},{
    key: '21',
    element: '<wbr>',
    meaning:'规定在文本中的何处适合添加换行符。',
}];
  class Html5New extends Component{
    render(){
      return(
        <Panel title="HTML5新特性">
          <Session title="HTML5 新元素">
            <div>HTML5提供了新的元素来创建更好的页面结构：</div>
            <TableList columns={columns} data={data}/>        
          </Session>
          <Session title="HTML5 Canvas">
            <div>&lt;canvas&gt;元素用于图形的绘制，通过脚本 (通常是JavaScript)来完成.&lt;canvas&gt;标签只是图形容器，您必须使用脚本来绘制图形。</div>
          </Session>

          <Session title="p元素">
          <XMP>
            <i>&lt;p>This is my first paragraph.&lt;/p&gt;</i>           
          </XMP>
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
export default Html5New;
