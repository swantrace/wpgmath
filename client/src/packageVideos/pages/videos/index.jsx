import Taro, { Component } from "@tarojs/taro";
import { View, Video } from "@tarojs/components";
import { AtDivider } from "taro-ui";
import { connect } from "@tarojs/redux";
import Layout from "../../../components/layout/index.weapp";
import "./videos.scss";

@connect(state => {
  return {
    videos: state.branchInfo.videos
  };
}, null)
export default class Videos extends Component {
  state = {
    videoContext: null
  };
  onPlay = e => {
    if (this.state.videoContext) {
      this.state.videoContext.pause();
    }
    const newVideoContext = Taro.createVideoContext(e.target.id);
    newVideoContext.requestFullScreen();
    this.setState({ videoContext: newVideoContext });
  };
  onPause = e => {
    const newVideoContext = Taro.createVideoContext(e.target.id);
    newVideoContext.exitFullScreen();
  };
  onEnded = e => {
    const newVideoContext = Taro.createVideoContext(e.target.id);
    newVideoContext.exitFullScreen();
  };
  render() {
    return (
      <Layout
        page-class='video'
        title='相关视频'
        btn-no-border='btn-no-border'
        titleColor='#3567B0'
      >
        <View className='main-content-2'>
          <View className='videos-list-wrapper'>
            {this.props.videos.map(video =>
              video.screenshot && video.video ? (
                <View key={video._id} className='video-item-wrapper'>
                  <View className='video-item-wrapper'>
                    <Video
                      src={video.video}
                      poster={video.screenshot}
                      id={video._id}
                      style={{ width: "100vw", height: "300rpx" }}
                      onPlay={this.onPlay}
                      onPause={this.onPause}
                      onEnded={this.onEnded}
                    />
                  </View>
                  <View className='video-name-wrapper'>
                    <AtDivider content={video.name} />
                  </View>
                </View>
              ) : null
            )}
          </View>
        </View>
      </Layout>
    );
  }
}
