import React, { useState, useRef, useEffect, useReducer, useMemo } from "react";
import * as Tone from "tone";
import patternReducer from "./patternReducer";
import Slider from "./slider";

import C3 from "./mp3/C3.mp3";
import D3 from "./mp3/D3.mp3";
import E3 from "./mp3/E3.mp3";
import F3 from "./mp3/F3.mp3";
import G3 from "./mp3/G3.mp3";
import A3 from "./mp3/A3.mp3";
import B3 from "./mp3/B3.mp3";

import C4 from "./mp3/C4.mp3";
import D4 from "./mp3/D4.mp3";
import E4 from "./mp3/E4.mp3";
import F4 from "./mp3/F4.mp3";
import G4 from "./mp3/G4.mp3";
import A4 from "./mp3/A4.mp3";
import B4 from "./mp3/B4.mp3";

import C5 from "./mp3/C5.mp3";
import D5 from "./mp3/D5.mp3";
import E5 from "./mp3/E5.mp3";
import F5 from "./mp3/F5.mp3";
import G5 from "./mp3/G5.mp3";
import A5 from "./mp3/A5.mp3";
import B5 from "./mp3/B5.mp3";

const Sequencer = (props) => {
  const [playState, setPlayState] = useState(Tone.Transport.state);
  const [pattern, updatePattern] = useReducer(patternReducer, props.pattern);
  const [volume, setVolume] = useState(-16);
  const [beatsPerMinute, setBeatsPerMinute] = useState(props.pattern.bpm);

  const playProbability = useRef(1);
  const [playSlider, setPlaySlider] = useState(1);

  const swapProbability = useRef(0);
  const [swapSlider, setSwapSlider] = useState(0);

  const allowRepeats = useRef(true);
  const [repeatsCheck, setRepeatsCheck] = useState(true);

  const previousNote = useRef(null);

  // initialize tone.js pipeline
  const vol = useMemo(() => {
    return new Tone.Volume(volume).toDestination();
  }, []);

  // intialize sampler
  const sampler = useMemo(() => {
    return new Tone.Sampler({
      urls: {
        C3,
        D3,
        E3,
        F3,
        G3,
        A3,
        B3,
        C4,
        D4,
        E4,
        F4,
        G4,
        A4,
        B4,
        C5,
        D5,
        E5,
        F5,
        G5,
        A5,
        B5,
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
      if (!allowRepeats.current && previousNote.current === value.note) {
        return;
      }

      previousNote.current = value.note;
      if (Math.random() < swapProbability.current) {
        updatePattern({ type: "RandomSwap" });
      }

      sampler.triggerAttackRelease(value.note, 10);
    }, pattern.events).start(0);

    part.loop = true;
    part.loopStart = 0;
    part.loopEnd = pattern.end;
    part.humanize = true;
    part.probability = playSlider;

    return () => part.dispose();
  }, [pattern, sampler, playSlider, allowRepeats]);

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
        max={200}
        value={beatsPerMinute}
        onChange={tempoChange}
      ></Slider>
      <br />
      Swap Probability:
      <Slider
        min={0}
        max={10}
        value={swapSlider * 10}
        onChange={(e) => {
          swapProbability.current = +e.target.value / 10;
          setSwapSlider(+e.target.value / 10);
        }}
      ></Slider>
      <br />
      Play Probability:
      <Slider
        min={4}
        max={10}
        value={playSlider * 10}
        onChange={(e) => {
          playProbability.current = +e.target.value / 10;
          setPlaySlider(+e.target.value / 10);
        }}
      ></Slider>
      <br />
      Allow Repeat Notes
      <input
        type="checkbox"
        checked={repeatsCheck}
        onClick={(e) => {
          allowRepeats.current = e.target.checked;
          setRepeatsCheck(e.target.checked);
        }}
      />
    </div>
  );
};

export default Sequencer;
