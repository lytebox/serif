import React from "react";
import { ListContainer, ListWrapper, ListItemWrapper } from "./style";

const SongListItem = props => {
  const { title, author } = props;
  return (
    <ListItemWrapper>
      <h3>{title}</h3>
      <p>{author}</p>
    </ListItemWrapper>
  );
};

const LyricListItem = props => {
  const { text } = props;
  return (
    <ListItemWrapper>
      {text.split("\n").map(line => (
        <p>{line}</p>
      ))}
    </ListItemWrapper>
  );
};

const List = props => {
  const { children } = props;

  return (
    <ListContainer>
      <ListWrapper>
        {children.map(child => (
          <ListItemWrapper>{child}</ListItemWrapper>
        ))}
      </ListWrapper>
    </ListContainer>
  );
};

const SongList = props => {
  const { list } = props;

  return (
    <ListContainer>
      <ListWrapper>
        {list.map(item => (
          <SongListItem {...item} />
        ))}
      </ListWrapper>
    </ListContainer>
  );
};

const LyricList = props => {
  const { list } = props;

  return (
    <ListContainer>
      <ListWrapper>
        {list.map(item => (
          <LyricListItem {...item} />
        ))}
      </ListWrapper>
    </ListContainer>
  );
};

export { List, SongList, LyricList };
