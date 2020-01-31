import React from "react";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import StopIcon from "@material-ui/icons/Stop";
import Fab from '@material-ui/core/Fab';

export default class Player extends React.Component {
    constructor(props) {
        super(props);
        this.pauseAudio = this.pauseAudio.bind(this);
        this.playAudio = this.playAudio.bind(this);
        this.state = {
            isPlaying: false,
            song: "",
            audio: new Audio("https://b.sechack.dev/" + this.props.audioURL)
        };
    }

    pauseAudio() {
        console.log("pause");
        this.state.audio.pause();

        // 最初から再生する場合
        let newAudioState = this.state.audio;
        newAudioState.currentTime = 0;
        this.setState({ audio: newAudioState });

        this.setState({ isPlaying: !this.state.isPlaying });
    }

    playAudio() {
        console.log("play");
        console.log(this);
        this.state.audio.play();
        this.setState({ isPlaying: !this.state.isPlaying });
    }

    render() {
        if (this.state.isPlaying) {
            return <Fab color="primary" aria-label="start" onClick={this.pauseAudio}><StopIcon /></Fab>;
        } else {
            return <Fab color="primary" aria-label="start" onClick={this.playAudio}><PlayArrowIcon /></Fab>;
        }
    }
}
