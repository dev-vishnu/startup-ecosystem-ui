import React from "react";
import { Layout, Icon } from "antd";
const { Header, Content } = Layout;

import SideBar from "../navigation/sidebar";

export default class AppLayout extends React.Component {
  state = {
  	collapsed: false
  };

  toggle = () => {
  	this.setState( {
  		collapsed: !this.state.collapsed
  	} );
  };
  
  render (){
  	return(
      <Layout>
        <SideBar/>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggle}
              />
          </Header>
          <Content
            style={{
            	margin: "10px 10px",
            	padding: 24,
            	height:"calc(100vh - 5.25rem)",
            	background: "#fff",
            	minHeight: 280
            }}
            >
          
            {
              this.props.children
            }
          </Content>
        </Layout>
      </Layout>
  	);
  }
}