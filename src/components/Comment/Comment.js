import React,{useState} from 'react';
import Card from '../UI/Card';
import classes from './Comment.module.css';
import Form from '../Form/Form'

const Comment = (props) => {

    const [save, setSave] = useState([]);

    const saveHandler = (data) => {
        setSave([...save, data])
    }


    
    return (
            <Card >
                <div className={classes.comments}>
                    <h1>Comments</h1>
                    {save.map((el) => (<p>{el.texts} {el.date}</p>))}
                </div>
                <Form onSave={saveHandler}/>
            </Card>
    )
}
export default Comment;