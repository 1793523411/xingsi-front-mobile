import React, { useState } from "react";

import { Drawer, List, Icon } from "antd-mobile";

import { Link } from "react-router-dom";

import QueueAnim from "rc-queue-anim";

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
    "https://img-blog.csdnimg.cn/20201027162134402.png#pic_center",
    "https://img-blog.csdnimg.cn/20201025144811693.png#pic_center",
    "https://img-blog.csdnimg.cn/20201025144826681.png#pic_center",
  ];

  const sidebar = (
    <List>
      {["首页", "行思新闻", "行思相册", "行思简介", "行思历史", "行思导航"].map(
        (i, index) => {
          return (
            <Link
                to={"/" + index}
                style={{ color: "#000", fontSize: 14 }}
                onClick={() => setOpen(false)}
              >
            <List.Item key={index} thumb={icon[index]} style={{ fontSize: 12 }}>
              
                {" "}
                {i}
            </List.Item>
            </Link>
          );
        }
      )}
    </List>
  );

  return (
    <div>
      <Drawer
        className="my-drawer"
        style={{
          minHeight: document.documentElement.clientHeight,
          zIndex: open ? 90 : 0,
        }}
        enableDragHandle
        contentStyle={{ color: "#A6A6A6", textAlign: "center", paddingTop: 42 }}
        sidebar={sidebar}
        open={open}
        onOpenChange={onOpenChange}
        dragToggleDistance={10}
        position={"left"}
      ></Drawer>
      <QueueAnim delay={300} duration={1000} type="scaleBig">
        <div onClick={onOpenChange} className="ygjfix" key="scale">
          {open ? (
            <i className="iconfont icon-toggle-left"></i>
          ) : (
            <i className="iconfont icon-toggle-right"></i>
          )}
        </div>
      </QueueAnim>
    </div>
  );
}
