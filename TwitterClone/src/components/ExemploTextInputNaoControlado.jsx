import { useRef, useState } from 'react'
import styles from './TextInput.module.css'

export default function TextInput ({placeholder = 'O que está Acontecendo', maxLength = 125, ...props}){
    const [text, setText] = useState('');
    const inputText = useRef();


    function onTextChange(event){
        const text = event.target.value;

        if(text.length <= maxLength){
            setText(text);
        }
    }

    return (
        <div>
            <textarea 
                ref={inputText}
                className={styles.input} 
                placeholder={placeholder} 
                maxLength={maxLength} 
                value={text} 
                onChange={onTextChange} 
                defaultValue={10}
                {...props}
            />
            <p>{text.length} / {maxLength}</p>
            <button onClick={() => console.log(inputText.current.value)}>Teste</button>
        </div>
    )
}