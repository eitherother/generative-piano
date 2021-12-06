const patterns = [
  {
    name: "default piano 1",
    end: "1:2:0",
    bpm: 120,
    events: [
      { note: "C4", time: 0 },
      { note: "F3", time: "0:1" },
      { note: "G3", time: "0:3" },
    ],
  },
  {
    name: "default piano 2",
    end: "1:3:0",
    bpm: 100,
    events: [
      { note: "C4", time: 0 },
      { note: "Ab3", time: "0:1" },
      { note: "F3", time: "1:0" },
    ],
  },
];

export default patterns;
