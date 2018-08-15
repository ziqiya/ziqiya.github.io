import React, { Component } from 'react';
import Panel from '../../../components/Panel';
import Session from '../../../components/Session';
import In from '../../../components/Indent';
import XMP from '../../../components/XMP';
class CssGramh extends Component{
    render(){
      return(
        <Panel title="CSS高级语法">
          <Session title="选择器的分组">
          <div>
            你可以对选择器进行分组，这样，被分组的选择器就可以分享相同的声明。
            用逗号将需要分组的选择器分开。在下面的例子中，我们对所有的标题元素进行了分组。所有的标题元素都是绿色的。
          </div>       
          <XMP>
            <i>h1,h2,h3,h4,h5,h6 &#123;</i>
            <In>color: green;</In>
            <i>} </i>
          </XMP>
          </Session>
          <Session title="解除继承">
          <div>
            如果你不希望 "Verdana, sans-serif" 字体被所有的子元素继承，又该怎么做呢？
            比方说，你希望段落的字体是 Times。没问题。创建一个针对 p 的特殊规则，这样它就会摆脱父元素的规则：
          </div>
          <XMP>
            <i>body &#123;</i>
            <In>font-family:Verdana, sans-serif;</In>
            <i>}</i>
            <i></i>
            <i>td, ul, ol, ul, li, dl, dt, dd &#123;</i>
            <In>font-family: Verdana, sans-serif;</In>
            <i>} </i>
            <i></i>
            <i>p &#123;</i>
            <In>font-family: Times, "Times New Roman", serif;</In>
            <i>} </i>
          </XMP>
          </Session>
        </Panel>
        )
    }
  }
export default CssGramh;
