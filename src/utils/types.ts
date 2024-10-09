export type Layer = {
  name: string
  data: string
  img?: string
  fill?: string
  icon?: string
}

export interface RootState {
  gap: number
  player: Layer
  background: string
  activeLayer: Layer
  layers: Layer[]
  coin: Layer
  eraser: Layer
  brick: Layer
  currentEnvState: string
  messageOptions: Record<string, any>
}
