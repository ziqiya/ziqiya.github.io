import React, { Component } from 'react';
import Panel from '../../../components/Panel';
import Session from '../../../components/Session';
import XMP from '../../../components/XMP';
import Result from '../../../components/Result';
import In from '../../../components/Indent';

class Result1 extends Component{
  render(){
    return(
      <h1>Hello, world!</h1>
    )         
  }
}
class Result2 extends Component{
  render(){
    return(
      <h1>{1+1}</h1>
    )         
  }
}
class Result3 extends Component{
  render(){
    let i=1;
    return(
      <h1>{i === 1 ? 'True!' : 'False'}</h1>
    )         
  }
}
class Result4 extends Component{
  render(){
    var myStyle = {
      fontSize: 50,
      color: '#FF0000'
    };
    return(
      <h1 style = {myStyle}>内联样式</h1>
    )         
  }
}

class JSX extends Component{
    render(){
      return(
        <Panel title="React JSX">
          <Session title="JSX">
            <div>React 使用 JSX 来替代常规的 JavaScript。</div>
            <div>JSX 是一个看起来很像 XML 的 JavaScript 语法扩展。</div>
          </Session>
          <Session title="JSX优点">
            <dl>
              <dt>我们不需要一定使用 JSX，但它有以下优点：</dt>
              <dd>JSX 执行更快，因为它在编译为 JavaScript 代码后进行了优化。</dd>
              <dd>它是类型安全的，在编译过程中就能发现错误。</dd>
              <dd>使用 JSX 编写模板更加简单快速。</dd>
            </dl>
          </Session>
          <Session title="使用JSX">
            <div>JSX 看起来类似 HTML ，我们可以看下实例:</div>
            <XMP>
                <i>render(</i>
                  <In>&lt;h1>Hello, world!&lt;/h1>,</In>
                  <In>document.getElementById('example')</In>
                <i>);</i>
            </XMP>
            <Result>
              <Result1/>
            </Result>
          </Session>
          <Session title="独立文件">
            <div>你的 React JSX 代码可以放在一个独立文件上，例如我们创建一个 helloworld_react.js 文件，代码如下：</div>
            <XMP>
                <i>render(</i>
                  <In>&lt;h1>Hello, world!&lt;/h1>,</In>
                  <In>document.getElementById('example')</In>
                <i>);</i>
            </XMP>
            <div>然后在 HTML 文件中引入该 JS 文件：</div>
            <XMP>
              <i>&lt;body></i>
                <In>&lt;div id="example">&lt;/div></In>
              <In>&lt;script type="text/babel" src="helloworld_react.js">&lt;/script></In>
              <i>&lt;/body></i>
            </XMP>
            <Result>
              <Result1/>
            </Result>
          </Session>
          <Session title="JavaScript 表达式">
            <div>我们可以在 JSX 中使用 JavaScript 表达式。表达式写在花括号 &#123;} 中。实例如下：</div>
            <XMP>
              <i>ReactDOM.render(</i>
                  <In>&lt;div></In>
                    <In><In>&lt;h1>&#123;1+1}&lt;/h1></In></In>
                  <In>&lt;/div></In>
                  <In>,</In>
                  <In>document.getElementById('example')</In>
                <i>);</i>
            </XMP>  
            <Result>
              <Result2/>
            </Result>
            <div>在 JSX 中不能使用 if else 语句，但可以使用 conditional (三元运算) 表达式来替代。以下实例中如果变量 i 等于 1 浏览器将输出 true, 如果修改 i 的值，则会输出 false.</div>
            <XMP>
              <i>ReactDOM.render(</i>
                  <In>&lt;div></In>
                  <In><h1>&#123;i == 1 ? 'True!' : 'False'}</h1></In>
                  <In>&lt;/div></In>
                  <In>,</In>
                  <In>document.getElementById('example')</In>
                <i>);</i>
            </XMP>
            <Result>
              <Result3/>
            </Result>
          </Session>     
          <Session title="样式">
            <div>React 推荐使用内联样式。我们可以使用 camelCase（驼峰） 语法来设置内联样式. React 会在指定元素数字后自动添加 px 。以下实例演示了为 h1 元素添加 myStyle 内联样式：</div>
            <XMP>
            <i>var myStyle = &#123;</i>
              <In>fontSize: 50,</In>
              <In>color: '#FF0000'</In>
            <i>};</i>
            <i>ReactDOM.render(</i>
              <In>&lt;h1 style = &#123;myStyle}>内联样式&lt;/h1>,</In>
            <i>document.getElementById('example')</i>
            <i>);</i>  
            </XMP>    
            <Result>
              <Result4/>
            </Result>         
          </Session>                      
        </Panel>
        )
    }
  }
export default JSX;
