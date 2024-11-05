import { useState } from "react";

export function useIndex(){
    const [text, setText] = useState('');
    const [tweetList, setTweetList] = useState([]);

    const maxLength = 125;
    const tweet = {
        date: new Date(),
        text: text,
        user: {
            name: "Strolker",
            userName: "strolker",
            picture: 'https://avatars.githubusercontent.com/u/11407906?v=4'
        }
    }

    function onTextChange(event) {
        const text = event.target.value;

        if (text.length <= maxLength) {
            setText(text);
        }
    }

    function sendTweet() {
        setTweetList([...tweetList, tweet]);
    }

    return {
        text,
        onTextChange,
        maxLength,
        sendTweet,
        tweetList,
        tweet
    }
}