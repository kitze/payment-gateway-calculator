import React from 'react';

//styles
import * as S from './styles';

function Select({ onChange, options, input, disabledOptions = [] }) {
  return (
    <S.Select
      onChange={e => input.setValue(e.target.value)}
      value={input.value}
    >
      <S.Option value="">Select</S.Option>
      {options.map(({ id, label }) => (
        <S.Option
          key={id}
          disabled={disabledOptions.some(d => d && d === label)}
          value={label}
        >
          {id}
        </S.Option>
      ))}
    </S.Select>
  );
}

export default Select;
