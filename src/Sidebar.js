import React, { useState } from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import ExpandLessOutlinedIcon from "@material-ui/icons/ExpandLessOutlined";

import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";

import Avatar from "@material-ui/core/Avatar";

function Sidebar() {
  const [showSubs, setShowSubs] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <div className="sidebar">
      <SidebarRow selected={true} Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={WhatshotIcon} title="Trending" />
      <SidebarRow Icon={SubscriptionsIcon} title="Subscription" />
      <hr />
      <SidebarRow Icon={VideoLibraryIcon} title="Library" />
      <SidebarRow Icon={HistoryIcon} title="History" />
      <SidebarRow Icon={OndemandVideoIcon} title="Your Videos" />
      <SidebarRow Icon={WatchLaterIcon} title="Watch Later" />
      <SidebarRow Icon={ThumbUpAltOutlinedIcon} title="Liked videos" />

      {show && (
        <>
          <SidebarRow
            Icon={PlaylistPlayIcon}
            title="FreeCodeCamp Walkthrough"
          />
        </>
      )}

      <div onClick={() => setShow((oldShow) => !oldShow)}>
        {show ? (
          <SidebarRow Icon={ExpandLessOutlinedIcon} title="Show less" />
        ) : (
          <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show more" />
        )}
      </div>
      <hr />
      <div className="sidebar__subscriptions">SUBSCRIPTIONS</div>
      <SidebarRow
        Avatar={
          <Avatar
            alt="Landon Schlangen"
            src="https://yt3.ggpht.com/a-/AOh14GgOMss15LAbKpmbs8IWlbzBjmJq4JkqqivmwJUb=s100-c-k-c0xffffffff-no-rj-mo"
            className="sidebar__avatar"
          />
        }
        title="Landon Schlangen"
      />
      <SidebarRow
        Avatar={
          <Avatar
            alt="Clever Programmer"
            src="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s100-c-k-c0xffffffff-no-rj-mo"
            className="sidebar__avatar"
          />
        }
        title="Clever Programmer"
      />
      <SidebarRow
        Avatar={
          <Avatar
            alt="House of Highlights"
            src="https://yt3.ggpht.com/a/AATXAJyD3sN_IgFt6GZq6OZ_lj9oOel5k6IE2igd7fyYTg=s100-c-k-c0xffffffff-no-rj-mo"
            className="sidebar__avatar"
          />
        }
        title="House of Highlights"
      />
      <SidebarRow
        Avatar={
          <Avatar
            alt="Design Course"
            src="https://yt3.ggpht.com/a/AATXAJyC278MnqvWj6nYJAUT6E3tzxrZ03-CRsIbnDQIwA=s100-c-k-c0xffffffff-no-rj-mo"
            className="sidebar__avatar"
          />
        }
        title="Design Course"
      />
      {showSubs && (
        <>
          <SidebarRow
            Avatar={
              <Avatar
                alt="Landon Schlangen"
                src="https://yt3.ggpht.com/a-/AOh14GgOMss15LAbKpmbs8IWlbzBjmJq4JkqqivmwJUb=s100-c-k-c0xffffffff-no-rj-mo"
                className="sidebar__avatar"
              />
            }
            title="Landon Schlangen"
          />
          <SidebarRow
            Avatar={
              <Avatar
                alt="Clever Programmer"
                src="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s100-c-k-c0xffffffff-no-rj-mo"
                className="sidebar__avatar"
              />
            }
            title="Clever Programmer"
          />
        </>
      )}

      <div onClick={() => setShowSubs((oldShow) => !oldShow)}>
        {showSubs ? (
          <SidebarRow Icon={ExpandLessOutlinedIcon} title="Show less" />
        ) : (
          <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show 2 more" />
        )}
      </div>
    </div>
  );
}

export default Sidebar;
