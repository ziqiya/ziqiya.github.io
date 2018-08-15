import React, { Component } from 'react';
import $ from 'jquery'
import Img from '../components/Img';
import homebackground from '../images/banner.jpg';
const homeImage = {
	  height:200,
    backgroundSize: '100% 100%', //记得这里100%
    //或者下面这种也行
    backgroundImage: 'url(' + homebackground + ')'
}
  class Banner extends Component{
    move(e){
      const deg=e.clientY/5+e.clientX/5;
      $(".maple").css({
            left: e.clientX-60+'px',
            top: e.clientY-90+'px',
          'transform':'rotate('+deg+'deg)'
        });      
    }
    render(){
      return(
        <div className="banner" style={homeImage} onMouseMove={(event)=>this.move(event)}>
          <div className="maple">
            <Img src="mapleleaf.png" alt="枫叶图标"/>
          </div>
        </div>
	        
        )
    }
  }
export default Banner;
