const patterns = [
  {
    name: "Rainy Days",
    end: "9:0:0",
    bpm: 200,
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
    name: "Abstract Painting",
    end: "4:2:0",
    bpm: 150,
    events: [
      { note: "E3", time: 0 },
      { note: "Gb3", time: "0:0:2" },
      { note: "Db4", time: "0:1:0" },
      { note: "Eb4", time: "0:1:2" },
      { note: "Bb4", time: "0:2:0" },
      { note: "C5", time: "0:2:2" },
      { note: "A5", time: "0:3:0" },
      { note: "B5", time: "0:3:2" },
    ],
  },

  {
    name: "Cinematic Simpatico",
    end: "5:2:0",
    bpm: 140,
    events: [
      { note: "Ab4", time: 0 },
      { note: "Eb5", time: 0 },
      { note: "B5", time: 0 },

      { note: "Db3", time: "0:1" },
      { note: "Ab3", time: "0:1" },
      { note: "E4", time: "0:1" },

      { note: "Db4", time: "0:2" },
      { note: "Ab4", time: "0:2" },
      { note: "E5", time: "0:2" },

      { note: "Db3", time: "0:3" },
      { note: "Ab3", time: "0:3" },
      { note: "E4", time: "0:3" },

      { note: "Ab4", time: "1:0" },
      { note: "Eb5", time: "1:0" },
      { note: "B5", time: "1:0" },

      { note: "B3", time: "2:0:1" },

      { note: "Gb5", time: "2:1" },

      { note: "Gb4", time: "3:0:1" },
      { note: "Db5", time: "3:0:1" },

      { note: "Ab4", time: "3:2" },
      { note: "B4", time: "3:2" },
    ],
  },

  {
    name: "Quiet Stars",
    end: "5:2:0",
    bpm: 180,
    events: [
      { note: "B3", time: 0 },
      { note: "Gb4", time: "0:0:2" },
      { note: "Db4", time: "0:1:0" },
      { note: "D4", time: "0:1:2" },
      { note: "Db5", time: "0:2:0" },
      { note: "Bb4", time: "0:2:2" },
      { note: "Gb5", time: "0:3:0" },
      { note: "Ab5", time: "0:3:2" },
      { note: "Db6", time: "1:0:0" },
    ],
  },

  {
    name: "Morning Air",
    end: "3:2:0",
    bpm: 140,
    events: [
      { note: "Ab4", time: 0 },
      { note: "C5", time: "0:0:2" },
      { note: "F5", time: "0:1:0" },
      { note: "Bb4", time: "0:1:2" },
      { note: "Eb5", time: "0:2:0" },
      { note: "D6", time: "0:2:2" },
      { note: "Bb5", time: "0:3:0" },

      { note: "Ab5", time: "1:2:0" },
      { note: "G5", time: "1:2:2" },
      { note: "Ab5", time: "1:3:0" },
      { note: "G5", time: "1:3:2" },
      { note: "Ab5", time: "2:0:0" },
      { note: "G5", time: "2:0:2" },
      { note: "Ab5", time: "2:1:0" },
    ],
  },
];

export default patterns;
