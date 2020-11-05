import React, { Component } from "react";
import ReactDOM from "react-dom";
import { PullToRefresh, Button, Toast ,ActivityIndicator} from "antd-mobile";
import axios from "axios";
import QueueAnim from "rc-queue-anim";
import ArtileCard from "../../components/ArticleCard";


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
      animating:false
    };
  }

  componentDidMount() {
    this.setState({
      animating:true
    })
    const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
    axios
      .get("http://101.201.125.229:8081/news?pageNum=1&pageSize=4")
      .then((res) => {
        console.log(res.data.data.list);
        this.setState({
          height: hei,
          data: res.data.data.list,
          total: res.data.data.total,
          animating:false
        });
      });
  }

  getnewDate() {
    this.setState({
      count: +this.state.count + 1,
      animating:true
    });
    this.setState({ refreshing: true });
    axios
      .get(
        `http://101.201.125.229:8081/news?pageNum=${this.state.count}&pageSize=4`
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
          animating:false
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
                <ArtileCard
                key={item.newsId}
                newsId={item.newsId}
                newsTitle={item.newsTitle}
                authorName={item.authorName}
                createTime={item.createTime}
                newsContentView={item.newsContentView}
                newsPictureViewUrl={item.newsPictureViewUrl}
                />
              );
            })}
          </QueueAnim>
        </PullToRefresh>
        <div className="toast-example">
              <ActivityIndicator
                toast
                text=""
                animating={this.state.animating}
              />
            </div>
      </div>
    );
  }
}

export default function Article() {
  return (
    <div>
      <Demo />
    </div>
  );
}
