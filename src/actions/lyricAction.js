export function inputLyric({ title, author, copyright, lyrics }) {
  return {
    type: "INPUT_SONG",
    payload: { title, author, copyright, lyrics }
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
