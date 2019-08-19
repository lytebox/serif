import React from "react";
import { ButtonWrapper, FullWidthButtonWrapper } from "./style";

const Button = props => <ButtonWrapper {...props} />;
const FullWidthButton = props => <FullWidthButtonWrapper {...props} />;

export { Button, FullWidthButton };
