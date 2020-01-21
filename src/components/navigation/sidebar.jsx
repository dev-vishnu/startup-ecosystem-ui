import React from "react";
import Link from "next/link";
import {
	map as _Map
} from "lodash";

import { Layout, Menu } from "antd";
const { Sider } = Layout;

import routes from "../../routes";

export default class NavBar extends React.Component {

  _getChildMenuItems = ( children ) => {
  	return (
  		_Map( children, ( child ) => (
        <Menu.Item key={ child.path }>
          <Link key={ child.path } href={child.path}>
            <div>
              { child.icon }
              { child.label }
            </div>  
          </Link>
        </Menu.Item>
  		) )
  	);
  }

  render (){
  	return(
      <Sider >
        <Menu theme="dark" mode="inline" >
        { _Map( routes, ( route ) => {
        	if( route.children ){
        		return(
        		<Menu.SubMenu
        		 key={ route.label }
             title={(
                <span>
                  {
                    this.props.isCollapsed ? route.icon :
                      <div>{route.icon} { route.label} </div>
                  }
                </span>
              )}
             >
        		  {
        		    this._getChildMenuItems( route.children )
        		  }
        		</Menu.SubMenu> );
        	}else{
        		return(
            <Menu.Item key={ route.path }>
              <Link key={ route.path } href={route.path}>
                <div>
                  { route.icon }
                  { route.label }
                </div>  
              </Link>
            </Menu.Item> );
        	}
        } )}
        </Menu>
      </Sider>
  	);
  }
}