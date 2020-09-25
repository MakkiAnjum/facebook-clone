import React from "react";
import "./SidebarRow.css";
import { Avatar } from "@material-ui/core";

export default function SidebarRow({ src, Icon, title }) {
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  );
}
