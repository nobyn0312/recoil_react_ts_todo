import { atom } from "recoil";

// Recoil reduxでいうとstore state的な 状態の格納
export const inputTitleState = atom<string>({
  key:"inputTitleState",
  default:"default input"
})