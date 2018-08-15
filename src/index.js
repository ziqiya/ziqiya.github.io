import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { LocaleProvider } from 'antd';
import zh_CN from '../node_modules/antd/lib/locale-provider/zh_CN';
import PrimaryLayout from './layout/index';
import './index.scss';

ReactDOM.render(
    <LocaleProvider locale={zh_CN}>
        <Router> 
            <Switch>    
                <Route path="/myblog" component={PrimaryLayout} />
                <Redirect to="/myblog/html"/>
            </Switch>
        </Router>
    </LocaleProvider>
    ,document.getElementById('root'));
