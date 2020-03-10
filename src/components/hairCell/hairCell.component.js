// before video-react install
import React, { Component } from 'react';
import ReactPlayer from 'react-player';

import './hairCell.styles.scss';
import './inputRange.styles.scss';

class HairCell extends Component {
  state = {
    url: null,
    pip: false,
    playing: true,
    controls: true,
    light: false,
    volume: 0,
    muted: true,
    played: 0.0001,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false
  };
  load = url => {
    this.setState({
      url,
      played: 0,
      loaded: 0,
      pip: false
    });
  };

  handleSeekChange = e => {
    this.setState({ played: parseFloat(e.target.value) });
    this.player.seekTo(parseFloat(e.target.value));
  };

  handlePlay = () => {
    this.setState({ playing: false });
  };

  ref = player => {
    this.player = player;
  };
  render() {
    const { playing, volume, muted, played, playbackRate } = this.state;

    return (
      <>
        <div className="app">
          <div className="player-wrapper">
            <ReactPlayer
              ref={this.ref}
              className="react-player"
              width="100%"
              height="100%"
              url={[
                {
                  src: '/videos/hair-cells/ear-hair-cells.mp4',
                  type: 'video/mp4'
                }
              ]}
              playing={playing}
              playbackRate={playbackRate}
              volume={volume}
              muted={muted}
              onPlay={this.handlePlay}
              onError={e => console.log('onError', e)}
            />
            <div className="range-wrap">
              <span className="range-labels">Healthy</span>
              <input
                id="imageRange-head"
                type="range"
                min={0}
                max={0.99}
                step="any"
                value={played}
                onChange={this.handleSeekChange}
              />
              <span className="range-labels">Damaged</span>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default HairCell;
