import React,{Component} from 'react';
export default class Result extends Component{
    render(){
        return(
            <div className="resultArea">
                <div className="resultWord">运行结果如下:</div>
                {this.props.children}
            </div>
        )
    }
}