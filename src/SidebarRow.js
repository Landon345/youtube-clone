import React from "react";
import "./SidebarRow.css";

function SidebarRow({ selected, title, Icon, Avatar }) {
  return (
    <div className={`sidebarRow ${selected && "selected"}`}>
      {Icon && <Icon className={`sidebarRow__icon`} />}
      {Avatar && Avatar}
      <h2 className="sidebarRow__title">{title}</h2>
    </div>
  );
}

export default SidebarRow;
