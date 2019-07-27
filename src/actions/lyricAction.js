export function inputLyric({ title, author, lyrics, notes }) {
  return {
    type: "INPUT_SONG",
    payload: { title, author, lyrics, notes }
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

export function showLyric(lyric) {
  return {
    type: "SHOW_LYRIC",
    payload: lyric
  };
}
