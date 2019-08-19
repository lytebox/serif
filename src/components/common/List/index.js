import React from "react";
import {
  ListContainer,
  ListWrapper,
  ListBackgroundColorWrapper,
  ListItemWrapper,
  ListItemButtonPlus
} from "./style";
import { Row } from "../../layout";

const SongListItem = props => {
  const { title, author, active, onClick, onButtonClick } = props;
  return (
    <ListBackgroundColorWrapper>
      <ListItemWrapper active={active} onClick={onClick}>
        <h3>{title}</h3>
        <p>{author}</p>
      </ListItemWrapper>
      <ListItemButtonPlus onClick={onButtonClick} />
    </ListBackgroundColorWrapper>
  );
};

const LyricListItem = props => {
  const { text, active, onClick, addMargin } = props;
  return (
    <ListBackgroundColorWrapper>
      <ListItemWrapper active={active} onClick={onClick} addMargin={addMargin}>
        {text.split("\n").map((line, idx) =>
          line.indexOf("[") === 0 ? (
            <p key={`liw_p${idx}`}>
              <b>
                <u>{line}</u>
              </b>
            </p>
          ) : (
            <p key={`liw_p${idx}`}>{line}</p>
          )
        )}
      </ListItemWrapper>
    </ListBackgroundColorWrapper>
  );
};

const List = props => {
  const { children } = props;

  return (
    <ListContainer>
      <ListWrapper>
        {children.map((child, idx) => (
          <ListItemWrapper key={`liw${idx}`}>{child}</ListItemWrapper>
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
        {list &&
          list.map((item, index) => (
            <SongListItem
              {...item}
              key={`sli${index}`}
              onClick={() => onClick(index)}
              active={index === active}
            />
          ))}
      </ListWrapper>
    </ListContainer>
  );
};

const LyricList = props => {
  const { list, active, onClick, onButtonClick } = props;

  return (
    <ListContainer>
      <ListWrapper>
        {list.map(
          (item, index) =>
            item.trim().length > 0 && (
              <LyricListItem
                key={`lli${index}`}
                text={item.trim()}
                onClick={() => onClick(index)}
                onButtonClick={() => onButtonClick(index)}
                active={index === active}
                addMargin={index > 0 && list[index - 1].trim().length < 1}
              />
            )
        )}
      </ListWrapper>
    </ListContainer>
  );
};

export { List, SongList, LyricList };
