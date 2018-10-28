import React, { Component } from 'react';

//styles
import * as S from './styles';
import * as A from 'styles/shared-components';

function ProcessorCard({ name, finalValue }) {
  return (
    <S.ProcessorCard>
      <S.Name>{name}</S.Name>
      <A.Space size={2} />
      <S.Value>$ {finalValue.toFixed(2)}</S.Value>
    </S.ProcessorCard>
  );
}

export default ProcessorCard;
