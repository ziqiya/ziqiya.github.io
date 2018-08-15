import React, { Component } from 'react';
import Panel from '../../../components/Panel';
import Img from '../../../components/Img';
import Session from '../../../components/Session';
  class Brief extends Component{
    render(){
      return(
        <Panel title="Ant Design of React">
          <Session title="Antd简介">
          <Img src="react-pic.svg" alt="react"/>
          <dl>       
            <dt>特性</dt>
            <dd>提炼自企业级中后台产品的交互语言和视觉风格。</dd>
            <dd>开箱即用的高质量 React 组件。</dd>
            <dd>使用 TypeScript 构建，提供完整的类型定义文件。</dd>
            <dd>全链路开发和设计工具体系。</dd>
          </dl>
          </Session>       
          <Session title="支持环境">
            <dl>
              <dt>现代浏览器和 IE9 及以上（需要 polyfills）。</dt>
              <dd>支持服务端渲染。</dd>
              <dd>Electron</dd>
            </dl>
          </Session>
        </Panel>
        )
    }
  }
export default Brief;
