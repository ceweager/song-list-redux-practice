import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    {
      title: "macarena",
      duration: "4.55"
    },
    {
      title: "all star",
      duration: "1.34"
    },
    {
      title: "I want it that way",
      duration: "2.30"
    }
  ]
};


const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SELECT_SONG") {
    return action.payload;
  };
  return selectedSong;
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})