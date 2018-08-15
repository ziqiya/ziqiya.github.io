import React, { Component } from 'react';
import Panel from '../../../components/Panel';
import Session from '../../../components/Session';
import XMP from '../../../components/XMP';
import In from '../../../components/Indent';
  class TypeBase extends Component{
    render(){
      return(
        <Panel title="TypeScript基础语法">
          <Session title="开始TypeScript">
            <dl>
              <dt>构建你的第一个TypeScript文件</dt>
              <dt>在编辑器，将下面的代码输入到greeter.ts文件里：</dt>    
            </dl>
            <XMP>
              <i>function greeter(person) &#123;</i>
                <In>return "Hello, " + person;</In>
              <i>}</i>
              <i/>
              <i>let user = "Jane User";</i>
              <i/>
              <i>document.body.innerHTML = greeter(user);</i>
            </XMP>
          </Session>
          <Session title="编译代码">
            <dl>
              <dt>我们使用了.ts扩展名，但是这段代码仅仅是JavaScript而已。 你可以直接从现有的JavaScript应用里复制/粘贴这段代码。</dt>
              <dt>在命令行上，运行TypeScript编译器：</dt>    
            </dl>
            <XMP>
              <i>tsc greeter.ts</i>
            </XMP>
            <div>输出结果为一个greeter.js文件，它包含了和输入文件中相同的JavsScript代码。</div> 
            <div>一切准备就绪，我们可以运行这个使用TypeScript写的JavaScript应用了！</div>
            <div>接下来让我们看看TypeScript工具带来的高级功能。 给 person函数的参数添加: string类型注解，如下：</div>
            <XMP>
              <i>function greeter(person: string) &#123;</i>
                <In>return "Hello, " + person;</In>
              <i>}</i>
              <i/>
              <i>let user = "Jane User";</i>
              <i>document.body.innerHTML = greeter(user);</i>
            </XMP>
          </Session>     
          <Session title="类型注解">
            <dl>
              <dt>TypeScript里的类型注解是一种轻量级的为函数或变量添加约束的方式。</dt>
              <dt>在这个例子里，我们希望 greeter函数接收一个字符串参数。 然后尝试把 greeter的调用改成传入一个数组：</dt>    
            </dl>
            <XMP>
              <i>function greeter(person: string) &#123;</i>
                  <In>return "Hello, " + person;</In>
                  <i>}</i>
              <i/>      
              <i>let user = [0, 1, 2];</i>
              <i/>
              <i>document.body.innerHTML = greeter(user);</i>
            </XMP>
            <div>重新编译，你会看到产生了一个错误。</div> 
            <XMP>
              <i>greeter.ts(7,26): error TS2345: Argument of type 'number[]' is not assignable to parameter of type 'string'.</i>
            </XMP>
            <div>类似地，尝试删除greeter调用的所有参数。 TypeScript会告诉你使用了非期望个数的参数调用了这个函数。</div>
            <div>在这两种情况中，TypeScript提供了静态的代码分析，它可以分析代码结构和提供的类型注解。</div>
            <br/>
            <div>要注意的是尽管有错误，greeter.js文件还是被创建了。 </div>
            <div>就算你的代码里有错误，你仍然可以使用TypeScript。但在这种情况下，TypeScript会警告你代码可能不会按预期执行。</div>     
          </Session>   

          <Session title="接口">
            <div>让我们开发这个示例应用。这里我们使用接口来描述一个拥有firstName和lastName字段的对象。 在TypeScript里，只在两个类型内部的结构兼容那么这两个类型就是兼容的。 
              这就允许我们在实现接口时候只要保证包含了接口要求的结构就可以，而不必明确地使用 implements语句。</div>             
            <XMP>
            <i>interface Person &#123;</i>
                <In><div>firstName: string;</div></In>
                <In>lastName: string;</In>
            <i>}</i>
            <i/>
            <i>function greeter(person: Person) &#123;</i>
                <In>return "Hello, " + person.firstName + " " + person.lastName;</In>
            <i>}</i>
            <i/>
            <i>let user = &#123; firstName: "Jane", lastName: "User" };</i>
            <i/>
            <i>document.body.innerHTML = greeter(user);</i>
            </XMP>
            <div>重新编译，你会看到产生了一个错误。</div> 
          </Session>       
        </Panel>
        )
    }
  }
export default TypeBase;
