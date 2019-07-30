import React from "react";
import Sidebar from "react-sidebar";
import Accordian from "../accordian";
import MenuIcon from "../../assets/menu.svg";
import "./sidebar.scss";
import "../../App.scss";
import ContentArea from "../contentarea";

class SideMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  render() {
    return (
      <Sidebar
        sidebar={Accordian()}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{
          sidebar: {
            background: "#9b2020ab",
            top: "5rem",
            color: "white",
            width: "15rem"
          },
          overlay: {
            backgroundColor: "none"
          }
        }}
      >
        <div
          className="sidebar-container"
          onClick={() => this.onSetSidebarOpen(true)}
        >
          <img src={MenuIcon} alt="menu_icon" />
        </div>
        <ContentArea sidebarOpen={this.state.sidebarOpen} />
      </Sidebar>
    );
  }
}

export default SideMenu;
