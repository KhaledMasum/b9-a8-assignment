import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getReadBooksFromLocalStorage, storeBooks, getWishlistBooksFromLocalStorage, storeWishlistBooks } from "../../utilities/localStorage";
import { useEffect, useState } from "react";

const BookDetails = () => {
    const [storedBooks, setStoredBooks] = useState([]);
    const [storedWishlistBooks, setStoredWishlistBooks] = useState([]);

    useEffect(() => {
        const getStoredBooks = getReadBooksFromLocalStorage();
        setStoredBooks(getStoredBooks);

        const getWishlistStoredBooks = getWishlistBooksFromLocalStorage();
        setStoredWishlistBooks(getWishlistStoredBooks);
    }, []);

    const bookData = useLoaderData();
    const { bookId } = useParams();
    const bookIdNumber = parseInt(bookId);
    const book = bookData.find(book => book.bookId === bookIdNumber);

    const handleRead = (id) => {
        if (!storedBooks.includes(id)) {
            storeBooks(id);
        }
    }

    const handleWishlist = (id) => {
        if (!storedWishlistBooks.includes(id)) {
            storeWishlistBooks(id);
        }
    }

    return (
        <div>
            <div className="card grid sm:grid-cols-2 lg:card-side bg-base-100 shadow-xl">
                <figure><img src={book.image} className="h-full" alt="Album" /></figure>
                <div className="card-body p-4">
                    <ToastContainer />
                    <h2 className="card-title">{book.bookName}</h2>
                    <p className="text-sm">By : {book.author}</p>
                    <hr className="border-t-1 border-slate-400" />
                    <p className="text-sm">{book.category}</p>
                    <hr className="border-t-1 border-slate-400" />
                    <p className="text-sm">Review: {book.review}</p>
                    <div className='flex gap-4'>
                        {
                            book.tags.map((tag, idx) => <p key={idx} className="text-sm bg-slate-200 px-3 py-1 rounded-md text-[#23BE0A]">Tag {tag}</p>)
                        }
                    </div>
                    <hr className="border-t-1 border-slate-400" />
                    <div className="grid grid-cols-3">
                        <p className="text-sm">Number of Pages:</p>
                        <p>{book.totalPages}</p>
                    </div>
                    <div className="grid grid-cols-3">
                        <p className="text-sm">Publisher:</p>
                        <p>{book.publisher}</p>
                    </div>
                    <div className="grid grid-cols-3">
                        <p className="text-sm">Year of Publishing:</p>
                        <p>{book.yearOfPublishing}</p>
                    </div>
                    <div className="grid grid-cols-3">
                        <p className="text-sm">Rating:</p>
                        <p>{book.rating}</p>
                    </div>
                    <div className="card-actions justify-start">
                        <button onClick={() => handleRead(bookIdNumber)} className="btn bg-white text-black hover:text-[#23BE0A] border-slate-300 hover:bg-[#E2E8F0] hover:border-[#fff]">Read</button>
                        <button onClick={() => handleWishlist(bookIdNumber)} className="btn bg-[#59C6D2] text-white hover:text-[#59C6D2] hover:bg-[#E2E8F0] hover:border-[#fff]">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;