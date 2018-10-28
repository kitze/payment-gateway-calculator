import emotion from 'react-emotion';
import { whiteish } from 'styles/mixins';

export const Select = emotion.select({
  appearance: 'none',
  outline: 'none',
  backgroundColor: whiteish(0.1),
  color: 'white',
  textAlign: 'center',
  border: `1px solid ${whiteish(0.2)}`,
  padding: '8px',
  borderRadius: 5,
  transition: 'all 100ms linear',
  '&:hover': {
    backgroundColor: whiteish(0.15),
    border: `1px solid ${whiteish(0.25)}`
  }
});

export const Option = emotion.option({});
