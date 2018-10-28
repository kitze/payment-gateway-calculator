import emotion from 'react-emotion';
import * as A from 'styles/shared-components';

export const ProcessorCard = emotion(A.Card)({
  minWidth: '100%'
});

export const Name = emotion.div({
  fontSize: 16
});

export const Value = emotion.div({
  fontSize: 18,
  fontWeight: 'bold'
});
