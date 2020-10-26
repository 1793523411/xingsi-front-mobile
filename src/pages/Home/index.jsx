import React, { useState } from "react";

import { Drawer, List, Icon } from "antd-mobile";

import { Link } from "react-router-dom";

import "./index.css";

export default function Home(props) {
  const [open, setOpen] = useState(false);

  const onOpenChange = (...args) => {
    console.log(args);
    setOpen(!open);
  };

  const icon = [
    "https://img-blog.csdnimg.cn/20201025144749474.png#pic_center",
    "https://img-blog.csdnimg.cn/20201025144758900.png#pic_center",
    "https://img-blog.csdnimg.cn/20201025144805811.png#pic_center",
    "https://img-blog.csdnimg.cn/20201025144811693.png#pic_center",
    "https://img-blog.csdnimg.cn/20201025144826681.png#pic_center"
  ];

  const sidebar = (
    <List>
      {["首页", "行思新闻", "行思相册", "行思历史", "行思导航"].map(
        (i, index) => {
          return (
            <List.Item
              key={index}
              thumb={icon[index]}
              style={{ fontSize: 12 }}
            >
              <Link
                to={"/" + index}
                style={{ color: "#000", fontSize: 14 }}
                onClick={() => setOpen(false)}
              >
                {" "}
                {i}
              </Link>
            </List.Item>
          );
        }
      )}
    </List>
  );

  return (
    <div>
      <Drawer
        className="my-drawer"
        style={{ minHeight: document.documentElement.clientHeight,zIndex:open?90:0 }}
        enableDragHandle
        contentStyle={{ color: "#A6A6A6", textAlign: "center", paddingTop: 42 }}
        sidebar={sidebar}
        open={open}
        onOpenChange={onOpenChange}
        dragToggleDistance={10}
        position={"left"}
      ></Drawer>
      <div onClick={onOpenChange} className="ygjfix">
        {open ? (
          <Icon type="left" size="xs" />
        ) : (
          <Icon type="right" size="xs" />
        )}
      </div>
    </div>
  );
}
