import React from 'react';

//styles
import * as S from './styles';

const sizes = {
  small: {
    width: 27,
    height: 15,
    ballSize: 15
  },
  normal: {
    width: 40,
    height: 20,
    ballSize: 20
  }
};

function Toggle({ toggle, size = 'normal' } = {}) {
  const styleProps = {
    ...sizes[size],
    on: toggle.value
  };

  return (
    <S.Toggle {...styleProps} onClick={toggle.toggle}>
      <S.Background {...styleProps} />
      <S.Ball {...styleProps} />
    </S.Toggle>
  );
}

export default Toggle;
