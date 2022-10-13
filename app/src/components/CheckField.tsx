import React from 'react';
import styled from 'styled-components'
import { Prefectures } from '../types/index'

type Props = {
  prefectures: Prefectures
  onChange: (name: string, prefName: number, check: boolean) => void
}

const SWrapper = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`

const SCard = styled.label`
  border-radius: 24px;
  border: solid 2px;
  padding: 8px;
  margin: 0.5rem;
  &:has(> input:checked) {
    background-color: #0077c7;
    color: #fff;
    font-weight: bold;
  }
`

const SInput = styled.input`
  display: none;
`

export const CheckField: React.FC<Props> = ({ prefectures, onChange }) => {
  return (
    <SWrapper>
      {prefectures.map((prefecture) => {
        return (
          <SCard key={prefecture.data.prefCode}>
            <SInput
              type="checkbox"
              name="PrefectureName"
              onChange={(e) => onChange(prefecture.data.prefName, prefecture.data.prefCode, e.target.checked)}
              checked={prefecture.checked}
            />
            {prefecture.data.prefName.length === 3
                ? ` ${prefecture.data.prefName}`
                : prefecture.data.prefName}
          </SCard>
        )
      })}
    </SWrapper>
  );
}