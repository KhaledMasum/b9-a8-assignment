import { useLoaderData } from "react-router-dom";
import { getReadBooksFromLocalStorage, getWishlistBooksFromLocalStorage } from "../../utilities/localStorage";
import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { IoIosArrowDown } from "react-icons/io";
import ReadBooks from "../ReadBooks/ReadBooks";
import WishlistBooks from "../WishlistBooks/WishlistBooks";

const ListedBooks = () => {
    const bookData = useLoaderData();

    const [storedReadBooks, setStoredBooks] = useState([]);
    const [storedWishlistBooks, setStoredWishlistBooks] = useState([]);

    const [displayReadBooks, setDisplayBooks] = useState([]);
    // const [displayWishlistBooks, setDisplayWishlistBooks] = useState([]);

    useEffect(() => {
        const getStoredReadBooks = getReadBooksFromLocalStorage();
        const getStoredWishlistBooks = getWishlistBooksFromLocalStorage();
        if (bookData) {
            const storedBook = bookData.filter(book => getStoredReadBooks.includes(book.bookId));
            setStoredBooks(storedBook);
            setDisplayBooks(storedBook);

            const storedWishlistBook = bookData.filter(book => getStoredWishlistBooks.includes(book.bookId));
            setStoredWishlistBooks(storedWishlistBook);
        }
    }, [bookData]);

    const handleBookFilter = sort => {
        let sortedBooks = [...storedReadBooks];

        if (sort === 'pageNumber') {
            sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
        } else if (sort === 'rating') {
            sortedBooks.sort((a, b) => b.rating - a.rating);
        } else if (sort === 'publishedYear') {
            sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        }

        setDisplayBooks(sortedBooks);
    }

    return (
        <div className="p-4 sm:p-0">
            <h2 className="bg-slate-200 py-6 rounded-xl text-center text-3xl font-semibold">Books</h2>
            <div className="flex justify-center my-4">
                <details className="dropdown">
                    <summary className="m-1 btn bg-[#23BE0A] text-white min-h-10 h-10">Sort By<span className="font-extrabold text-lg"><IoIosArrowDown /></span></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={() => handleBookFilter('pageNumber')}><a>Number of Pages</a></li>
                        <li onClick={() => handleBookFilter('rating')}><a>Rating</a></li>
                        <li onClick={() => handleBookFilter('publishedYear')}><a>Published Year</a></li>
                    </ul>
                </details>
            </div>

            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel >
                    <div className="space-y-4">
                        {
                            displayReadBooks.map(storedBook => <ReadBooks storedBook={storedBook} key={storedBook.bookId}></ReadBooks>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="space-y-4">
                        {
                            storedWishlistBooks.map(storedWishlistBook => <WishlistBooks storedWishlistBook={storedWishlistBook} key={storedWishlistBook.bookId}></WishlistBooks>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;