import { atom } from "recoil";

export const myJobQuestionAtom = atom({
    key: "myJobQuestionAtom",
    default: "",
});

export const myJobAtom = atom({
    key: "myJobAtom",
    default: {
        myPart:"",
        myJob: ""
    },
});




