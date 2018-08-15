import React, { Component } from 'react';
import { Steps } from 'antd';
import Panel from '../../../components/Panel';
import Session from '../../../components/Session';
import NoteTip from '../../../components/NoteTip';
import XMP from '../../../components/XMP';
import Result from '../../../components/Result';
import In from '../../../components/Indent';
const Step = Steps.Step;
class Hello extends Component {
 
  constructor(props) {
      super(props);
      this.state = {opacity: 1.0};
  }
 
  componentDidMount() {
    this.timer = setInterval(function () {
      var opacity = this.state.opacity;
      opacity -= .05;
      if (opacity < 0.1) {
        opacity = 1.0;
      }
      this.setState({
        opacity: opacity
      });
    }.bind(this), 100);
  }
 
  render () {
    return (
      <div style={{opacity: this.state.opacity}}>
        Hello {this.props.name}
      </div>
    );
  }
}
 
class LifeCycle extends Component{
  render(){
    return(
      <Panel title="React 组件生命周期">
        <Session title="生命周期">
          <div>还记得前面提到的生命周期吗,这章节就来具体讲生命周期</div>
          <dl>
            <dt>生命周期有三个状态:</dt>
            <dd><b>Mounting</b>：已插入真实 DOM</dd>
            <dd><b>Updating</b>：正在被重新渲染</dd>
            <dd><b>Unmounting</b>：已移出真实 DOM</dd>
          </dl>
          <dl>
            <dt>生命周期的方法有：</dt>
            <dd><b>componentWillMount</b> 在渲染前调用,在客户端也在服务端。</dd>
            <dd><b>componentDidMount</b> : 在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。 如果你想和其他JavaScript框架一起使用，
              可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操作(防止异步操作阻塞UI)。</dd>
            <dd><b>componentWillReceiveProps</b>: 在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化render时不会被调用。</dd>
            <dd><b>shouldComponentUpdate</b>: 返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。 
              可以在你确认不需要更新组件时使用。</dd>
            <dd><b>componentWillUpdate</b>: 在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。</dd>
            <dd><b>componentDidUpdate</b>: 在组件完成更新后立即调用。在初始化时不会被调用。</dd>
            <dd><b>componentWillUnmount</b>: 在组件从 DOM 中移除的时候立刻被调用。</dd>
          </dl>
          <div className="step-wrap">
            <Steps size="small" current={2}>
              <Step title="componentWillMount" description="组件挂载之前执行，只执行一次" />
              <Step title="componentDidMount" description="组件渲染完成，只执行一次" />
              <Step title="" description="" />
              <Step title="状态(State)改变" description="state改变" />
              <Step title="shouldComponentUpdate" description="判断组件是否应该重新渲染，默认是true" />
              <Step title="componentWillUpdate" description="组件将要重新渲染" />
              <Step title="componentDidUpdate" description="组件重新渲染完成" />
            </Steps>
            <Steps size="small" direction="vertical" current={2}>
              <Step title="componentWillReceiveProps" description="组件接受新的props时调用" />
              <Step title="属性(Props)改变" description="属性改变" />
              <Step title="运行中" description="" />
              <Step title="卸载(Unmount)" description="卸载组件" />
              <Step title="componentWillUnmount" description="卸载组件之前执行" />
              <Step title="结束" description="结束" />
            </Steps>
          </div>
          <div>下面是一个使用componentDidMount的实例:</div>
          <XMP>
          <i>class Hello extends React.Component &#123;</i>
            <In>constructor(props) &#123;</In>
                <In><In>super(props);</In></In>
                <In><In>this.state = &#123;opacity: 1.0};</In></In>
            <In>}</In>

              <In>componentDidMount() &#123;</In>
                <In><In>this.timer = setInterval(function () &#123;</In></In>
                <In><In><In>var opacity = this.state.opacity;</In></In></In>
                <In><In><In>opacity -= .05;</In></In></In>
                <In><In><In>if (opacity &lt; 0.1) &#123;</In></In></In>
                    <In><In><In><In>opacity = 1.0;</In></In></In></In>
                  <In><In><In>}</In></In></In>
                  <In><In><In>this.setState(&#123;</In></In></In>
                  <In><In><In><In>opacity: opacity</In></In></In></In>
                  <In><In><In>});</In></In></In>
                  <In><In>}.bind(this), 100);</In></In>
                <In>}</In>

              <In>render () &#123;</In>
                <In><In>return (</In></In>
                  <In><In><In>&lt;div style=&#123;&#123;opacity: this.state.opacity}}></In></In></In>
                  <In><In><In><In>Hello &#123;this.props.name}</In></In></In></In>
                  <In><In><In>&lt;/div></In></In></In>
                  <In><In>);</In></In>
                  <In>}</In>
                  <In>}</In>

              <In>ReactDOM.render(</In>
                <In><In>&lt;Hello name="world"/>,</In></In>
                <In><In>document.body</In></In>
              <In>);</In>
            </XMP>
            <Result>
                <Hello name="world"/>
            </Result>
            <div>Hello 组件加载以后，通过 componentDidMount 方法设置一个定时器，每隔100毫秒重新设置组件的透明度，并重新渲染：</div>
            <NoteTip>每一次setState以后，react就会判断shouldComponentUpdate的状态，如果为true就开始重新渲染。就像上章的Clock定时器一样</NoteTip>
          </Session>
      </Panel>
      )
  }
}
export default LifeCycle;
