import React from "react";

import "./index.css";

import ImgCard from "../ImgCard";
import QueueAnim from "rc-queue-anim";

export default function IndexImage(props) {
  return (
    <div>
      <QueueAnim delay={300} interval={150}>
        {props.imgList.map((item) => {
          return (
            <ImgCard
              key={item.albumId}
              albumId={item.albumId}
              albumName={item.albumName}
              thumbUrl={item.thumbUrl}
              albumTime={item.albumTime}
              albumDesc={item.albumDesc}
            />
          );
        })}
      </QueueAnim>
    </div>
  );
}
