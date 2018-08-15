import React, { Component } from 'react';
import { Route ,Link,Switch } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import JsBrief from './Js/Brief';
import ReactBrief from './React/Brief';
import VirtualDom from './React/VirtualDom';
import JSX from './React/JSX';
import Components from './React/Components';
import Props from './React/Props';
import State from './React/State';
import LifeCycle from './React/LifeCycle';
import Events from './React/Events';
import BiBinding from './React/BiBinding';
import EchartBrief from './Echart/Brief';
import EchartEg from './Echart/EchartEg';
import TypeBrief from './TypeScript/Brief';
import TypeBase from './TypeScript/TypeBase';
const { SubMenu } = Menu;
const { Content, Sider } = Layout;
class JsPage extends Component{
    constructor(props){
      super(props);
      this.state={
        page:"JS简介"
      }
    }
    handleClick = e =>{   
      this.setState({
        page:e.key
      });
    }
    render(){
      const { match }=this.props;
      return( 
           <Layout>
              <Sider 
                collapsible 
                collapsedWidth={0}
                width={200} 
                theme="light">
                <Menu
                  mode="inline"
                  defaultSelectedKeys={['JS简介']}
                  defaultOpenKeys={['sub1']}
                  style={{ height: '100%', borderRight: 0 }}
                >
                  <SubMenu key="sub1" title={<span><Icon type="bars" />JS简介</span>}>
                    <Menu.Item key="JS简介" onClick={this.handleClick}><Link to={`${match.path}/JsBrief`}>JS简介</Link></Menu.Item>                                     
                  </SubMenu>
                  <SubMenu key="sub2" title={<span><Icon type="bars" />React</span>}>
                    <Menu.Item key="React简介" onClick={this.handleClick}><Link to={`${match.path}/ReactBrief`}>React简介</Link></Menu.Item>
                    <Menu.Item key="虚拟DOM" onClick={this.handleClick}><Link to={`${match.path}/VirtualDom`}>虚拟DOM</Link></Menu.Item>
                    <Menu.Item key="JSX" onClick={this.handleClick}><Link to={`${match.path}/JSX`}>JSX</Link></Menu.Item>
                    <Menu.Item key="Components" onClick={this.handleClick}><Link to={`${match.path}/Components`}>Components</Link></Menu.Item>
                    <Menu.Item key="Props" onClick={this.handleClick}><Link to={`${match.path}/Props`}>Props</Link></Menu.Item> 
                    <Menu.Item key="State" onClick={this.handleClick}><Link to={`${match.path}/State`}>State</Link></Menu.Item>
                    <Menu.Item key="生命周期" onClick={this.handleClick}><Link to={`${match.path}/LifeCycle`}>生命周期</Link></Menu.Item>  
                    <Menu.Item key="事件处理" onClick={this.handleClick}><Link to={`${match.path}/Events`}>事件处理</Link></Menu.Item>  
                    <Menu.Item key="双向绑定" onClick={this.handleClick}><Link to={`${match.path}/BiBinding`}>双向绑定</Link></Menu.Item>                               
                  </SubMenu>
                  <SubMenu key="sub3" title={<span><Icon type="bars" />Echart</span>}>
                    <Menu.Item key="Echart简介" onClick={this.handleClick}><Link to={`${match.path}/EchartBrief`}>Echart简介</Link></Menu.Item>
                    <Menu.Item key="Echart实例" onClick={this.handleClick}><Link to={`${match.path}/EchartEg`}>Echart实例</Link></Menu.Item>                  
                  </SubMenu>  
                  <SubMenu key="sub4" title={<span><Icon type="bars" />TypeScript</span>}>
                    <Menu.Item key="TypeScript简介" onClick={this.handleClick}><Link to={`${match.path}/TypeBrief`}>TypeScript简介</Link></Menu.Item>
                    <Menu.Item key="TypeScript基础" onClick={this.handleClick}><Link to={`${match.path}/TypeBase`}>TypeScript基础</Link></Menu.Item>               
                  </SubMenu>           
                </Menu>
              </Sider>
              <Layout style={{ padding: '0 24px 0' }}>
                <Breadcrumb separator=">" style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item><Icon type="home" />Home</Breadcrumb.Item>
                  <Breadcrumb.Item><Icon type="user" />JS</Breadcrumb.Item>
                  <Breadcrumb.Item>{this.state.page}</Breadcrumb.Item>
                </Breadcrumb>
                <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                  <Switch>
                    <Route exact path={`${match.path}`} component={JsBrief}/>
                    <Route path={`${match.path}/JsBrief`} component={JsBrief}/>
                    <Route path={`${match.path}/ReactBrief`} component={ReactBrief}/>
                    <Route path={`${match.path}/VirtualDom`} component={VirtualDom}/>
                    <Route path={`${match.path}/JSX`} component={JSX}/>
                    <Route path={`${match.path}/Components`} component={Components}/>
                    <Route path={`${match.path}/Props`} component={Props}/>
                    <Route path={`${match.path}/State`} component={State}/>
                    <Route path={`${match.path}/LifeCycle`} component={LifeCycle}/>
                    <Route path={`${match.path}/Events`} component={Events}/>
                    <Route path={`${match.path}/BiBinding`} component={BiBinding}/>
                    <Route path={`${match.path}/EchartBrief`} component={EchartBrief}/>
                    <Route path={`${match.path}/EchartEg`} component={EchartEg}/>
                    <Route path={`${match.path}/TypeBrief`} component={TypeBrief}/>
                    <Route path={`${match.path}/TypeBase`} component={TypeBase}/>
                  </Switch>
                </Content>
              </Layout>
            </Layout>  
        )
    }
  }
export default JsPage;
