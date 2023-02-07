import { createBearSlice } from './bearslice'
import { createFishSlice } from './fishslice'

export const createBearFishSlice = (set) => ({
  addBearAndFish: () => {
    createBearSlice(set).addBear()
    createFishSlice(set).addFish()
  },
})