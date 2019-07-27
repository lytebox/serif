import React from "react";
import { ListContainer, ListWrapper, ListItemWrapper } from "./style";

const SongListItem = props => {
  const { title, author, active, onClick } = props;
  return (
    <ListItemWrapper active={active} onClick={onClick}>
      <h3>{title}</h3>
      <p>{author}</p>
    </ListItemWrapper>
  );
};

const LyricListItem = props => {
  const { text, active, onClick } = props;
  return (
    <ListItemWrapper active={active} onClick={onClick}>
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
  const { list, active, onClick } = props;

  return (
    <ListContainer>
      <ListWrapper>
        {list.map((item, index) => (
          <SongListItem
            {...item}
            onClick={() => onClick(index)}
            active={index === active}
          />
        ))}
      </ListWrapper>
    </ListContainer>
  );
};

const LyricList = props => {
  const { list, active, onClick } = props;

  return (
    <ListContainer>
      <ListWrapper>
        {list.map((item, index) => (
          <LyricListItem
            {...item}
            onClick={() => onClick(index)}
            active={index === active}
          />
        ))}
      </ListWrapper>
    </ListContainer>
  );
};

export { List, SongList, LyricList };
