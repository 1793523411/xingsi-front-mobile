import React, { Component } from "react";
import ReactDOM from "react-dom";
import { PullToRefresh, Button, Toast } from "antd-mobile";
import axios from "axios";
import QueueAnim from "rc-queue-anim";
import ImgCard from "../../components/ImgCard";

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      down: false,
      height: document.documentElement.clientHeight,
      data: [],
      count: 1,
      total: 0,
    };
  }

  componentDidMount() {
    const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
    axios
      .get("http://101.201.125.229:8081/album?pageNum=1&pageSize=5")
      .then((res) => {
        console.log(res.data.data.list);
        this.setState({
          height: hei,
          data: res.data.data.list,
          total: res.data.data.total,
        });
      });
  }

  getnewDate() {
    this.setState({
      count: +this.state.count + 1,
    });
    this.setState({ refreshing: true });
    axios
      .get(
        `http://101.201.125.229:8081/album?pageNum=${this.state.count}&pageSize=5`
      )
      .then((res) => {
        this.setState({ refreshing: false });
        console.log(this.state.count);
        console.log(res.data.data.list);
        if (res.data.data.list.length === 0) {
          Toast.info("没有更多数据了哟~", 1);
        }
        let tmp = this.state.data;
        // console.log(tmp)
        let tmp2 = tmp.concat(res.data.data.list);
        // console.log(tmp2)
        this.setState({
          data: tmp2,
        });
      });
  }

  render() {
    return (
      <div>
        <PullToRefresh
          damping={60}
          ref={(el) => (this.ptr = el)}
          style={{
            height: this.state.height,
            overflow: "auto",
          }}
          indicator={this.state.down ? {} : { deactivate: "上拉可以刷新" }}
          direction={this.state.down ? "down" : "up"}
          refreshing={this.state.refreshing}
          onRefresh={() => this.getnewDate()}
        >
          <QueueAnim delay={300} interval={150}>
            {this.state.data.map((item) => {
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
        </PullToRefresh>
      </div>
    );
  }
}

export default function Image() {
  return (
    <div>
      <Demo />
    </div>
  );
}
