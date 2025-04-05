# Traffic Light State Machine

Create a state machine specifically for a traffic light system with private state and public methods for state management.

## Requirements
- Create a function `makeTrafficLight()` that returns an object with `getState()` and `transition()` methods
- Initial state is passed in the constructor
- States transitions are fixed: 'red' -> 'green' -> 'yellow' -> 'red' (in this order only)
- State should be private and only changeable through `transition()`
- Successful transitions should return `true`
- `getState()` should return current state as string

## Example
```javascript
const trafficLight = makeTrafficLight("red");

trafficLight.getState(); // returns 'red'
trafficLight.transition(); // returns true, moves to 'green'
trafficLight.getState(); // returns 'green'
trafficLight.transition(); // returns true, moves to 'yellow'
trafficLight.getState(); // returns 'yellow'
trafficLight.transition(); // returns true, moves back to 'red'
```