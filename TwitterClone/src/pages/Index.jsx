import TextInput from "../components/TextInput";
import styles from "./Index.module.css"
import Tweet from "../components/Tweet";
import { useIndex } from "../hooks/useIndex.page";

export default function Index() {

    const {
        text,
        onTextChange,
        maxLength,
        sendTweet,
        tweetList,
        tweet
    } = useIndex();

    return (
        <div>
            <h1 className={styles.pageTitle}>Curso de React</h1>
            <div className={styles.tweetContainer}>
                <img className={styles.avatar} src={tweet.user.picture}></img>
                <TextInput
                    placeholder={'O que está acontecendo?'}
                    maxLength={maxLength}
                    value={text}
                    onChange={onTextChange}
                />
            </div>
            <div className={styles.buttonContainer}>
                <div>{text.length} / {maxLength}</div>
                <button 
                className={styles.postButton} 
                onClick={sendTweet}
                disabled={text.length === 0}>Tweetar</button>
            </div>

            <ul className={styles.tweetList}>
                {tweetList.map(tweet => {
                    return (
                        <li className={styles.tweetListItem}>
                            <Tweet tweet={tweet} />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}