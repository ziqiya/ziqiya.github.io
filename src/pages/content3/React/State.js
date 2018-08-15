import React, { Component } from 'react';
import Panel from '../../../components/Panel';
import Session from '../../../components/Session';
import Result from '../../../components/Result';
import XMP from '../../../components/XMP';
import In from '../../../components/Indent';
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toLocaleTimeString(),
      timer:''
    };
  }
  render() {
    return (
      <div>
        <h2>现在是 {this.state.date}.</h2>
      </div>
    );
  }
}
class Clock1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toLocaleTimeString(),
    };
  }
  componentDidMount(){
  	this.timer=setInterval(()=>
		{this.setState({date: new Date().toLocaleTimeString()})}
	,1000)
  }
  componentWillUnmount(){
    clearInterval(this.timer);
  }
  render() {
    return (
      <div>
        <h2>现在是 {this.state.date}.</h2>
      </div>
    );
  }
}
class State extends Component{
  render(){
    return(
      <Panel title="State(状态)">
        <Session title="Component">
          <div>React 把组件看成是一个状态机（State Machines）。通过与用户的交互，实现不同状态，然后渲染 UI，让用户界面和数据保持一致。</div>
          <div>React 里，只需更新组件的 state，然后根据新的 state 重新渲染用户界面（不要操作 DOM）。</div>
          <div>以下实例创建一个名称扩展为Component 的 ES6 类，在 render() 方法中使用 this.state 来修改当前的时间。</div>
          <div>添加一个类构造函数来初始化状态 this.state，类组件应始终使用 props 调用基础构造函数。</div>
          <XMP>
          <i>class Clock extends React.Component &#123;</i>
            <In>constructor(props) &#123;</In>
            <In><In>super(props);</In></In>
            <In><In>this.state = &#123;</In></In>
            <In><In><In>date: new Date().toLocaleTimeString(),</In></In></In>
            <In><In>};</In></In>
            <In>}</In>          
            <In>render() &#123;</In>
            <In><In>return (</In></In>
              <In><In>&lt;div></In></In>
              <In><In><In>&lt;h2>现在是 &#123;this.state.date}.&lt;/h2></In></In></In>
              <In><In>&lt;/div></In></In>
              <In>);</In>
              <In>}</In>
            <i>}</i>              
          </XMP>
          <Result>
              <Clock/>
          </Result>   
          <div>但是大家看到，时间并没有动起来，接下来，我们让他每秒钟更新一次。</div>
          <XMP>
          <i>class Clock extends React.Component &#123;</i>
            <In>constructor(props) &#123;</In>
            <In><In>super(props);</In></In>
            <In><In>this.state = &#123;</In></In>
            <In><In><In>date: new Date().toLocaleTimeString(),</In></In></In>
            <In><In>};</In></In>
            <In>}</In>
            <In>componentDidMount()&#123;</In>
            <In><In>this.timer=setInterval(()=></In></In>
            <In><In>&#123;this.setState(&#123;</In></In>
            <In><In><In>date: new Date().toLocaleTimeString()</In></In></In>
            <In><In>})</In></In>          
            <In>}</In>
            <In>,1000)}</In>
            <i/>
            <In>componentWillUnmount()&#123;</In>
            <In><In>if(this.timer!=null)&#123;</In></In>
            <In><In><In>clearInterval(this.timer);</In></In></In>
            <In><In>}</In></In>
            <In>}</In>
            <In>render() &#123;</In>
            <In><In>return (</In></In>
              <In><In>&lt;div></In></In>
              <In><In><In>&lt;h2>现在是 &#123;this.state.date}.&lt;/h2></In></In></In>
              <In><In>&lt;/div></In></In>
              <In>);</In>
              <In>}</In>
            <i>}</i>              
          </XMP>
          <Result>
              <Clock1/>
          </Result>
          <div>在上面例子中，大家可以看到 componentDidMount()(组件完成挂载的时候调用)
            和componentWillUnmount()(组件在dom中移除的时候调用)这两个是生命周期钩子，后面会详细讲到</div>
          </Session>
      </Panel>
      )
  }
}
export default State;
