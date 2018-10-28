import React from 'react';
import { useInput } from 'react-hanger';
import { maxBy, minBy } from 'lodash';
import { ThumbsDown, ThumbsUp } from 'react-feather';
import processors from 'config/payment-processors.json';

//styles
import * as S from './styles';
import * as A from 'styles/shared-components';

//components
import ProcessorCard from 'components/ProcessorCard';
import Difference from 'components/Difference';

const defaultSpace = 5;

const App = () => {
  const price = useInput(defaultSpace);
  const sales = useInput(10);
  const processorValues = processors.map(p => ({
    ...p,
    finalValue:
      parseFloat(price.value || 0) * sales.value * ((100 - p.percent) / 100) -
      p.fee * sales.value
  }));

  const highest = minBy(processorValues, 'finalValue');
  const lowest = maxBy(processorValues, 'finalValue');

  return (
    <S.App>
      <S.Wrapper>
        <A.Vertical>
          <S.Title>Compare payment gateways</S.Title>

          <A.Space size={defaultSpace} />

          <A.Horizontal spaceAll={15} centerV>
            <A.Vertical spaceAll={10}>
              <A.InputTitle>Price of app</A.InputTitle>
              <A.Input type="number" {...price.bindToInput} />
            </A.Vertical>
            <A.Vertical spaceAll={10}>
              <A.InputTitle>Sales</A.InputTitle>
              <A.Input type="number" {...sales.bindToInput} />
            </A.Vertical>
          </A.Horizontal>

          <A.Space size={defaultSpace} />

          <S.Title>Profit</S.Title>

          <A.Space size={defaultSpace} />

          <S.Processors>
            {processorValues.map(p => <ProcessorCard key={p.name} {...p} />)}
          </S.Processors>

          <A.Space size={defaultSpace} />
        </A.Vertical>
        <A.Vertical>
          <S.Title>Fees</S.Title>

          <A.Space size={defaultSpace} />

          {lowest &&
            highest && (
              <A.Horizontal centerV spaceAll={10}>
                {/* lowest */}

                <A.Card>
                  <A.Vertical centerV>
                    <A.Horizontal spaceAll={10} center>
                      <ThumbsUp />
                      <b>Lowest fees</b>
                    </A.Horizontal>
                    <A.Space size={3} />
                    <div>{lowest.name} </div>
                  </A.Vertical>
                </A.Card>

                <A.Space size={5} />

                {/* highest */}
                <A.Card>
                  <A.Vertical centerV>
                    <A.Horizontal center spaceAll={10}>
                      <ThumbsDown />
                      <b>Highest fees</b>
                    </A.Horizontal>
                    <A.Space size={3} />
                    <div> {highest.name}</div>
                  </A.Vertical>
                </A.Card>
              </A.Horizontal>
            )}

          <A.Space size={defaultSpace} />

          <S.Title>Check Difference</S.Title>
          <A.Space size={defaultSpace} />
          <Difference processorValues={processorValues} />
        </A.Vertical>
      </S.Wrapper>

      <S.MadeBy>
        <div>made by</div> <A.Space size={1} />
        <S.Link
          target="_blank"
          href="https://twitter.com/thekitze"
          rel="noopener"
        >
          @thekitze
        </S.Link>
      </S.MadeBy>
    </S.App>
  );
};

export default App;
