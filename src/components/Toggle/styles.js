import emotion from 'react-emotion/macro';
import flex from 'styles/flex';
import { whiteish } from 'styles/mixins';

export const Background = emotion.div(
  {
    width: '100%',
    height: '60%',
    backgroundColor: whiteish(0.2),
    borderRadius: 5,
    transition: 'all 100ms linear'
  },
  ({ on }) => ({
    ...(on && {
      backgroundColor: whiteish(0.5)
    }),
    ...(!on && {
      '&:hover': {
        backgroundColor: whiteish(0.25)
      }
    })
  })
);

export const Ball = emotion.div(
  {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    borderRadius: '100%',
    transition: 'all 100ms linear'
  },
  ({ on, ballSize, width }) => ({
    width: ballSize,
    height: ballSize,
    backgroundColor: whiteish(1),
    ...(on && {
      transform: `translateX(${width - ballSize + 1}px)`,
      backgroundColor: '#3f51b5'
    })
  })
);

export const Toggle = emotion.div(
  {
    ...flex.vertical,
    ...flex.centerVertical,
    position: 'relative',
    cursor: 'pointer'
  },
  ({ width, height }) => ({
    width,
    height
  })
);
