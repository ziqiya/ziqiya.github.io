import React, { Component } from 'react';
import Panel from '../../../components/Panel';
import Session from '../../../components/Session';
  class Brief extends Component{
    render(){
      return(
        <Panel title="HTML简介">
          <Session title="HTML简介">
          <dl>
            <dt>HTML 是用来描述网页的一种语言。</dt>
            <dd>HTML 指的是超文本标记语言 (Hyper Text Markup Language)</dd>
            <dd>HTML 不是一种编程语言，而是一种标记语言 (markup language)</dd>
            <dd>标记语言是一套标记标签 (markup tag)</dd>
            <dd>HTML 使用标记标签来描述网页</dd>
          </dl>
          </Session>
          <Session title="HTML标签">
            <dl>
              <dt>HTML 标记标签通常被称为 HTML 标签 (HTML tag)。</dt>
              <dd>HTML 指的是超文本标记语言 (Hyper Text Markup Language)</dd>
              <dd>HTML 不是一种编程语言，而是一种标记语言 (markup language)</dd>
              <dd>标记语言是一套标记标签 (markup tag)</dd>
              <dd>HTML 使用标记标签来描述网页</dd>
            </dl>
          </Session>
        </Panel>
        )
    }
  }
export default Brief;
