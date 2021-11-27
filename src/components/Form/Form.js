import React,{useState} from 'react';
import Card from '../UI/Card';

const Form = (props) => {
    
    const [texts, setText] = useState('');
    const [date, setDate] = useState('');

    const inputTextHundler = (e) => {
        setText(e.target.value)
    }
    const inputDateHundler = (e) => {
        setDate(e.target.value)
    }

    const btnHundler = (e) => {
        e.preventDefault();
        
        let data = {
            texts,
            date
        }

        setText('');
        setDate('');

        props.onSave(data);
    }
    


    return (
        <Card>
            <form onSubmit={btnHundler}>
                <input onChange={inputTextHundler} type='text' />
                <input onChange={inputDateHundler}type='date'/>
                <button type='submit'>Add comment</button>
            </form>
        </Card>
    )
}
export default Form;