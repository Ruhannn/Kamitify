import { useState } from "react";
import Header from "./Components/Header";
import Tracks from "./Components/Tracks";

export default function App() {
  const [selectedHowl, setSelectedHowl] = useState(null);
  const [playing, setPlaying] = useState(false);

  return (
    <div className="min-h-screen text-sm bg-background text-textFaded">
      <Header
        playing={playing}
        setPlaying={setPlaying}
        selectedHowl={selectedHowl}
      />
      <Tracks
        playing={playing}
        setPlaying={setPlaying}
        selectedHowl={selectedHowl}
        setSelectedHowl={setSelectedHowl}
      />
    </div>
  );
}
