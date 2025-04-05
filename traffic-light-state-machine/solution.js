function makeTrafficLight(initialState) {
  const states = ['red', 'green', 'yellow'];
  let currentState = initialState;

  return {
    getState() {
      return currentState;
    },
    transition() {
      const currentIndex = states.indexOf(currentState);
      currentState = states[(currentIndex + 1) % states.length];
      return true;
    }
  };
}