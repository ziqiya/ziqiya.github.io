import React,{Component} from 'react';
export default class Panel extends Component{
    render(){
        return(
            <div className="content">
                {this.props.title?<div className="head-title">{this.props.title}</div>:''}
                <div className="content-container">
                    {this.props.children}
                </div>
            </div>
        )
    }
}