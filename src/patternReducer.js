const patternReducer = (state, action) => {
  switch (action.type) {
    case "RandomSwap": {
      const length = state.events.length;
      const e1 = Math.floor(Math.random() * length);
      const e2 = (e1 + 1) % length;

      let newEvents = state.events.map((oldEvent) => {
        return { ...oldEvent };
      });

      var tempTime = newEvents[e2].time;
      newEvents[e2].time = newEvents[e1].time;
      newEvents[e1].time = tempTime;

      return {
        ...state,
        events: newEvents,
      };
    }
    default:
      return state;
  }
};

export default patternReducer;
