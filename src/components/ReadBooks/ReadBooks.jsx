import PropTypes from 'prop-types';
import { CiLocationOn } from "react-icons/ci";
import { FaUserFriends } from "react-icons/fa";
import { RiPagesLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

const ReadBooks = ({ storedBook }) => {
    return (
        <div className="card card-side bg-base-100 shadow-xl grid sm:grid-cols-4">
            <figure><img className="rounded-l-lg" src={storedBook.image} alt="Movie" /></figure>
            <div className="card-body col-span-3 p-4">
                <h2 className="card-title">{storedBook.bookName}</h2>
                <p className="text-sm">By : {storedBook.author}</p>
                <div className="flex gap-4">
                    <div className='flex gap-4'>
                        {
                            storedBook.tags.map((tag, idx) => <p key={idx} className="text-sm bg-slate-200 px-3 py-1 rounded-md text-[#23BE0A]">Tag {tag}</p>)
                        }
                    </div>
                    <div className="flex gap-2 items-center">
                        <CiLocationOn />
                        <p className="text-sm">Year of Publishing: {storedBook.yearOfPublishing}</p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="flex gap-2 items-center">
                        <FaUserFriends />
                        <p className="text-sm">Publisher: {storedBook.publisher}</p>
                    </div>

                    <div className="flex gap-2 items-center">
                        <RiPagesLine />
                        <p className="text-sm">Page: {storedBook.totalPages}</p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <span className="text-sm bg-[#328EFF26] px-3 py-1 rounded-md text-[#328EFF]">Category: {storedBook.category}</span>
                    <span className="text-sm bg-[#FFAC3326] px-3 py-1 rounded-md text-[#FFAC33]">Rating: {storedBook.rating}</span>
                    <Link to={`/book-details/${storedBook.bookId}`} className="text-sm bg-[#23BE0A] px-3 py-1 rounded-md text-white" >View Details</Link>
                </div>
            </div>
        </div>
    );
};

ReadBooks.propTypes = {
    storedBook: PropTypes.object,
};

export default ReadBooks;