import React from "react";
import Sidebar from "react-sidebar";
import MenuIcon from "../../assets/menu.svg";
import "./sidebar.scss";
import "../../App.scss";

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
        sidebar={<b>Hello World</b>}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{
          sidebar: { background: "#20639b", top: "5rem", color: "white" }
        }}
      >
        <div
          class="sidebar-container"
          onClick={() => this.onSetSidebarOpen(true)}
        >
          <img src={MenuIcon} alt="menu_icon" />
        </div>

        {/* <button onClick={() => this.onSetSidebarOpen(true)}>
          Open sidebar
        </button> */}
      </Sidebar>
    );
  }
}

export default SideMenu;
