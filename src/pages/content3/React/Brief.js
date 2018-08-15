import React, { Component } from 'react';
import Panel from '../../../components/Panel';
import Session from '../../../components/Session';
import Img from '../../../components/Img';
  class JsBrief extends Component{
    render(){
      return(
        <Panel title="React简介">
          <Session title="React简介">
            <Img src="react-photo.jpg" alt="react"/>
            <dl>
              <dd>React 是一个用于构建用户界面的 JAVASCRIPT 库，也是当前最热门的前端框架。</dd> 
              <dd>React 起源于 Facebook 的内部项目，用来架设 Instagram 的网站。</dd>
              <dd>React 拥有较高的性能，代码逻辑非常简单，越来越多的人已开始关注和使用它。</dd>  
              <dd>在React的官方博客中明确阐述了React不是一个MVC框架，而是一个用于构建组件化UI的库，是一个前端界面开发工具。</dd>
              <dd>React主要用于构建UI，很多人认为React是MVC中的V(视图)，但随着发展React已经从最早的UI引擎变成了一整套前后端通吃的 Web App 解决方案.
                衍生的 React Native 项目，目标更是宏伟，希望用写 Web App 的方式去写 Native App。</dd>                      
            </dl>
          </Session>
          <Session title="React 特点">
            <dl>
              <dd><b>声明式设计</b> − React采用声明式，可以轻松描述应用。</dd>
              <dd><b>高效</b> − React通过对DOM的模拟，最大限度地减少与DOM的交互。</dd>
              <dd><b>灵活</b> − React可以与已知的库或框架很好地配合。</dd>
              <dd><b>JSX</b> − JSX 是 JavaScript 语法的扩展，跟HTML很像。</dd>  
              <dd><b>组件</b> − 通过 React 构建组件，使得代码更加容易得到复用，能够很好的应用在大项目的开发中。</dd>  
              <dd><b>单向响应的数据流</b> − 在React中，数据的流向是单向的——从父节点传递到子节点，因为组件是简单而且易于把握的，
            他们只需从父节点获取props渲染即可，如果顶层组件的某个prop改变了，React会递归的向下便利整棵组件树，重新渲染所有使用这个属性的组件。</dd>         
            </dl>
          </Session>
        </Panel>
        )
    }
  }
export default JsBrief;
