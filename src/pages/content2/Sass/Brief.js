import React, { Component } from 'react';
import Panel from '../../../components/Panel';
import Session from '../../../components/Session';
import NoteTip from '../../../components/NoteTip';
  class SassBrief extends Component{
    render(){
      return(
        <Panel title="Sass简介">
          <Session title="Sass是什么">
          <div>Sass (Syntactically Awesome Style Sheets)是一个CSS预处理器。Sass与CSS关系就像CoffeeScript与Javascript关系。
          它通过添加标记到样式表中，帮助我们更轻松惬意的书写CSS。</div>
          </Session>

          <Session title="怎么使Sass工作">          
            <dl>
              <dt>实际上有多种编译Sass的方法：</dt>
              <dd>Ruby Sass二进制源码。通过gem install sass命令安装，然后就可以使用running sassc myfile.scss myfile.css来编译了。</dd>
              <dd>类似Hammer，CodeKit和Compass的GUI软件。</dd>
              <dd>一个使用C语言编写且速度极快的Sass编译器。也可以通过NPM的node-sass (npm install node-sass)安装libsass。</dd>
            </dl>
          <NoteTip title="必须牢记libsass的特性并非完全与Ruby Sass相同"/>
          </Session>

          <Session title=".sass vs .scss?">          
            <dl>
              <dd>Sass面世之初，其核心语法是明显不同于CSS的。它使用缩进代替了括号，没有分号并且操作符很短。简而言之，像极了Haml。</dd>
              <dd>有些人非常不喜欢这种语法格式，所以在Sass 3.0中开发者将核心语法改成了.scss。SCSS是CSS的一个超集，在与 CSS写法完全相同的基础上，还同时兼具了Sass的所有特性。</dd>
              <dd>也就是说，如果你喜欢还可以使用原生语法。我个人使用.scss，并且在本文中也是使用.scss语法。</dd>
            </dl>
          </Session>
            
          <Session title="为什么使用Sass?">          
            <div>问得不错。Sass让编写可维护的CSSS更加简易方便。可以用更少的代码，做更多的事，用更少的时间，具有更强的可读性。</div>
          </Session>
        </Panel>
        )
    }
  }
export default SassBrief;
