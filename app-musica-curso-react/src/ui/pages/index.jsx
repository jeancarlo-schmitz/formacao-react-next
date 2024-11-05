import { useContext } from "react";
import AudioPlayer from "../components/data-display/AudioPlayer/AudioPlayer";
import MusicList from "../components/data-display/MusicList/MusicList";
import styles from "./index.module.css";
import { AppContext } from "../../App";


export default function Index(){
    const {
        selectedMusic,
        musicList,
        time,
        setTime,
        selectMusic} = useContext(AppContext);

    return (
        <div className={styles.pageContainer}>
            <MusicList 
                musics={musicList} 
                selectedMusic={selectedMusic}
                OnSelect={selectMusic}
            />
            <AudioPlayer music={selectedMusic} onComplete={() => {}}/>
        </div>
    )
}