import { toast } from 'react-toastify';

const getReadBooksFromLocalStorage = () => {
    let books = [];
    const getBooks = localStorage.getItem('read-books');
    if (getBooks) {
        books = JSON.parse(getBooks);
    }
    return books;
}

const getWishlistBooksFromLocalStorage = () => {
    let books = [];
    const getBooks = localStorage.getItem('wishlist-books');
    if (getBooks) {
        books = JSON.parse(getBooks);
    }
    return books;
}

const storeBooks = (id) => {
    const storedBooksData = getReadBooksFromLocalStorage();
    const alreadyStored = storedBooksData.find(storedBook => storedBook === id);
    if (!alreadyStored) {
        storedBooksData.push(id);
        localStorage.setItem('read-books', JSON.stringify(storedBooksData))
        toast("Book added to Read list");
    } else {
        return toast.error("You already read this book");
    }
}

const storeWishlistBooks = (id) => {
    const storedWishlistBooksData = getWishlistBooksFromLocalStorage();
    const alreadyWishlisted = storedWishlistBooksData.find(wishlistedBook => wishlistedBook === id);

    const storedBooksData = getReadBooksFromLocalStorage();
    const alreadyRead = storedBooksData.find(readBook => readBook === id);

    if (alreadyRead) {
        return toast.error("You already read this book");
    } else if (!alreadyWishlisted) {
        storedWishlistBooksData.push(id);
        localStorage.setItem('wishlist-books', JSON.stringify(storedWishlistBooksData))
        toast("Book added to Wishlist");
    }
    else {
        return toast.error("Book already added to the wishlist");
    }
}

export { getReadBooksFromLocalStorage, getWishlistBooksFromLocalStorage, storeBooks, storeWishlistBooks }