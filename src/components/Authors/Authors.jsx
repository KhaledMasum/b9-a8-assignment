import { useLoaderData } from "react-router-dom";
import authorImage from '../../assets/pen.jpg';
import Author from "../Author/Author";

const Authors = () => {
    const bookData = useLoaderData();

    return (
        <div className="p-4">
            <h2 className="bg-slate-200 py-6 rounded-xl text-center text-3xl font-semibold mb-4">All Authors</h2>
            <div className="sm:grid grid-cols-3 gap-4 space-y-4 sm:space-y-0">
                {
                    bookData.map(book => <Author book={book} key={book.bookId} authorImage={authorImage}></Author>)
                }
            </div>
        </div>
    );
};

export default Authors;