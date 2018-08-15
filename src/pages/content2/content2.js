import React, { Component } from 'react';
import { Route ,Link,Switch } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import CssBrief from './Css/Brief'
import CssGramb from './Css/CssGramb'
import CssGramh from './Css/CssGramh'
import SassBrief from './Sass/Brief'
import SassGramb from './Sass/SassGramb'
import SassGramh from './Sass/SassGramh'
const { SubMenu } = Menu;
const { Content, Sider } = Layout;
class CssPage extends Component{
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
                  defaultSelectedKeys={['CSS简介']}
                  defaultOpenKeys={['sub1']}
                  style={{ height: '100%', borderRight: 0 }}
                >
                  <SubMenu key="sub1" title={<span><Icon type="bars" />CSS基础</span>}>
                    <Menu.Item key="CSS简介" onClick={this.handleClick}><Link to={`${match.path}/CssBrief`}>CSS简介</Link></Menu.Item>
                    <Menu.Item key="CSS基础语法" onClick={this.handleClick}><Link to={`${match.path}/CssGramb`}>CSS基础语法</Link></Menu.Item>
                    <Menu.Item key="CSS高级语法" onClick={this.handleClick}><Link to={`${match.path}/CssGramh`}>CSS高级语法</Link></Menu.Item>                   
                  </SubMenu>
                  <SubMenu key="sub2" title={<span><Icon type="bars" />Sass</span>}>
                    <Menu.Item key="Sass简介" onClick={this.handleClick}><Link to={`${match.path}/SassBrief`}>Sass简介</Link></Menu.Item>
                    <Menu.Item key="Sass基础语法" onClick={this.handleClick}><Link to={`${match.path}/SassGramb`}>Sass基础语法</Link></Menu.Item>
                    <Menu.Item key="Sass高级语法" onClick={this.handleClick}><Link to={`${match.path}/SassGramh`}>Sass高级语法</Link></Menu.Item>                   
                  </SubMenu>             
                </Menu>
              </Sider>
              <Layout style={{ padding: '0 24px 0' }}>
                <Breadcrumb separator=">" style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item><Icon type="home" />Home</Breadcrumb.Item>
                  <Breadcrumb.Item><Icon type="user" />CSS</Breadcrumb.Item>
                  <Breadcrumb.Item>{this.state.page}</Breadcrumb.Item>
                </Breadcrumb>
                <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                  <Switch>
                    <Route exact path={`${match.path}`} component={CssBrief}/>
                    <Route path={`${match.path}/CssBrief`} component={CssBrief}/>
                    <Route path={`${match.path}/CssGramb`} component={CssGramb}/>
                    <Route path={`${match.path}/CssGramh`} component={CssGramh}/>
                    <Route path={`${match.path}/SassBrief`} component={SassBrief}/>
                    <Route path={`${match.path}/SassGramb`} component={SassGramb}/>
                    <Route path={`${match.path}/SassGramh`} component={SassGramh}/>
                  </Switch>
                </Content>
              </Layout>
            </Layout>  
        )
    }
  }
export default CssPage;
