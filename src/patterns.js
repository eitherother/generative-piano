const patterns = [
  {
    name: "Rainy Days",
    end: "9:0:0",
    bpm: 180,
    events: [
      { note: "E3", time: 0 },
      { note: "G3", time: "0:1" },
      { note: "B3", time: "0:2" },
      { note: "E4", time: "0:3" },
      { note: "Gb4", time: "1:0" },

      { note: "Eb3", time: "1:2" },
      { note: "G3", time: "1:3" },
      { note: "B3", time: "2:0" },
      { note: "A4", time: "2:1" },
      { note: "G4", time: "2:2" },
      { note: "Gb4", time: "2:3" },

      { note: "D3", time: "3:0" },
      { note: "E4", time: "3:0" },
      { note: "G3", time: "3:1" },
      { note: "B3", time: "3:2" },
      { note: "E4", time: "3:3" },
      { note: "Gb4", time: "4:0" },

      { note: "Db3", time: "4:2" },
      { note: "G3", time: "4:3" },
      { note: "B3", time: "5:0" },
      { note: "E4", time: "5:1" },
      { note: "B3", time: "5:2" },
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

// const patterns = [
//   {
//     name: "default piano 1",
//     end: "1:2:0",
//     bpm: 120,
//     events: [
//       { note: "C4", time: 0 },
//       { note: "F3", time: "0:1" },
//       { note: "G3", time: "0:3" },
//     ],
//   },
//   {
//     name: "default piano 2",
//     end: "1:3:0",
//     bpm: 100,
//     events: [
//       { note: "C4", time: 0 },
//       { note: "Ab3", time: "0:1" },
//       { note: "F3", time: "1:0" },
//     ],
//   },
// ];

export default patterns;
