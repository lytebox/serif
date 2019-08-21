import React from "react";
import { Grid, Col, Row } from "../../layout";
import { TextInput, TextArea, FullWidthButton } from "../../common";
import { NewSongViewWrapper } from "./style";

const NewSongView = props => {
  const { onNewSong } = props;

  const [title, setTitle] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const [copyright, setCopyright] = React.useState("");
  const [lyrics, setLyrics] = React.useState("");

  const validateForm = formData => {
    if (
      formData.title.length < 1 ||
      formData.author.length < 1 ||
      formData.copyright.length < 1 ||
      formData.lyrics.length < 1
    ) {
      // TODO: handle rejection
      console.log("Incomplete form!");
      return false;
    }

    const lyricsArray = formData.lyrics
      .trim()
      .split("\n\n")
      .map(lyric => lyric.trim());

    console.log(lyricsArray);

    return onNewSong({ ...formData, lyrics: lyricsArray });
  };

  return (
    <NewSongViewWrapper>
      <TextInput placeholder="Title" onChange={e => setTitle(e.target.value)} />
      <TextInput
        placeholder="Author"
        onChange={e => setAuthor(e.target.value)}
      />
      <TextInput
        placeholder="Copyright"
        onChange={e => setCopyright(e.target.value)}
      />
      <TextArea
        placeholder="Lyrics"
        onChange={e => setLyrics(e.target.value)}
      />
      <FullWidthButton
        onClick={() => validateForm({ title, author, copyright, lyrics })}
      >
        Save
      </FullWidthButton>
    </NewSongViewWrapper>
  );
};

export default NewSongView;
