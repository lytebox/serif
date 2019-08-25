import React from "react";
import {
  ListContainer,
  ListWrapper,
  ListBackgroundColorWrapper,
  ListItemWrapper,
  ListItemButton
} from "./style";
import { Row } from "../../layout";

const SongListItem = props => {
  const { title, author, active, onClick, buttonLabel, buttonOnClick } = props;
  return (
    <ListBackgroundColorWrapper>
      <ListItemWrapper active={active} onClick={onClick}>
        <h3>{title}</h3>
        <p>{author}</p>
      </ListItemWrapper>
      {buttonLabel && buttonLabel.length > 0 && (
        <ListItemButton onClick={buttonOnClick} label={buttonLabel} />
      )}
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
  const {
    list,
    active,
    onClick,
    buttonLabel,
    buttonOnClick,
    searchFilter
  } = props;
  return (
    <ListContainer>
      <ListWrapper>
        {list &&
          list.map(
            (item, index) =>
              (!searchFilter ||
                searchFilter === "" ||
                (item &&
                  item.title &&
                  item.title
                    .toLowerCase()
                    .includes(searchFilter.toLowerCase()))) && (
                <SongListItem
                  {...item}
                  key={`sli${index}`}
                  onClick={() => onClick(index)}
                  active={index === active}
                  buttonLabel={buttonLabel}
                  buttonOnClick={() => buttonOnClick(index)}
                />
              )
          )}
      </ListWrapper>
    </ListContainer>
  );
};

const LyricList = props => {
  const { list, active, onClick } = props;

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
