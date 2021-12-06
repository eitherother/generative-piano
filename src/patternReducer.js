const patternReducer = (state, action) => {
  switch (action.type) {
    case "RandomSwap": {
      const e1 = Math.floor(Math.random() * 3);
      const e2 = (e1 + 1) % 3;

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
