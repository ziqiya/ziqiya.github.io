import React, { Component } from 'react';
import Panel from '../../../components/Panel';
import Session from '../../../components/Session';
import Result from '../../../components/Result';
import XMP from '../../../components/XMP';
import In from '../../../components/Indent';
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
 
    // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}
function handleClick(e) {
  e.preventDefault();
  console.log('链接被点击');
}
class Events extends Component{
    
    render(){
      return(
        <Panel title="React事件处理">
          <Session title="JSX">
            <dl>
              <dt>React 元素的事件处理和 DOM 元素类似。但是有一点语法上的不同:</dt>
              <dd>React 事件绑定属性的命名采用<b>驼峰式写法</b>，而不是小写。</dd>
              <dd>如果采用 JSX 的语法你需要传入一个函数作为事件处理函数，而不是一个字符串(DOM 元素的写法)。</dd>
            </dl>
            <div>HTML 通常写法是：</div>
            <XMP>
              <i>&lt;button onclick="activateLasers()"></i>
                <In>激活按钮</In>
              <i>&lt;/button></i>
            </XMP>
            <div>React 中写法为：</div>
            <XMP>
              <i>&lt;button onclick=&#123;activateLasers}></i>
                <In>激活按钮</In>
              <i>&lt;/button></i>
            </XMP>
            <div>在 React 中另一个不同是你不能使用返回 false 的方式阻止默认行为， 你必须明确的使用 preventDefault。</div>
            <div>例如，通常我们在 HTML 中阻止链接默认打开一个新页面，可以这样写：</div>
            <XMP>
              <i>&lt;a href="http://www.baidu.com" onclick="console.log('点击链接'); return false"></i>
                <In>点我</In>
              <i>&lt;/a></i>
            </XMP>
            <div>在 React 的写法为：</div>
            <XMP>
            <i>function ActionLink() &#123;</i>
                <In>function handleClick(e) &#123;</In>
                <In><In>e.preventDefault();</In></In>
                <In><In>console.log('链接被点击');</In></In>
                <In>}</In>
                <i/>
                <In>return (</In>
                  <In><In>&lt;a href="http://www.baidu.com" onClick=&#123;handleClick}></In></In>
                  <In><In><In>点我</In></In></In>
                  <In><In>&lt;/a></In></In>
                <In>);</In>
              <i>}</i>
            </XMP>
            <Result>
                <a href="http://www.baidu.com" onClick={handleClick}>点我</a>
            </Result>
            <div>上面例子中e 是一个合成事件。点击了以后并没有跳转，而且在控制台console中返回了“链接被点击”</div>
            当你使用 ES6 class 语法来定义一个组件的时候，事件处理器会成为类的一个方法。
            例如，下面的 Toggle 组件渲染一个让用户切换开关状态的按钮：
            <XMP>
            <i>class Toggle extends React.Component &#123;</i>
              <In>constructor(props) &#123;</In>
                <In><In>super(props);</In></In>
                <In><In>this.state = &#123;isToggleOn: true};</In></In>            
                <In><In>/ / 这边绑定是必要的，这样 `this` 才能在回调函数中使用</In></In>
                <In><In>this.handleClick = this.handleClick.bind(this);</In></In>
                <In>}</In>
                <i/>
            <In>handleClick() &#123;</In>
                <In><In>this.setState(prevState => (&#123;</In></In>
                  <In><In><In>isToggleOn: !prevState.isToggleOn</In></In></In>
                <In><In>}));</In></In>
            <In>}</In>
            <i/>
            <In>render() &#123;</In>
              <In><In>return (</In></In>
                <In><In><In>&lt;button onClick=&#123;this.handleClick}></In></In></In>
                <In><In><In><In>&#123;this.state.isToggleOn ? 'ON' : 'OFF'}</In></In></In></In>
                <In><In><In>&lt;/button></In></In></In>
              <In><In>);</In></In>
            <In>}</In>
            <i>}</i>
            <i/>
            <i>ReactDOM.render(</i>
              <In>&lt;Toggle />,</In>
              <In>document.getElementById('example')</In>
            <i>);</i>
            </XMP>
            <Result>
              <Toggle />
            </Result>
            <div>其实上面的.bind(this)也可以写在onClick的事件后面,如下:</div>
            <XMP>
              <i>&lt;button onClick=&#123;this.handleClick.bind(this)}></i>
            </XMP>
            <div>实现效果如下:</div>
            <Result>
              <Toggle />
            </Result>
            <div>这样constructor中的定义就可以不加了</div>

            <div>下面还有一个方法，可以不用加.bind(this),用箭头函数,如下：</div>
            <XMP>
            <i>class Toggle extends React.Component &#123;</i>
              <In>constructor(props) &#123;</In>
                <In><In>super(props);</In></In>
                <In><In>this.state = &#123;isToggleOn: true};</In></In>            
                <In>}</In>
                <i/>
            <In>handleClick() &#123;</In>
                <In><In>this.setState(prevState => (&#123;</In></In>
                  <In><In><In>isToggleOn: !prevState.isToggleOn</In></In></In>
                <In><In>}));</In></In>
            <In>}</In>
            <i/>
            <In>render() &#123;</In>
              <In><In>return (</In></In>
                <In><In><In>&lt;button onClick=&#123;(e) => this.handleClick(e)}></In></In></In>
                <In><In><In><In>&#123;this.state.isToggleOn ? 'ON' : 'OFF'}</In></In></In></In>
                <In><In><In>&lt;/button></In></In></In>
              <In><In>);</In></In>
            <In>}</In>
            <i>}</i>
            <i/>
            <i>ReactDOM.render(</i>
              <In>&lt;Toggle />,</In>
              <In>document.getElementById('example')</In>
            <i>);</i>              
            </XMP>
            <div>效果也是一样的</div>
            <Result>
              <Toggle />
            </Result>
          </Session>
        </Panel>
        )
    }
  }
export default Events;
