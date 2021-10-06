import React, { useContext, useState } from 'react';
import { BookContext } from '../context/BookContext';

const BookForm = () => {
    const { dispatch } = useContext(BookContext)
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const submitHandler = e => {
        e.preventDefault()
        dispatch({
            type : "ADD_BOOK", book : {
                title, author
            }
        })
        setAuthor("")
        setTitle("")
       
    }
    return ( 
        <form onSubmit={submitHandler}>
            <input type="text" placeholder="Book Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder="Author name" value={author} onChange={(e) => setAuthor(e.target.value)} />
            <input type="submit" value="Add" />
        </form>
     );
}
 
export default BookForm;
