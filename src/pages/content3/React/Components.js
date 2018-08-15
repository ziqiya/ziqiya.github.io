import React, { Component } from 'react';
import Panel from '../../../components/Panel';
import Session from '../../../components/Session';
import XMP from '../../../components/XMP';
import Result from '../../../components/Result';
import NoteTip from '../../../components/NoteTip';
import In from '../../../components/Indent';
function NoteTips(props) {
  return <p className="NoteTip">{props.title}</p>;
}

class JSX extends Component{
  render(){
    return(
      <Panel title="React 组件">
        <Session title="Component">
          <div>使用组件可以使得我们的应用更容易来管理。</div>
          <div>接下来我们封装一个输出 title 属性的组件，组件名为 NoteTips：</div>
          <XMP>
            <i>function NoteTips(props) &#123;</i>
              <In>return &lt;p className="NoteTip">&#123;props.title}&lt;/p>;</In>
            <i>}</i>
            <i/>
            <i>const element = &lt;NoteTips title="注意事项"/>;</i>
            <i/>
            <i>ReactDOM.render(</i>
              <In>element,</In>
              <In>document.getElementById('example')</In>
            <i>);</i>               
          </XMP>
          <Result>
              <NoteTips title="注意事项"/>
          </Result>
          以上是用了js函数的方式定义了组件，当然也可以用ES6的class方式定义组件，如下：
          <XMP>
            <i>class NoteTip extends Component &#123;</i>
              <In>render()&#123;</In>
              <In><In>return( </In></In>
                <In><In><In>&lt;p className="NoteTip">&#123;this.props.title}&lt;/p></In></In></In>
              <In><In>)</In></In>  
              <In>}</In>           
            <i>}</i>
            <i/>       
            <i>const element = &lt;NoteTips title="注意事项"/>;</i>
            <i/>
            <i>ReactDOM.render(</i>
              <In>element,</In>
              <In>document.getElementById('example')</In>
            <i>);</i>        
          </XMP>
          <Result>
            <NoteTip title="注意事项"/>
          </Result>
          <NoteTip>注意，原生 HTML 元素名以小写字母开头，而自定义的 React 类名以大写字母开头，比如 HelloMessage 不能写成 helloMessage。除此之外还需要注意组件类只能包含一个顶层标签，否则也会报错。</NoteTip>        
        </Session>
      </Panel>
      )
  }
}
export default JSX;
