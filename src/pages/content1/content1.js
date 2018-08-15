import React, { Component } from 'react';
import { Route ,Link,Switch } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Brief from './Html/Brief'
import HtmlEle from './Html/HtmlEle'
import HtmlStyle from './Html/HtmlStyle'
import Esse from './Html/Esse'
const { SubMenu } = Menu;
const { Content, Sider } = Layout;
  class HtmlPage extends Component{
    constructor(props){
      super(props);
      this.state={
        page:"brief"
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
                  defaultSelectedKeys={['HTML简介']}
                  defaultOpenKeys={['sub1']}
                  style={{ height: '100%', borderRight: 0 }}
                >
                  <SubMenu key="sub1" title={<span><Icon type="bars" />HTML基础</span>}>
                    <Menu.Item key="HTML简介" onClick={this.handleClick}><Link to={`${match.path}/brief`}>HTML简介</Link></Menu.Item>
                    <Menu.Item key="HTML元素" onClick={this.handleClick}><Link to={`${match.path}/HtmlEle`}>HTML元素</Link></Menu.Item>
                    <Menu.Item key="HTML样式" onClick={this.handleClick}><Link to={`${match.path}/HtmlStyle`}>HTML样式</Link></Menu.Item>
                    <Menu.Item key="HTML字符实体" onClick={this.handleClick}><Link to={`${match.path}/Esse`}>HTML字符实体</Link></Menu.Item>
                  </SubMenu>                 
                </Menu>
              </Sider>
              <Layout style={{ padding: '0 24px 0' }}>
                <Breadcrumb separator=">" style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item><Icon type="home" />Home</Breadcrumb.Item>
                  <Breadcrumb.Item><Icon type="user" />HTML</Breadcrumb.Item>
                  <Breadcrumb.Item>{this.state.page}</Breadcrumb.Item>
                </Breadcrumb>
                <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                  <Switch>
                    <Route exact path={`${match.path}`} component={Brief}/>
                    <Route path={`${match.path}/brief`} component={Brief}/>
                    <Route path={`${match.path}/HtmlEle`} component={HtmlEle}/>
                    <Route path={`${match.path}/HtmlStyle`} component={HtmlStyle}/>
                    <Route path={`${match.path}/Esse`} component={Esse}/>
                  </Switch>
                </Content>
              </Layout>
            </Layout>  
        )
    }
  }
export default HtmlPage;
