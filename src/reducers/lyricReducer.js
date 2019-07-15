const initialState = {
  songList: [],
  currentSong: [],
  currentIndex: 0,
  test: ""
};

const lyricReducer = (state = initialState, action) => {
  console.log("Masuk reducer", action.payload);
  switch (action.type) {
    case "INPUT_SONG":
      // let newState = { ...state };
      // newState.songList.push({
      //   title: action.payload.songTitle,
      //   lyric: action.payload.songLyric
      // });
      // console.log("IINI DIA", newState);
      // return newState;
      return {
        ...state,
        test: "Ja"
      };
    default:
      return state;
  }
};

export default lyricReducer;
