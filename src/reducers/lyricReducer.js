const initialState = {
  songList: {},
  currentSong: {},
  currentLyricIndex: 0,
  lyricShowing: ""
};

const lyricReducer = (state = initialState, action) => {
  console.log("Action", action);
  switch (action.type) {
    case "INPUT_SONG":
      let newState = { ...state };
      let newsong = {
        title: action.payload.songTitle,
        lyric: action.payload.songLyric
      };
      newState.songList[action.payload.songTitle] = newsong;
      return newState;
    case "SHOW_LYRIC":
      return {
        ...state,
        lyricShowing: action.payload
      };
    default:
      return state;
  }
};

export default lyricReducer;
