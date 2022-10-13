import React from 'react';
import styled from 'styled-components'

import { CheckField } from './CheckField'
import { Graph } from './Graph'

import { usePrefectures } from '../hooks/usePrefectures'

const SNode = styled.div`
  padding: 50px 0;
`

const SHeader = styled.h1`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  border-bottom: 3px solid #0077c7;
  padding: 8px 0;
  margin-bottom: 10px;
}
`

const SButton = styled.button`
  color: #fff;
  font-weight: bold;
  background-color: #0077c7;
  border-radius: 100vh;
  border: 1px solid #0077c7;
  padding: 8px;
  display: block;
  margin-left: auto;
  &:hover {
    background-color: #0068ae;
    border: 1px solid #0068ae;
  }
`

export const Main: React.FC = () => {
  const { prefectures, prefPopulation, handleChange, handleClickClearCheck} = usePrefectures()

  return (
    <>
      <SNode>
        <div style={{ width: "100%", maxWidth: "1240px", margin: "0 auto", display: "flex", borderBottom: "3px solid #0077c7", padding: "8px 0", marginBottom: "10px" }}>
          <h1 style={{ margin: "0"  }}>都道府県</h1>
          <SButton onClick={handleClickClearCheck}>一括チェックOFF</SButton>
        </div>
        {prefectures && <CheckField prefectures={prefectures} onChange={handleChange} />}
      </SNode>
      <SNode>
        <SHeader>人口推移グラフ</SHeader>
        <Graph populationData={prefPopulation} />
      </SNode>
    </>
  )
}