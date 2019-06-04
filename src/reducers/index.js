import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Pour Some Sugar On Me", duration: "4:05" },
    { title: "All Start", duration: "2:55" },
    { title: "I Want It That Way", duration: "4:35" },
    { title: "Still Of The Night", duration: "6:13" },
    { title: "Panama", duration: "3:56" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
