import React, { Component } from 'react';
import Panel from '../../../components/Panel';
import Session from '../../../components/Session';
require('echarts-gl');
var echarts = require('echarts');
// 基于准备好的dom，初始化echarts实例
  class EchartEg extends Component{ 
    componentDidMount(){      
      // 绘制图表
      echarts.init(document.getElementById('bar-chart')).setOption({
        title: {
            text: 'ECharts-柱状图'
        },
        tooltip: {},
        xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
      });

      echarts.init(document.getElementById('pie-chart')).setOption({
        title: {
          text: 'ECharts-饼状图'
        },       
        series: {
            name: '访问来源',
            type: 'pie',
            data: [
                {name: 'A', value: 1212},
                {name: 'B', value: 2400},
                {name: 'C', value: 1500}
            ]
        }
    });
    echarts.init(document.getElementById('line-chart')).setOption({
      title: {
        text: 'ECharts-折线'
      },       
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
          type: 'value'
      },
      series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line'
      }]
    });

function generate(n){
    var data=[];
    var z;
    for(var i=0;i<n;i++){
        z=Math.floor(i/30);
        data[i]=[];
        for(var j=0;j<3;j++){
            data[i][j]=(z<15?Math.abs(z):Math.abs(30-z))*(i%30<15?Math.abs(i%30):Math.abs(30-i%30));
            data[i][0]=i%30;
            data[i][1]=z;
            }
        }
        return data;   
    }
function RandomColor(){
    var r,g,b;
    r=255*Math.random();
    g=255*Math.random();
    b=255*Math.random();
    return 'rgb('+r+','+g+','+b+')';
}    
    let seriesData=generate(900);
// 绘制图表。
    echarts.init(document.getElementById('3d-chart')).setOption({
        xAxis3D: {
        type: 'value'
        },
        yAxis3D: {
        type: 'value'
        },
        zAxis3D: {
        type: 'value'
        },
        grid3D: {
            environment: '#000',
            // light: {
            //     main: {
            //         shadow: true,
            //         quality: 'ultra',
            //         intensity: 1.5
            //     }
            // },
            axisPointer: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#000'
                }
            },
            postEffect: {
                enable: true,
                SSAO: {
                    enable: true,
                    radius: 10,
                    intensity: 2
                },
                edge: {
                    enable: true
                }
            },
            temporalSuperSampling: {
                enable: true
            },
            light: {
                main: {
                    intensity: 1.5,
                    shadow: true,
                },
                ambient: {
                    intensity: 0.5
                }     
            },
        },

        series: [{      
            type: 'bar3D',
            data: seriesData,
            shading: 'realistic',
            stack: 'stack',
            barSize: 8,
            bevelSize: 0.3,
            bevelSmoothness: 4,
            realisticMaterial: {
                roughness: 1,
                metalness: 0.4
            },
            itemStyle: {
                normal:{
                    color: RandomColor()
                }
            },
        }]           
    })    
var sin = Math.sin;
var cos = Math.cos;
var exp = Math.exp;
var PI = Math.PI;
var square = function (x) {
    return x*x;
}
var mod2 = function (a, b) {
    var c = a % b;
    return c > 0 ? c : (c + b);
}
var square5 = function (x) {
    return x*x*x*x*x;
}
var theta1 = -(20/9) * PI;
var theta2 = 15 * PI;
function getParametricEquation() {
    return {
        u: {
            min: 0,
            max: 1,
            step: 1 / 24
        },
        v: {
            min: theta1,
            max: theta2,
            step: (theta2 - theta1) / 575
        },
        x: function (x1, theta) {
            //var r=1-sin(theta);
            //var r=3*sin(3*theta)+3.5*cos(10*theta)*cos(8*theta);
            //var r=100*Math.cos( 6*theta );蝴蝶结
            var r=exp(sin(theta))-2*cos(4*theta)+square5(sin((2*theta-PI)/24))//蝴蝶
            // var r=4*(1+cos(3*theta)+3*square(sin(3*theta)))//三叶草
            // var phi = (PI/2)*exp(-theta/(8*PI));
            // var y1 = 1.9565284531299512*square(x1)*square(1.2768869870150188*x1-1)*sin(phi);
            // var X = 1-square(1.25*square(1-mod2((3.6*theta),(2*PI))/PI)-0.25)/2;
            // var r = X*(x1*sin(phi)+y1*cos(phi));
            return r * sin(theta);
        },
        y: function (x1, theta) {
            //var r=1-sin(theta);//笛卡尔爱心
            //var r=200 * Math.sin( 3*theta );
            //var r=100*Math.cos( 6*theta );蝴蝶结
            var r=exp(sin(theta))-2*cos(4*theta)+square5(sin((2*theta-PI)/24))//蝴蝶
            //var r=4*(1+cos(3*theta)+3*square(sin(3*theta)))//三叶草
           // var r=3*sin(3*theta)+3.5*cos(10*theta)*cos(8*theta);//螳螂花朵

            // var phi = (PI/2)*exp(-theta/(8*PI));//圆花朵
            // var y1 = 1.9565284531299512*square(x1)*square(1.2768869870150188*x1-1)*sin(phi);
            // var X = 1-square(1.25*square(1-mod2((3.6*theta),(2*PI))/PI)-0.25)/2;
            // var r = X*(x1*sin(phi)+y1*cos(phi));
            return r * cos(theta);
        },
        z: function (x1, theta) {
             //var r=1-sin(Math.abs(theta));
             //var r=3*sin(3*theta)+3.5*cos(10*theta)*cos(8*theta);
             //var r=4*(1+cos(3*theta)+3*square(sin(3*theta)))//三叶草
             //var r=exp(cos(theta))-2*sin(4*theta)+square5(cos((2*theta-PI)/24))
             //var y1 = x1;
            //var X = 1-square(1.25*square(1-mod2((3.6*theta),(2*PI))/PI)-0.25)/2;
            // var r = X*(x1*sin(phi)+y1*cos(phi));
            
            var phi = (PI/2)*exp(-theta/(8*PI));
            var y1 = 1.9565284531299512*square(x1)*square(1.2768869870150188*x1-1)*sin(phi);
            var X = 1-square(1.25*square(1-mod2((3.6*theta),(2*PI))/PI)-0.25)/2;
            //var r = X*(x1*sin(phi)+y1*cos(phi));
            return X*(x1*cos(phi)-y1*sin(phi));
            //return r*(sin(x1)+cos(x1));
        }
    };
}
    // 绘制图表。
    echarts.init(document.getElementById('3d-butterfly')).setOption({      
        xAxis3D: {
            type: 'value'
        },
        yAxis3D: {
            type: 'value'
        },
        zAxis3D: {
            type: 'value'
        },
        grid3D: {
    
            show: false,
    
            axisPointer: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            postEffect: {
                enable: true,
                SSAO: {
                    enable: false,
                    radius: 10,
                    intensity: 2
                },
                edge: {
                    enable: true,
                }
            },
            temporalSuperSampling: {
                enable: true
            },
            light: {
                main: {
                    intensity: 3,
                    shadow: true,
                }              
            },
           
        },
        series: [{
            type: 'surface',
            parametric: true,
            shading: 'realistic',
            silent: true,
            wireframe: {
                show: false
            },
            
            itemStyle: {
                color: '#96232a'
            },
            parametricEquation: getParametricEquation()
        }]        
})  
function createSeries(dx, dy, color) {
    return {
        
        type: 'surface',
        parametric: true,
        shading: 'realistic',
        silent: true,
        wireframe: {
            show: false
        },
        realisticMaterial: {
            roughness: 0.3,
            metalness: 0.3
        },
        itemStyle: {
            color: color || [2, 1.5, 0.2]
        },
        parametricEquation: getParametricEquation1(1.5*dx,1.5*dy)
    };
}
function createFlowers(n){
    var arr=[];
    var z;
    for(var i=0;i<n;i++){        
        z=Math.floor(i/3);     
        arr[i]=(createSeries(i%3,z,RandomColor()));            
    } 
    return arr;
}
function getParametricEquation1(dx,dy) {
    return {
        u: {
            min: 0,
            max: 1,
            step: 1 / 24
        },
        v: {
            min: theta1,
            max: theta2,
            step: (theta2 - theta1) / 575
        },
        x: function (x1, theta) {
            var phi = (PI/2)*exp(-theta/(8*PI));
            var y1 = 1.9565284531299512*square(x1)*square(1.2768869870150188*x1-1)*sin(phi);
            var X = 1-square(1.25*square(1-mod2((3.6*theta),(2*PI))/PI)-0.25)/2;
            var r = X*(x1*sin(phi)+y1*cos(phi));
            return r * sin(theta)+dx;
        },
        y: function (x1, theta) {
            var phi = (PI/2)*exp(-theta/(8*PI));
            var y1 = 1.9565284531299512*square(x1)*square(1.2768869870150188*x1-1)*sin(phi);
            var X = 1-square(1.25*square(1-mod2((3.6*theta),(2*PI))/PI)-0.25)/2;
            var r = X*(x1*sin(phi)+y1*cos(phi));
            return r * cos(theta)+dy;
        },
        z: function (x1, theta) {
            var phi = (PI/2)*exp(-theta/(8*PI));
            var y1 = 1.9565284531299512*square(x1)*square(1.2768869870150188*x1-1)*sin(phi);
            var X = 1-square(1.25*square(1-mod2((3.6*theta),(2*PI))/PI)-0.25)/2;
            // var r = X*(x1*sin(phi)+y1*cos(phi));
            return X*(x1*cos(phi)-y1*sin(phi));
        }
    };
}
    // 绘制图表。
    echarts.init(document.getElementById('3d-flower')).setOption({      
        xAxis3D: {
            type: 'value'
        },
        yAxis3D: {
            type: 'value'
        },
        zAxis3D: {
            type: 'value'
        },
        grid3D: {
    
            show: false,
    
            axisPointer: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            postEffect: {
                enable: true,
                SSAO: {
                    enable: false,
                    radius: 10,
                    intensity: 2
                },
                edge: {
                    enable: true,
                }
            },
            temporalSuperSampling: {
                enable: true
            },
            light: {
                main: {
                    intensity: 3,
                    shadow: true,
                }              
            },
            viewControl: {
                // projection: 'orthographic'
            }
        },
        series: createFlowers(9)
})    
}  
    render(){   
      return(
        <Panel title="Echarts实例">
          <Session title="柱状图">
          <div id="bar-chart" style={{width:'90%',height:"500px"}}></div>
          </Session>

          <Session title="饼状图">
          <div id="pie-chart" style={{width:'90%',height:"500px"}}></div>
          </Session>

          <Session title="折线图">
          <div id="line-chart" style={{width:'90%',height:"500px"}}></div>
          </Session>

          <Session title="3d柱状图">
          <div id="3d-chart" style={{width:'90%',height:"500px"}}></div>
          </Session>

           <Session title="3d表面图-蝴蝶">
          <div id="3d-butterfly" style={{width:'90%',height:"500px"}}></div>
          </Session>
        
          <Session title="3d表面图-花朵">
          <div id="3d-flower" style={{width:'90%',height:"500px"}}></div>
          </Session>
        </Panel>
        )
    }
  }
export default EchartEg;
