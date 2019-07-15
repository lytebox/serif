const initialState = {
  songList: [{ title: "Ini contoh judul", lyric: "Ini contoh lirik" }],
  currentSong: [],
  currentIndex: 0
};

const lyricReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INPUT_SONG":
      let song = {
        title: action.payload.songTitle,
        lyric: action.payload.songLyric
      };
      return {
        ...state,
        currentSong: song
      };
    case "NEXT_LYRIC":
      state = {
        ...state,
        currentIndex: state.currentIndex + 1
      };
      return state;
    case "PREV_LYRIC":
      state = {
        ...state,
        currentIndex: state.currentIndex - 1
      };
      return state;
    default:
      return { ...state };
  }
};

export default lyricReducer;
