import React from "react";
import { Grid } from "antd-mobile";
import Texty from 'rc-texty';

import "./index.css";
import 'rc-texty/assets/index.css';

export default function LinkCard(props) {
  const data = props.linkData.websiteList.map((item) => {
    return {
      icon: item.iconUrl,
      text:
        item.websiteName.length > 6
          ? item.websiteName.substring(0, 6) + "····"
          : item.websiteName,
      to: item.websiteUrl,
    };
  });
  console.log(data);
  const GridExample = () => (
    <div>
      <div className="sub-title"><Texty type="scaleX" >{props.linkData.type}</Texty></div>
      <Grid
        data={data}
        hasLine={false}
        onClick={(obj, index) => {
          console.log(obj);
          console.log(index);
          window.open(obj.to)
        }}
      ></Grid>
    </div>
  );
  return (
    <div>
      <GridExample />
    </div>
  );
}
