export function inputLyric(song) {
  return {
    type: "INPUT_SONG",
    payload: song
  };
}

export function nextLyric(index) {
  return {
    type: "NEXT_LYRIC",
    payload: index
  };
}

export function prevLyric(index) {
  return {
    type: "PREV_LYRIC",
    payload: index
  };
}
