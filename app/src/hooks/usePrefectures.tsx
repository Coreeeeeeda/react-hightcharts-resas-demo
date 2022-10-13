import axios from 'axios'

import { useState, useEffect } from 'react'

import { Prefecture, Prefectures, PrefPopulation } from '../types/index'

export const usePrefectures = () => {
  const [prefectures, setPrefectures] = useState<Prefectures>([]);
  const [prefPopulation, setPrefPopulation] = useState<PrefPopulation>([]);

  useEffect(() => {
    axios
      .get(
        "https://opendata.resas-portal.go.jp/api/v1/prefectures",
        { headers: { "X-API-KEY": process.env.REACT_APP_API_KEY } }
      )
      .then((res) => {
        const prefectures = res.data.result.map((x: Prefecture) => {
          return {
            data: x,
            checked: false
          }
        })

        setPrefectures(prefectures)
      })
      .catch((errors) => {})
  }, []);

  const handleChange = (prefName: string, prefCode: number, check: boolean) => {
    const list = [...prefectures]
    const s = list.filter((s) => s.data.prefName === prefName)[0]

    s.checked = !s.checked
    setPrefectures(list)

    let c_prefPopulation = prefPopulation.slice();

    if (check) {
      if (c_prefPopulation.findIndex((value) => value.prefName === prefName) !== -1) return;

      axios
        .get(
          `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${String(prefCode)}`,
          { headers: { "X-API-KEY": process.env.REACT_APP_API_KEY } }
        )
        .then((res) => {
          const data = res.data.result.data[0].data;
          c_prefPopulation.push({ prefName: prefName, data: data })
          setPrefPopulation(c_prefPopulation)
        })
        .catch((error) => { return })
    }
    else
    {
      const deleteIndex = c_prefPopulation.findIndex((value) => value.prefName === prefName)
      if (deleteIndex === -1) return
      c_prefPopulation.splice(deleteIndex, 1)
      setPrefPopulation(c_prefPopulation)
    }
  }

  const handleClickClearCheck = () => {
    const checkBoxes = [...prefectures]

    checkBoxes.forEach((x) => {
      x.checked = false
    })

    setPrefectures(checkBoxes)
    setPrefPopulation([])
  }

  return {
    prefectures,
    prefPopulation,
    handleChange,
    handleClickClearCheck
  }
}