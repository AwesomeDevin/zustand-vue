import { create } from 'zustand-vue'
import { createBearSlice } from './bearslice'
import { createFishSlice } from './fishslice'
import { createBearFishSlice } from './multipleAction'

export const useBoundStore = create((...a) => ({
  ...createBearSlice(...a),
  ...createFishSlice(...a),
  ...createBearFishSlice(...a),
}))



