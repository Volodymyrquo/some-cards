import React from 'react';
import 'antd/dist/antd.css';
import './App.scss';
import { Layout, Menu, Breadcrumb } from 'antd';
import { LaptopOutlined } from '@ant-design/icons';
import { Link, Route, Switch } from 'react-router-dom';
import {
  AuthPage,
  Cards,
  CardsTypes,
  Contacts,
  Currencies,
  Dashboard,
  Home,
  Requisites,
  Tariffs,
  Users,
} from './components';
import { ForCards, ForUsers, Types } from './components/Operations';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const App = () => {
  return (
    <Layout>
      <Header className='header'>
        <div className='logo' />
        <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['2']}>
          <Menu.Item key='1'>nav 1</Menu.Item>
          <Menu.Item key='2'>nav 2</Menu.Item>
          <Menu.Item key='3'>nav 3</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} className='site-layout-background'>
          <Menu
            mode='inline'
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}>
            <Menu.Item key='1'>
              <Link to='/dashboard'>Dashboard</Link>
            </Menu.Item>
            <Menu.Item key='2'>
              <Link to='/cardstypes'>Cards Types</Link>
            </Menu.Item>
            <Menu.Item key='3'>
              <Link to='/cards'>Cards</Link>
            </Menu.Item>
            <Menu.Item key='4'>
              <Link to='/contacts'>Contacts</Link>
            </Menu.Item>
            <Menu.Item key='5'>
              <Link to='/currencies'>Currencies</Link>
            </Menu.Item>
            <SubMenu key='sub2' icon={<LaptopOutlined />} title='Operations'>
              <Menu.Item key='6'>
                <Link to='/types'>Types</Link>
              </Menu.Item>
              <Menu.Item key='7'>
                <Link to='/forusers'>For Users</Link>
              </Menu.Item>
              <Menu.Item key='8'>
                <Link to='/forcards'>For Cards</Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key='9'>
              <Link to='/requisites'>Requisites</Link>
            </Menu.Item>
            <Menu.Item key='10'>
              <Link to='/tariffs'>Tariffs</Link>
            </Menu.Item>
            <Menu.Item key='11'>
              <Link to='/users'>Users</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className='site-layout-background'
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/cards' component={Cards} />
              <Route path='/cardstypes' component={CardsTypes} />
              <Route path='/contacts' component={Contacts} />
              <Route path='/currencies' component={Currencies} />
              <Route path='/dashboard' component={Dashboard} />
              <Route path='/dashboard' component={Dashboard} />
              <Route path='/requisites' component={Requisites} />
              <Route path='/tariffs' component={Tariffs} />
              <Route path='/users' component={Users} />
              <Route path='/types' component={Types} />
              <Route path='/forusers' component={ForUsers} />
              <Route path='/forcards' component={ForCards} />

              <Route path='/login' component={AuthPage} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;
