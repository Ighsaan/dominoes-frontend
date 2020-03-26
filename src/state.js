module.exports = { board:
    { state:
        [ { card: { left: 5, right: 5 }, face: 5 },
            { card: { left: 1, right: 5 }, face: 5 },
            { card: { left: 1, right: 1 }, face: 1 },
            { card: { left: 3, right: 1 }, face: 1 },
            { card: { left: 6, right: 3 }, face: 3 },
            { card: { left: 5, right: 6 }, face: 6 },
            { card: { left: 6, right: 6 }, face: 6 }],
      stale: false },
   players:
    [ {
        id: 0,
        name: 'John',
        isYou: true,
        cards: [ 
            { left: 0, right: 2 },
            { left: 0, right: 3 },
            { left: 5, right: 5 },
            { left: 1, right: 3 }
        ],
        down: true,
        turn: false,
        winner: false },
      {
        id: 1,
        name: 'Joe',
        down: false,
        turn: true,
        count: 3,
        winner: true,
       },
      {
        id: 2,
        name: 'Jack',
        down: false,
        turn: false,
        count: 5,
        winner: false },
      {
        id: 3,
        name: 'Jim',
        down: false,
        turn: false,
        count: 4,
        winner: false } ],
   state: 'END' }