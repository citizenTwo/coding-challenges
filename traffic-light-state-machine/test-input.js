module.exports = [
  {
    name: "Basic transition sequence",
    initialState: "red",
    operations: [
      { type: "getState", expected: "red" },
      { type: "transition", expected: true },
      { type: "getState", expected: "green" },
      { type: "transition", expected: true },
      { type: "getState", expected: "yellow" },
      { type: "transition", expected: true },
      { type: "getState", expected: "red" }
    ]
  }
];