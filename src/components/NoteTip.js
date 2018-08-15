import React,{Component} from 'react';
export default class NoteTip extends Component{
    render(){
        return(           
            <p className="NoteTip">{this.props.title}{this.props.children}</p>
        )
    }
}