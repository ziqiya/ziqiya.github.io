import React, { Component } from 'react';
import { Route ,Link,Switch } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Brief from './Antd/Brief'
const { SubMenu } = Menu;
const { Content, Sider } = Layout;
  class FramePage extends Component{
    constructor(props){
      super(props);
      this.state={
        page:"Antd简介"
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
                  defaultSelectedKeys={['Antd简介']}
                  defaultOpenKeys={['sub1']}
                  style={{ height: '100%', borderRight: 0 }}
                >
                  <SubMenu key="sub1" title={<span><Icon type="bars" />Antd基础</span>}>
                    <Menu.Item key="Antd简介" onClick={this.handleClick}><Link to={`${match.path}/brief`}>Antd简介</Link></Menu.Item>                    
                  </SubMenu>                 
                </Menu>
              </Sider>
              <Layout style={{ padding: '0 24px 0' }}>
                <Breadcrumb separator=">" style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item><Icon type="home" />Home</Breadcrumb.Item>
                  <Breadcrumb.Item><Icon type="user" />框架</Breadcrumb.Item>
                  <Breadcrumb.Item>{this.state.page}</Breadcrumb.Item>
                </Breadcrumb>
                <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                  <Switch>
                    <Route exact path={`${match.path}`} component={Brief}/>
                    <Route path={`${match.path}/brief`} component={Brief}/>                   
                  </Switch>
                </Content>
              </Layout>
            </Layout>  
        )
    }
  }
export default FramePage;
