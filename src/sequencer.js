import React, { useState, useEffect, useReducer, useMemo } from "react";
import * as Tone from "tone";
import patternReducer from "./patternReducer";
import Slider from "./slider";
import F3 from "./mp3/F3.mp3";
import C4 from "./mp3/C4.mp3";

const Sequencer = (props) => {
  const [playState, setPlayState] = useState(Tone.Transport.state);
  const [pattern, updatePattern] = useReducer(patternReducer, props.pattern);
  const [volume, setVolume] = useState(-10);
  const [beatsPerMinute, setBeatsPerMinute] = useState(props.pattern.bpm);

  // initialize tone.js pipeline
  const vol = useMemo(() => {
    return new Tone.Volume(volume).toDestination();
  }, []);

  // intialize sampler
  const sampler = useMemo(() => {
    return new Tone.Sampler({
      urls: {
        F3,
        C4,
      },
      onload: () => {
        props.onLoad(true);
      },
    }).connect(vol);
  }, []);

  // initalize tempo
  useEffect(() => {
    Tone.getTransport().bpm.rampTo(props.pattern.bpm, 0.1);
    setBeatsPerMinute(props.pattern.bpm);
  }, []);

  // play pattern
  useEffect(() => {
    const part = new Tone.Part((time, value) => {
      if (Math.random() > 0.9) {
        //updatePattern({ type: "RandomSwap" });
      }

      sampler.triggerAttackRelease(value.note, 10);
    }, pattern.events).start(0);

    part.loop = true;
    part.loopStart = 0;
    part.loopEnd = pattern.end;

    return () => part.dispose();
  }, [pattern, sampler]);

  const toggle = () => {
    Tone.start();
    Tone.Transport.toggle();
    setPlayState(Tone.Transport.state);
  };

  const volumeChange = (e) => {
    setVolume(+e.target.value);
    vol.volume.value = volume;
  };

  const tempoChange = (e) => {
    Tone.getTransport().bpm.value = e.target.value;
    setBeatsPerMinute(+e.target.value);
  };

  return (
    <div>
      <div onClick={() => toggle()}>{playState}</div>
      Volume:
      <Slider
        min={-36}
        max={-4}
        value={volume}
        onChange={volumeChange}
      ></Slider>
      <br />
      Speed:
      <Slider
        min={80}
        max={160}
        value={beatsPerMinute}
        onChange={tempoChange}
      ></Slider>
    </div>
  );
};

export default Sequencer;
