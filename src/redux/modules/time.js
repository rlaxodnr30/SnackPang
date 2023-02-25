import { createSlice } from "@reduxjs/toolkit";

//현재날짜
const dates = new window.Date();
const year = dates.getFullYear();
const month = ("0" + (dates.getMonth() + 1)).slice(-2);
const day = ("0" + dates.getDate()).slice(-2);
const dateStr = year + "-" + month + "-" + day;
// 시간
const hours = ("0" + dates.getHours()).slice(-2);
const minutes = ("0" + dates.getMinutes()).slice(-2);
const seconds = ("0" + dates.getSeconds()).slice(-2);
const timeStr = hours + ":" + minutes + ":" + seconds;
const today = dateStr + "  " + timeStr;
console.log(today);

const initialState = today;

const todaySlice = createSlice({
  name: "today",
  initialState,
});

export default todaySlice.reducer;
