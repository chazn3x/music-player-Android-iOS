import { useState } from "react"

export const usePlayer = () => {
  const [playing, setPlaying] = useState(false)

  const playPause = () => {
    setPlaying(play => {
      console.log('Music playing: ', !play);
      return !play
    })
  }

  const nextSong = () => {
    console.log('Next song');
  }

  return {
    playPause,
    playing,
    nextSong
  }
}