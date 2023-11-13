import { useState } from "react";

export default function useVisualMode(initial) {
  const [history, setHistory] = useState([initial]); 

  // transition to a new mode
  function transition(newMode, replace = false){
    // add the new mode to our history
    // when replace is ture -> skipping occur
    setHistory(prev => replace ? [initial, newMode] : [...prev, newMode] ) 
  }

  function back () {
    // remove the last item in our history array if it's not the initial mode
    setHistory(prev => prev.length === 1 ? [...prev] : [...prev.slice(0, prev.length - 1)]); 
  }

  // mode is always going to be the last item of the history array
  return { mode: history[history.length - 1], transition, back };
}
