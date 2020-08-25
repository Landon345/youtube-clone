import React from "react";
import "./SearchPage.css";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>

      <hr />

      <ChannelRow
        image="..."
        channel="Landon Schlangen"
        verified
        subs="10k"
        noOfVideos={30}
        description="You can find awesome programming tutorials on my channel"
      />

      <hr />
      <VideoRow
        views="10k"
        subs="10k"
        description="Learn how to code"
        timestamp="1 hour ago"
        channel="Landon Schlangen"
        title="Learn how to code now"
      />
      <VideoRow
        views="10k"
        subs="10k"
        description="Learn how to code"
        timestamp="1 hour ago"
        channel="Landon Schlangen"
        title="Learn how to code now"
      />
      <VideoRow
        views="10k"
        subs="10k"
        description="Learn how to code"
        timestamp="1 hour ago"
        channel="Landon Schlangen"
        title="Learn how to code now"
      />
      <VideoRow
        views="10k"
        subs="10k"
        description="Learn how to code"
        timestamp="1 hour ago"
        channel="Landon Schlangen"
        title="Learn how to code now"
      />
      <VideoRow
        views="10k"
        subs="10k"
        description="Learn how to code"
        timestamp="1 hour ago"
        channel="Landon Schlangen"
        title="Learn how to code now"
      />
      <VideoRow
        views="10k"
        subs="10k"
        description="Learn how to code"
        timestamp="1 hour ago"
        channel="Landon Schlangen"
        title="Learn how to code now"
      />
      <VideoRow
        views="10k"
        subs="10k"
        description="Learn how to code"
        timestamp="1 hour ago"
        channel="Landon Schlangen"
        title="Learn how to code now"
      />
      <VideoRow
        views="10k"
        subs="10k"
        description="Learn how to code"
        timestamp="1 hour ago"
        channel="Landon Schlangen"
        title="Learn how to code now"
      />
    </div>
  );
}

export default SearchPage;
