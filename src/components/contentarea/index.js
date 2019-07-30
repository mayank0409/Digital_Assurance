import React from "react";
import ProjectSettings from "../settings/project-settings";

function ContentArea(props) {
  return (
    <div>
      <div style={{ marginLeft: props.sidebarOpen ? "16rem" : "2rem" }}>
        <ProjectSettings />
      </div>
    </div>
  );
}

export default ContentArea;
