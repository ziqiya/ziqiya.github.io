import React, { Component } from 'react';
import Panel from '../../../components/Panel';
import Session from '../../../components/Session';
import Result from '../../../components/Result';
import XMP from '../../../components/XMP';
import NoteTip from '../../../components/NoteTip';
import In from '../../../components/Indent';

class Props extends Component{
  render(){
    return(
      <Panel title="React Props">
        <Session title="React组件属性">
          <div>state 和 props 主要的区别在于 props 是不可变的，而 state 可以根据与用户交互来改变。
            这就是为什么有些容器组件需要定义 state 来更新和修改数据。 而子组件只能通过 props 来传递数据。</div>
          <div>还记得上一章的那个组件吗</div>
          <XMP>
            <i>class NoteTip extends Component &#123;</i>
              <In>render()&#123;</In>
              <In><In>return( </In></In>
                <In><In><In>&lt;p className="NoteTip">&#123;this.props.title}&lt;/p></In></In></In>
              <In><In>)</In></In>  
              <In>}</In>           
            <i>}</i>      
            <i/>
            <i>ReactDOM.render(</i>
              <In>&lt;NoteTip title="Michale"/>,</In>
              <In>document.getElementById('example')</In>
            <i>);</i>        
          </XMP>
          <div>这个例子里面的&#123;this.prop.title}就代表了：从父组件传递过来的属性title。</div>
          <Result>
            <NoteTip title="Michale"/>
          </Result>             
        </Session>        
        <Session title="默认 Props">
          <div>你可以通过组件类的 defaultProps 属性为 props 设置默认值，实例如下：</div>         
          <XMP>
            <i>class NoteTip extends React.Component &#123;</i>
              <In>render()&#123;</In>
              <In><In>return( </In></In>
                <In><In><In>&lt;p className="NoteTip">&#123;this.props.title}&lt;/p></In></In></In>
              <In><In>)</In></In>  
              <In>}</In>           
            <i>}</i>    
            <i/>
            <i>NoteTip.defaultProps = &#123;</i>
              <In>title: 'Michale'</In>
            <i>};</i>
            <i/>
            <i>ReactDOM.render(</i>
              <In>&lt;NoteTip/>,</In>
              <In>document.getElementById('example')</In>
            <i>);</i>
          </XMP>
          <div>在这个实例中，因为定义了defaultProps所以默认值为'Michale'</div> 
          <Result>
            <NoteTip title="Michale"/>
          </Result>        
        </Session>
        <Session title="父子传参">
          <NoteTip>
            需要注意的一点是，为了保持可读性，一般把子组件里参数的名字设成跟父组件一样。
          </NoteTip> 
          <div>通过父组件给子组件传参数，实例更改如下：</div>         
          <XMP>
            <i>class Name extends React.Component &#123;</i>
              <In>render()&#123;</In>
                <In><In>return( </In></In>
                  <In><In><In>&lt;p className="NoteTip">&#123;this.props.title}&lt;/p></In></In></In>
                <In><In>)</In></In>  
              <In>}</In>           
            <i>}</i>    
            <i/>
            <i>class NoteTip extends React.Component &#123;</i>
              <In>render()&#123;</In>
              <In><In>return( </In></In>
                <In><In><In>&lt;Name title= &#123;this.props.title}/></In></In></In>
              <In><In>)</In></In>  
              <In>}</In>           
            <i>}</i>           
            <i/>
            <i>ReactDOM.render(</i>
              <In>&lt;NoteTip title='Michale'/>,</In>
              <In>document.getElementById('example')</In>
            <i>);</i>
          </XMP>
          <Result>
            <NoteTip title="Michale"/>
          </Result> 
          <NoteTip>
            如果想把父组件的属性全部传给子组件的话，可以直接用this.props把全部的属性传给子组件
          </NoteTip>
        </Session>
      </Panel>
      )
  }
}
export default Props;
