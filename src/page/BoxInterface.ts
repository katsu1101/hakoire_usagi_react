export interface BoxInterface {
  name: string // なまえ
  usage?: string[] // くるかも
  coin?: number // ショップ
  status?: StatusInterface // ステータス
}

export interface StatusInterface {
  str?: string // ちから
  vit?: string // げんき
  spd?: string // はやさ
  int?: string // かしこさ
  dex?: string // きようさ
  cha?: string // カリスマ
}
