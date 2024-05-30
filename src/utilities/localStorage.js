const getbooksFromLocalStorage = () => {
    const getBooks = localStorage.getItem('book-details');
    if (getBooks) {
        const getBooksJson = JSON.parse(getBooks);
        return getBooksJson;
    }
    return [];
}

const storeBooks = (id) => {
    const storedBooksData = getbooksFromLocalStorage();
    const alreadyStored = storedBooksData.find(storedBook => storedBook === id);
    if (!alreadyStored) {
        storedBooksData.push(id);
        localStorage.setItem('book-details', JSON.stringify(storedBooksData))
    }
}

export { getbooksFromLocalStorage, storeBooks }