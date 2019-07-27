const initialState = {
  songList: {},
  currentSong: {},
  currentLyricIndex: 0,
  lyricShowing: ""
};

const lyricReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INPUT_SONG":
      let newState = { ...state };
      newState.songList.push(action.payload);
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
