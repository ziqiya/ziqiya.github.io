import React,{Component} from 'react';
export default class In extends Component{
    render(){
        return(
            <div className="Indent">{this.props.children}</div>
        )
    }
}