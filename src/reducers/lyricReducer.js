const initialState = {
  songList: {},
  currentSong: {},
  currentLyricIndex: 0,
  lyricShowing: "",
  isWatermarkShown: true
};

const lyricReducer = (state = initialState, action) => {
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
    case "TOGGLE_WATERMARK":
      return {
        ...state,
        isWatermarkShown: !action.payload
      };
    default:
      return state;
  }
};

export default lyricReducer;
