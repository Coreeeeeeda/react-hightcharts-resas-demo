export interface Prefecture {
  prefCode: number
  prefName: string
}

export type Prefectures = {
  data: Prefecture
  checked: boolean
}[]

export type PrefPopulation = {
  prefName: string;
  data: {
    year: number;
    value: number;
  }[]
}[]