const initialState = {
  songList: [],
  currentSong: [],
  currentIndex: 0,
  test: ""
};

const lyricReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INPUT_SONG":
      console.log("MASUK", action);
      let newState = { ...state };
      let newsong = {
        title: action.payload.songTitle,
        lyric: action.payload.songLyric
      };
      newState.songList.push(newsong);
      console.log("returning", newState);
      return newState;
    case "NEXT_LYRIC":
      return {
        ...state,
        currentIndex: state.currentIndex + 1
      };
    case "PREV_LYRIC":
      return {
        ...state,
        currentIndex: state.currentIndex - 1
      };
    default:
      return state;
  }
};

export default lyricReducer;
