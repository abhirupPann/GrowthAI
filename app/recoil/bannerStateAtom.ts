import { atom } from "recoil";

export const bannerBgState = atom({
    key: "bannerBgState",
    default: "null"
})
export const bannerImgState = atom({
    key: "bannerImgState",
    default: "/bannerimage/img1.jpg"
})
export const bannerTitleState = atom({
    key: "bannerTitleState",
    default: "Title"
})
export const bannerDesState = atom({
    key: "bannerDesState",
    default: "Description"
})