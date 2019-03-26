const posts = (state = [], action) => {
  const i = action.index;
  if (action.type === 'INCREMENT_LIKES') {
    return [
      ...state.slice(0, i),
      { ...state[i], likes: state[i].likes + 1 },
      ...state.slice(i + 1)
    ];
  }
  return state;
};

export default posts;
