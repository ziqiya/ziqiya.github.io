import React,{Component} from 'react';
export default class XMP extends Component{
    //XMP规则：
    // 1.缩进符用In包裹，
    // 2.如果遇到没有html标签包裹的文本，如css，就用i包裹
    // 3.如果已经用了In就无需再用i包裹
    // 4.前大括号用&#123;代替
    // 5.在二级及以上<In>里面用html标签仍会被编译
    // 6.请使用<i></i>或者<i/>作为换行符
    render(){
        let arr=[];
        arr=!this.props.children.length?[this.props.children]:this.props.children;
        return(
            <div className="CodeSession">     
            {arr.map((Item,i)=>{
                if(typeof(Item.type)==='function'){           
                    if(typeof(Item.props.children.type)==='undefined'){
                        return(
                            <div className="Indent" key={i}>{Item.props.children}</div>                           
                        ) 
                    }
                    else if(typeof(Item.props.children.type)==='function'){
                        return(                           
                             <div className="Indent" key={i}><div className="Indent">{Item.props.children.props.children}</div></div>
                        )
                    }
                    else{
                        return(                         
                            <div className="Indent" key={i}>{'<'+Item.props.children.type+'>'+Item.props.children.props.children+'</'+Item.props.children.type+'>'}</div>
                        )   
                    }
                }
                else if(Item.type==='i'){
                    if(!Item.props.children){
                        return(
                            <div key={i}>
                                <br/>
                            </div>
                        )   
                    }
                    else{
                        return(
                            <div key={i}>
                                {Item.props.children}
                            </div>
                        )
                    }    
                }
                else{
                    return(
                        <div key={i}>
                            {'<'+Item.type+'>'+Item.props.children+'</'+Item.type+'>'}                    
                        </div>
                    )    
                }
            }
          )}   
          </div>    
       )
    }
}