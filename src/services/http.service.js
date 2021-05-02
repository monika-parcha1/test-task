import { Dispatch } from "redux";

export const GET = (url = "https://api.spacexdata.com/v3/launches", type) => {
    fetch("https://api.spacexdata.com/v3/launches").then(result => {
        console.log(result);
    }).catch(error => {
        console.log(error);
    })
}