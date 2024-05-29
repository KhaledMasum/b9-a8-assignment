import { useEffect, useState } from 'react'
import Book from '../Book/Book';

const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('bookData.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <div>
            <h2 className="font-semibold text-4xl text-center my-4">Books: {books.length}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 sm:p-0">
                {
                    books.map(book => <Book book={book} key={book.bookId}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;