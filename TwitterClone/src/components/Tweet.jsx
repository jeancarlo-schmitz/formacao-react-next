import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import styles from './Tweet.module.css';

export default function Tweet({tweet}){
    const publishedTonew = formatDistanceToNow(new Date(tweet.date), {
        locale: ptBR,
        addSufix: true
    });

    return (
        <div className={styles.tweetContainer}>
            <img className={styles.avatar} src={tweet.user.picture}></img>
            <div className={styles.user}>
                <span className={styles.userName}>{tweet.user.user}</span>
                <span className={styles.userUserName}>@{tweet.user.userName}</span>
                <span className={styles.date}>- há {publishedTonew}</span>
            </div>
            <div className={styles.tweetText}>
                {tweet.text}
            </div>
        </div>
    )
}