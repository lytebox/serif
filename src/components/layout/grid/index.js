import React from "react";
import PropTypes from "prop-types";
import { GridWrapper, ColWrapper, RowWrapper } from "./Styled";

const Grid = ({ children, justify, align, text }) => (
  <GridWrapper justify={justify} align={align} text={text}>
    {children}
  </GridWrapper>
);

Grid.propTypes = {
  children: PropTypes.node,
  align: PropTypes.string,
  justify: PropTypes.string,
  text: PropTypes.string
};

Grid.defaultProps = {
  children: null,
  align: null,
  justify: null,
  text: null
};

const Col = ({ children, lg, md, sm, xs, text, style }) => (
  <ColWrapper lg={lg} md={md} sm={sm} xs={xs} text={text} style={style}>
    {children}
  </ColWrapper>
);

Col.propTypes = {
  children: PropTypes.node,
  text: PropTypes.string,
  style: PropTypes.object,
  lg: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  md: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  sm: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  xs: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Col.defaultProps = {
  children: null,
  lg: null,
  md: null,
  sm: null,
  xs: null,
  text: null,
  style: null
};

const Row = ({ children }) => <RowWrapper>{children}</RowWrapper>;

Row.propTypes = {
  children: PropTypes.node
};

Row.defaultProps = {
  children: null
};

export { Grid, Col, Row };
