import React, { Component } from 'react';
import Panel from '../../../components/Panel';
import Session from '../../../components/Session';
import In from '../../../components/Indent';
import NoteTip from '../../../components/NoteTip';
import XMP from '../../../components/XMP';
  class CssGramb extends Component{
    render(){
      return(
        <Panel title="Sass基础语法">
          <Session title="变量">
          <dl>
            <dd>Sass让CSS可以使用变量。</dd>
            <dd>变量类型可以是数字，字符串，颜色，null，列表和maps。</dd>
            <dt>在Sass中使用$符号定义变量。让我们来创建第一个变量：</dt>
          </dl>
          <XMP>
            <i>$primaryColor: #eeffcc;</i>
          </XMP>
          <div>
            然后你需要使用一段CSS声明使用它，然后就可以看见了：
          </div>
          <XMP>
            <i>$primaryColor: #eeffcc;</i>
            <i>body &#123;</i>
            <In>background:$primaryColor;</In>
            <i>&#125;</i>
          </XMP>
          <NoteTip title="提一下作用域这个坑，Sass是有变量作用域的，如果你在选择器中声明了一个变量，那么它的作用范围就是这个选择器内部。"/>
          <div>看看这个：</div>
          <XMP>
            <i>$primaryColor: #eeffcc;</i>
            <i>body &#123;</i>
            <In>$primaryColor:#ccc;</In>
            <In>background:$primaryColor;//编译后#ccc</In>
            <i>&#125;</i>
            <i>p &#123;</i>
            <In>color:$primaryColor;//编译后#eeccff</In>
            <i>&#125;</i>
          </XMP>
          <div>但如果我们想在选择器中声明一个全局变量可如何是好？Sass提供了一个!global标识符来实现这一功能：</div>
          <XMP>
            <i>$primaryColor: #eeffcc;</i>
            <i>body &#123;</i>
            <In>$primaryColor:#ccc;!global</In>
            <In>background:$primaryColor;//编译后#ccc</In>
            <i>&#125;</i>
            <i>p &#123;</i>
            <In>color:$primaryColor;//编译后#ccc</In>
            <i>&#125;</i>
          </XMP>           
          <div>另一个很有用的标识符是!default——特别是编写混合宏时。这确保了我们在触发事件时，
          即使未传递参数，变量也会有默认的值。如果传递了参数，那么该参数就会覆盖默认值：</div>   
          <XMP>
          <i>$firstValue: 62.5%;</i>
          <i>$firstValue: 24px !default;</i>
          <i>body &#123;</i>
              <In>font-size:$firstValue;//编译后62.5%;</In>
              <i>&#125;</i>
          </XMP>        
          </Session>

          <Session title="数学计算">
          <div>与CSS不同，Sass允许使用数学表达式！这对于混合宏非常有用，是我们能够使用自己的标记做一些很酷的事情</div>
          <dl>
            <dt>支持的操作符包括：</dt>
            <dd>加：+</dd>
            <dd>减：-</dd>
            <dd>除：/</dd>
            <dd>乘：*</dd>
            <dd>取余：%</dd>
            <dd>相等：==</dd>
            <dd>不相等：!=</dd>
          </dl>
          <NoteTip title="关于Sass数学计算有两个需要注意的点"/>
          <div>第一，因为/符号用来简写CSS字体属性，比如font: 14px/16px，
            所以如果你想在非变量值上使用除法操作符，那么你需要使用括号包裹它们</div>
          <XMP>
            <i>$fontDiff :(14px/16px);</i>
          </XMP>
          <div>第二，不可以混合使用值的单位：</div>
          <XMP>
            <i>$container-width :100% - 20px;</i>
          </XMP>
          <div>上面这个例子行不通。相反，对于这个特殊的例子你可以使用calc函数——它可以在渲染时解释执行。</div>
          <div>回到数学计算上来，让我们基于基础的容器宽度创建一个动态列声明：</div>
          <XMP>
            <i>$container-width :100%;</i>
            <i>.container &#123;</i>
            <In>width: $container-width;</In>
            <i>&#125; </i>     
            <i>.col-4 &#123;</i>
            <In>width: $container-width/ 4;</In>
            <i>&#125; </i>      
          </XMP>
          </Session>

          <Session title="函数">
          <div>Sass最好的一点就是它的内建函数。可以在<a href="http://sass-lang.com/documentation/Sass/Script/Functions.html" rel="noopener noreferrer" target="_blank">这里</a>查看完整的函数列表。内容非常广泛。</div>
          <div>你是否想创建一个非常酷的按钮，然后在调色板上花费了很多时间，以尝试为阴影部分找到正确的色调？</div>
          <div>尝试darken()函数吧。你可以传递给它一个颜色和比例，稍等一会，就会使你的颜色变暗了。看看这个例子就知道为什么它很酷了：</div>
          <XMP>
            <i>$buttonColor: #2ecc71;</i>
            <i>$buttonDark: darken($buttonColor, 10%);</i>
            <i>$buttonDarker: darken($buttonDark, 10%);</i>
            <i>button &#123;</i>
            <In>background : $buttonColor;</In>
            <i> &#125;</i>
            <i>button:hover &#123;</i>
            <In>background : darken($buttonDark,10%);</In>
            <In>box-shadow : darken($buttonDarker,10%);</In>
            <i>&#125;</i>
          </XMP>

          </Session>

          <Session title="嵌套">
          <div>Sass中一个很有用又经常被误用的特性，就是嵌套声明。
            能力越大责任越大，所以让我们花费点时间了解它都做了什么，另一方面，也看看它做了什么坏事</div>
          <div>基础的嵌套指在一个声明内实现另一个声明的能力。通常在CSS中，我们会这么写：</div>
          <XMP>            
            <i>.container &#123;</i>
              <In>width : 100%;</In>
            <i>&#125;</i> 
            <i>.container h1 &#123;</i>
              <In>color : red;</In>
            <i>&#125;</i> 
          </XMP>
          <div>但在Sass中，我们可以通过如下写法获得相同代码：</div>
          <XMP>            
            <i>.container &#123;</i>
              <In>width : 100%;</In>
              <In> h1 &#123;</In>
                <In><In>color : red;</In></In>
              <In>&#125;</In>
            <i>&#125;</i>             
          </XMP>
          <div>那么如果我们想引用父选择器又该怎么办呢？可以通过使用&符号实现。
            看看我们是如何利用这个方式给伪选择器添加链接属性的吧：</div>       
          <XMP>            
            <i>a.myAnchor &#123;</i>
              <In>color : blue;</In>
              <In> &:hover &#123;</In>
                <In><In>text-decoration : underline;</In></In>
              <In>&#125;</In>
              <In> &:visited &#123;</In>
                <In><In>color : purple;</In></In>
              <In>&#125;</In>
            <i>&#125;</i>             
          </XMP>
          <div>现在已经知道怎样嵌套了，但是如果想离开嵌套回到顶层选择器，那么我们可以使用@at-root指令。比如我们有一个这样的嵌套：</div>        
          <div>当意识到第二个组件可能会被用作他处，那我们就有麻烦了。实际上，这并不完全对。@at-root可以解决这个问题：</div>
          <XMP>            
            <i>.first-component &#123;</i>
              <In>.text &#123; color: blue;&#125;</In>
              <In> @at-root .second-component&#123;</In>
                <In><In>.text &#123;font-size: 1.2rem;&#125;</In></In>
              <In><i>&#125;</i></In>
            <i>&#125;</i>             
          </XMP>
          <div>嵌套是节省时间和提高可读性的窍门，
          但是过度嵌套则会制造过度选择和文件大小的问题。思考你的Sass编译结果并尝试遵循“inception rule”。</div>
          <XMP>            
            <i>inception rule :选择器深度不要超过四层。——thesassway</i>                 
          </XMP>
          <NoteTip title="注意：如果可能，嵌套不要超过四层。虽然语法上嵌套五层没问题"/>
          </Session>
        </Panel>
        )
    }
  }
export default CssGramb;
