import PropTypes from 'prop-types';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { bookId, image, tags, bookName, author, category, rating } = book;
    return (
        <Link to={`/book-details/${bookId}`} className="card bg-base-100 shadow-xl border border-slate-300 p-4" id='book-card'>
            <figure>
                <img src={image} alt="Recipes" className="rounded-xl" />
            </figure>
            <div className="space-y-2 pt-4">
                <div className='flex gap-4'>
                    {
                        tags.map((tag, idx) => <p key={idx} className="text-sm bg-slate-200 px-3 py-1 rounded-md text-[#23BE0A]">{tag}</p>)
                    }
                </div>
                <h2 className="card-title font-semibold">{bookName}</h2>
                <p className="text-sm">By: {author}</p>
                <hr className="border-t-1 border-dashed border-slate-400" />
                <div className="flex justify-between">
                    <div className="flex items-center gap-2 text-sm">
                        <span>{category}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        <span>{rating}</span>
                        <FaStar />
                    </div>
                </div>
            </div>
        </Link>
    );
};

Book.propTypes = {
    book: PropTypes.object,
};

export default Book;