import daria from '../assets/musicians/daria-diachenko.webp';
import dirigent from '../assets/musicians/dirigent.jpeg';

export const orchestraSeats = [
    {
        id: "conductor",
        x: 300,
        y: 60,
        section: "conductor",
        musician: {
            name: "Damjan Grubić",
            instrument: "Dirigent",
            photo: dirigent
        }
    },
  // 🎵 ФЛЕЙТА (3)
  { id: "fl1", x: 100, y: 90, section: "flute", musician: {
    name: 'Darja Djačenko',
    instrument: 'Flauta',
    photo: daria
  } },
  { id: "fl2", x: 150, y: 90, section: "flute", musician: null },

  // 🎵 КЛАРНЕТЫ (3)
  { id: "cl1", x: 400, y: 90, section: "clarinet", musician: null },
  { id: "cl2", x: 450, y: 90, section: "clarinet", musician: null },
  { id: "cl3", x: 500, y: 90, section: "clarinet", musician: null },
  { id: "cl4", x: 550, y: 90, section: "clarinet", musician: null },

  // 🎵 ЕУФОНИУМ (2)
  { id: "ef1", x: 100, y: 150, section: "euphonium", musician: null },
  { id: "ef2", x: 150, y: 150, section: "euphonium", musician: null },

  // 🎷 САКСОФОНЫ (7)
  ...Array.from({ length: 7 }).map((_, i) => ({
    id: `sx${i}`,
    x: 240 + i * 50,
    y: 150,
    section: "sax",
    musician: null
  })),

  // 🎺 ТРУБЫ (7)
  ...Array.from({ length: 7 }).map((_, i) => ({
    id: `tr${i}`,
    x: 250 + i * 50,
    y: 240,
    section: "trumpet",
    musician: null
  })),

  // 🎺 ТРОМБОНЫ (3)
  { id: "tb1", x: 70, y: 240, section: "trombone", musician: null },
  { id: "tb2", x: 120, y: 240, section: "trombone", musician: null },
  { id: "tb3", x: 170, y: 240, section: "trombone", musician: null },

  // 🎺 ТУБЫ (2)
  { id: "tu1", x: 90, y: 350, section: "tuba", musician: null },
  { id: "tu2", x: 140, y: 350, section: "tuba", musician: null },

  // 🥁 РИТМ-СЕКЦИЯ (3)
  { id: "rs1", x: 250, y: 450, section: "rhythm", musician: null },
  { id: "rs2", x: 350, y: 450, section: "rhythm", musician: null },
  { id: "rs3", x: 450, y: 450, section: "rhythm", musician: null },

 // 🥁 БАРАБАНЫ (1)
  { id: "drums", x: 120, y: 450, section: "drums", musician: null },

//   // 🎸 ГИТАРА (1)
//   { id: "guitar", x: 50, y: 300, section: "guitar", musician: null },

//   // 🎸 БАС (1)
//   { id: "bass", x: 500, y: 300, section: "bass", musician: null },
];