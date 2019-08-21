import React from "react";
import { TextInputWrapper, TextAreaWrapper } from "./style";

const TextInput = props => <TextInputWrapper {...props} />;
const TextArea = props => <TextAreaWrapper {...props} />;

export { TextInput, TextArea };
