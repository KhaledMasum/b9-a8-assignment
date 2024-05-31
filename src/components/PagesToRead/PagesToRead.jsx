import { useLoaderData } from "react-router-dom";
import { BarChart, XAxis, YAxis, CartesianGrid, Bar, Tooltip, Legend } from 'recharts';
import { getReadBooksFromLocalStorage } from "../../utilities/localStorage";
import { useEffect, useState } from "react";


const PagesToRead = () => {
    const bookData = useLoaderData();

    const [storedReadBooks, setStoredBooks] = useState([]);

    useEffect(() => {
        const getStoredReadBooks = getReadBooksFromLocalStorage();
        if (bookData) {
            const storedBook = bookData.filter(book => getStoredReadBooks.includes(book.bookId));
            setStoredBooks(storedBook);
        }
    }, [bookData]);

    // console.log(storedReadBooks);

    return (
        <div className="flex justify-center">
            <BarChart width={700} height={450} data={storedReadBooks}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="bookName" />
                <YAxis dataKey="totalPages" />
                <Tooltip />
                <Legend />
                <Bar dataKey="totalPages" fill="#8884d8" />
                {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
            </BarChart>
        </div>
    );
};

export default PagesToRead;