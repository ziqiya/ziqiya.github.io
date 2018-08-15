import React, { Component } from 'react';
import Panel from '../../../components/Panel';
import Session from '../../../components/Session';
import NoteTip from '../../../components/NoteTip';
import Img from '../../../components/Img';
import XMP from '../../../components/XMP';
import Result from '../../../components/Result';
import In from '../../../components/Indent';

class BiInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }

    handleInput = _event => {
        let elem = _event.target
        let value = elem.value
        this.setState({ value : value})
    }

    render() {
        return (
            <div>
                <input onInput={this.handleInput}/>
                <p>我是Input内容:{this.state.value}</p>
            </div>
        )
    }
}
  class VirtualDom extends Component{
    render(){
      return(
        <Panel title="双向数据绑定">
          <Session title="定义">            
            <dl>
              <dt>为了了解双向绑定，首先我们要知道单向绑定，单向绑定是指就是把Model绑定到View，当我们用JavaScript代码更新Model时，View就会自动更新。</dt>
              <dd>双向绑定就是同样的，当用户更新View的时候，用js实现更新Model的效果</dd> 
              <dd>填写表单就是一个最直接的例子。当用户填写表单时，View的状态就被更新了，如果此时MVVM框架可以自动更新Model的状态，那就相当于我们把Model和View做了双向绑定：</dd>                     
            </dl>          
          </Session>
          <Session title="实现方法">
            <Img src="BiBinding.png" alt="双向绑定"/>
            <dl>
              <dt>双向绑定原理如上图，在vue里面是用v-model实现的。那么在react里面怎么实现双向绑定呢？</dt>
              <dd><b>第一步</b>：在class的state中设定绑定元素value的初值</dd>
              <dd><b>第二步</b>：在Input的事件中调用handle事件</dd>
              <dd><b>第三步</b>：在handle事件中先获取input的value值，再调用setState更新state</dd>
              <dd><b>第四步</b>：react识别到state的改变，再次自动渲染dom，显示出更新后的dom</dd>
            </dl>
            <div>下面是一个双向绑定Input的实例</div>
            <XMP>
            <i>class BiInput extends Component &#132;</i>
              <In>constructor(props) &#123;</In>
                <In><In>super(props)</In></In>
                  <In><In>this.state = &#123;</In></In>
                      <In><In><In>value: ''</In></In></In>
                  <In><In>}</In></In>
              <In>}</In>
            <i/>
            <In>handleInput = _event => &#123;</In>
                  <In><In>let elem = _event.target</In></In>
                  <In><In>let value = elem.value</In></In>
                  <In><In>this.setState(&#123;       </In></In>           
                    <In><In><In>value : value</In></In></In>
                  <In><In>})</In></In>
              <In>}</In>
            <i/>
            <In>render() &#123;</In>
                  <In><In>return (</In></In>
                      <In><In><In>&lt;div></In></In></In>
                      <In><In><In><In>&lt;input onInput=&#123;this.handleInput}/></In></In></In></In>
                      <In><In><In><In><p>我是Input内容:&#123;this.state.value}</p></In></In></In></In>
                      <In><In><In>&lt;/div></In></In></In>
                  <In><In>)</In></In>
              <In>}</In>
            <i>}</i>
            </XMP>
            <Result>
              <BiInput/>
            </Result>
            <NoteTip>
              用event.target来代替event才能获得属性中的value值
            </NoteTip>
            <div>双向绑定最大的好处是我们不再需要用jQuery去查询表单的状态，而是直接获得了state中的value值。</div>
            <div>当表单提交的时候只要调用onSubmit事件进行双向绑定就不需要再用jquery查询表单数据了</div>
          </Session>
        </Panel>
        )
    }
  }
export default VirtualDom;
