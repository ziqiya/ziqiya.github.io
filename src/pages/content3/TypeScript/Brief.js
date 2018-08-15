import React, { Component } from 'react';
import Panel from '../../../components/Panel';
import Session from '../../../components/Session';
  class TypeBrief extends Component{
    render(){
      return(
        <Panel title="TypeScript简介">
          <Session title="TypeScript简介">
            <dl>
              <dt>JavaScript的超集</dt>
              <dd>TypeScript是JavaScript类型的超集，他可以编译成纯JS</dd>
              <dd>TypeScript可以在任何浏览器，任何计算机，任何操作系统上运行</dd>
            </dl>
          </Session>                  
        </Panel>
        )
    }
  }
export default TypeBrief;
