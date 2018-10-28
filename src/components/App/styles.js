import emotion from 'react-emotion/macro';
import flex from 'styles/flex';
import {grid, whiteish} from 'styles/mixins';

const small = `@media only screen and (max-width: ${600}px)`;

export const App = emotion.div({
  ...flex.vertical,
  ...flex.centerVertical,
  color: 'white',
  flex: 1
});

export const MadeBy = emotion.div({
  ...flex.horizontal,
  ...flex.centerHorizontal,
  minHeight: 30,
  padding: 10,
  borderRadius: 8,
  height: 30,
  fontSize: 13,
  backgroundColor: '#1a1e24',
  color: whiteish(0.4),
  position: 'fixed',
  bottom: 30,
  right: 30,
  [small]: {
    position: 'initial',
    width: '100vw',
    margin: 'auto'
  }
});

export const Link = emotion.a({
  color: whiteish(0.8),
  cursor: 'pointer',
  transition: 'all 100ms linear',
  textDecoration: 'none',
  '&:hover': {
    color: whiteish(1)
  }
});

export const Processors = emotion.div({
  ...grid(1, { gap: 15 })
});

export const Title = emotion.div({
  fontSize: 22,
  fontWeight: 'bold'
});

export const Wrapper = emotion.div({
  maxWidth: 1000,
  padding: 30,
  margin: 'auto',
  flex: 1,
  ...grid(2, { gap: 50 }),
  [small]: {
    ...grid(1, { gap: 50 })
  }
});
