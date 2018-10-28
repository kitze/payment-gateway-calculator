import React, { Fragment } from 'react';
import { useStateful } from 'react-hanger';
import processors from 'config/payment-processors.json';

//styles
import * as S from './styles';
import * as A from 'styles/shared-components';

//components
import Select from 'components/Select';

const getProcessorsFromName = (processors, values) =>
  processors.map(p => values.find(v => v.name === p.value));

const processorOptions = processors.map(({ name }) => ({
  id: name,
  label: name
}));

function Difference({ processorValues }) {
  const first = useStateful();
  const second = useStateful();

  const [firstProcessor, secondProcessor] = getProcessorsFromName(
    [first, second],
    processorValues
  );

  return (
    <S.Difference>
      <A.Horizontal spaceAll={10} centerV>
        <div>Difference between</div>
        <Select
          options={processorOptions}
          disabledOptions={[second.value]}
          input={first}
        />
        <div>and</div>
        <Select
          options={processorOptions}
          disabledOptions={[first.value]}
          input={second}
        />
      </A.Horizontal>

      {firstProcessor &&
        secondProcessor &&
        do {
          const firstPrice = firstProcessor.finalValue;
          const secondPrice = secondProcessor.finalValue;
          const difference = Math.abs(firstPrice - secondPrice).toFixed(2);
          <Fragment>
            <A.Space size={3} />
            <S.Value>$ {difference}</S.Value>
          </Fragment>;
        }}
    </S.Difference>
  );
}

export default Difference;
