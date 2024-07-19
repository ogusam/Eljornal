import React, { useEffect, useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  
  UserOutlined,
  
} from '@ant-design/icons';
import { CiMenuBurger } from "react-icons/ci";
import { IoReceiptOutline } from "react-icons/io5";
import { MdTerminal } from "react-icons/md";
import { CiLogout } from "react-icons/ci";




import { Outlet } from 'react-router-dom';
import { Button, Layout, Menu, theme } from 'antd';
import { useNavigate } from 'react-router-dom';


const { Header, Sider, Content } = Layout;

const Mainlayout= () => {
  const navigate = useNavigate();
  const[displayemail,displayemailupdate]=useState('')
  

  useEffect(()=>{
    let email=sessionStorage.getItem('email');
    

    if(email==='' || email ===null){
    navigate('./LoginForm')
    }else{
      displayemailupdate(email)
      
    }
     

  },[]);
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  //const navigate = useNavigate();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className='logo'>
          <h3 className='text-white text-center py-3'>
          <span className='lg-logo'>Eljournal 2</span>
          <span className='sm-logo'>El2</span>
          </h3>
        </div>
        
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['']}
          onClick={({key})=>{
            if(key === 'signout'){

            }else{
                navigate(key);
            }
          }}
          items={[
            {
              key: '',
              icon: <CiMenuBurger />
              ,
              label: 'Dashboard',
            },
            {
                key: 'user',
                icon: <UserOutlined />,
                label: 'User Management',
                children:[
                    {
                        key: 'add-user',
                        icon: '',
                        label: "Add User",
                    },
                    {
                        key: 'view-users',
                        icon: '',
                        label: 'View Users'
                    }

                ]
              },
              {
                key: 'terminal-management',
                icon: <MdTerminal />,
                label: 'Terminal Management',
                
              },
              {
                key: 'transactions',
                icon: <IoReceiptOutline />

                ,
                label: 'View Transactions',
              },
              {
                key: 'merchant',
                icon: <UserOutlined />,
                label: 'View Merchant',
              },
              {
                key: 'pocket',
                icon: <UserOutlined />,
                label: 'Pocket Management',
                children:[
                    {
                        key: 'Add User',
                        icon: '',
                        label: "Add User",
                    },
                    {
                        key: 'view Users',
                        icon: '',
                        label: 'View Users'
                    }

                ]
              },
              {
                key: 'Credit-request',
                icon: <UserOutlined />,
                label: 'Credit Request',
              },
              {
                key: 'Audit',
                icon: <UserOutlined />,
                label: 'Audit',
              },
              {
                key: 'Passowrd-reset',
                icon: <UserOutlined />,
                label: 'Change Password',
              },
              {
                key: '/login',
                icon: <CiLogout />,
                label: 'Logout',
              },
              
              
            
            
          ]}
        />
      </Sider>
      <Layout>
        <Header
        className='d-flex justify-content-between ps-1 pe-5'
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <div className='d-flex gap-3 align-items-center'>
            <div>
              <div >
                <h5 className='mb-0 px-2'>{}</h5>
                <p className='mb-0 px-2'>{displayemail}</p>
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
        
          <Outlet/>
        
          
        </Content>
      </Layout>
    </Layout>
  );
};
export default Mainlayout;
