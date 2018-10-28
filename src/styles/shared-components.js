import { fixedHeight, fixedWidth, whiteish } from 'styles/mixins';
import emotion from 'react-emotion/macro';

import {
  Horizontal as $Horizontal,
  Vertical as $Vertical
} from 'styles/flex-components';

export const Horizontal = $Horizontal;
export const Vertical = $Vertical;

export const Space = emotion.div(({ size = 1 }) => ({
  ...fixedWidth(size * 5),
  ...fixedHeight(size * 5)
}));

export const Card = emotion.div({
  backgroundColor: whiteish(0.1),
  borderRadius: 5,
  padding: '15px 25px',
});

export const InputTitle = emotion.div({});

export const Input = emotion.input({
  outline: 'none',
  backgroundColor: whiteish(0.1),
  color: 'white',
  border: `1px solid ${whiteish(0.2)}`,
  padding: '10px 12px',
  borderRadius: 5,
  transition: 'all 100ms linear',
  '&:hover': {
    backgroundColor: whiteish(0.15),
    border: `1px solid ${whiteish(0.25)}`
  },
  '&:focus': {
    backgroundColor: whiteish(0.2),
    border: `1px solid ${whiteish(0.3)}`
  }
});

export const Button = emotion.button({
  display: 'flex',
  cursor: 'pointer',
  outline: 'none',
  backgroundColor: whiteish(0.1),
  color: 'white',
  border: `1px solid ${whiteish(0.2)}`,
  padding: '10px 12px',
  borderRadius: 5,
  transition: 'all 100ms linear',
  '&:hover': {
    backgroundColor: whiteish(0.15),
    border: `1px solid ${whiteish(0.25)}`
  },
  '&:active': {
    backgroundColor: whiteish(0.2),
    border: `1px solid ${whiteish(0.3)}`
  }
});
