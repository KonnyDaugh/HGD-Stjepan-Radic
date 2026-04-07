export const orchestraSeats = [
  // 🎵 ФЛЕЙТА (3)
  { id: "fl1", x: 100, y: 50, section: "flute", musician: null },
  { id: "fl2", x: 150, y: 50, section: "flute", musician: null },
  { id: "fl3", x: 200, y: 50, section: "flute", musician: null },

  // 🎵 КЛАРНЕТЫ (3)
  { id: "cl1", x: 300, y: 50, section: "clarinet", musician: null },
  { id: "cl2", x: 350, y: 50, section: "clarinet", musician: null },
  { id: "cl3", x: 400, y: 50, section: "clarinet", musician: null },

  // 🎷 САКСОФОНЫ (7)
  ...Array.from({ length: 7 }).map((_, i) => ({
    id: `sx${i}`,
    x: 80 + i * 50,
    y: 120,
    section: "sax",
    musician: null
  })),

  // 🎺 ТРУБЫ (7)
  ...Array.from({ length: 7 }).map((_, i) => ({
    id: `tr${i}`,
    x: 80 + i * 50,
    y: 180,
    section: "trumpet",
    musician: null
  })),

  // 🎺 ТРОМБОНЫ (3)
  { id: "tb1", x: 200, y: 240, section: "trombone", musician: null },
  { id: "tb2", x: 260, y: 240, section: "trombone", musician: null },
  { id: "tb3", x: 320, y: 240, section: "trombone", musician: null },

  // 🎺 ТУБЫ (2)
  { id: "tu1", x: 100, y: 240, section: "tuba", musician: null },
  { id: "tu2", x: 400, y: 240, section: "tuba", musician: null },

  // 🥁 РИТМ-СЕКЦИЯ (3)
  { id: "rs1", x: 150, y: 300, section: "rhythm", musician: null },
  { id: "rs2", x: 250, y: 300, section: "rhythm", musician: null },
  { id: "rs3", x: 350, y: 300, section: "rhythm", musician: null },

  // 🥁 БАРАБАНЫ (1)
  { id: "drums", x: 450, y: 300, section: "drums", musician: null },

  // 🎸 ГИТАРА (1)
  { id: "guitar", x: 50, y: 300, section: "guitar", musician: null },

  // 🎸 БАС (1)
  { id: "bass", x: 500, y: 300, section: "bass", musician: null },
];