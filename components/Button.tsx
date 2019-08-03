import * as React from 'react';
import { Button as MUIButton } from '@material-ui/core';

export const Button: React.FC = ({children}) =>
    <MUIButton>{children}-suffix</MUIButton>;
