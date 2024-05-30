import { useLoaderData } from "react-router-dom";
import { getbooksFromLocalStorage } from "../../utilities/localStorage";
import { useEffect, useState } from "react";

const ListedBooks = () => {
    const bookData = useLoaderData();

    const [storedBooks, setStoredBooks] = useState([]);
    useEffect(() => {
        const getStoredBooks = getbooksFromLocalStorage();
        if (bookData) {
            const storedBook = bookData.filter(book => getStoredBooks.includes(book.bookId));
            console.log(storedBook);
        }




        setStoredBooks(getStoredBooks)
    }, [])

    return (
        <div>
            <h2>Listed Books: {storedBooks.length}</h2>
        </div>
    );
};

export default ListedBooks;