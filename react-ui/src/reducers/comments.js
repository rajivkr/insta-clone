const postComments = (state = [], action) => {
  if (action.type === 'ADD_COMMENT')
    return [
      ...state,
      {
        user: action.author,
        text: action.comment
      }
    ];
  else if (action.type === 'REMOVE_COMMENT') {
    const { index } = action;
    return [...state.slice(0, index), ...state.slice(index + 1)];
  }
  return state;
};

const comments = (state = [], action) => {
  if (typeof action.postId !== 'undefined') {
    return {
      ...state,
      [action.postId]: postComments(state[action.postId], action)
    };
  }
  return state;
};

export default comments;
