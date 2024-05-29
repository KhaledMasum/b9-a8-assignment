import PropTypes from 'prop-types';
import { FaStar } from "react-icons/fa";

const Book = ({ book }) => {
    const { image, tags, bookName, author, category, rating } = book;
    return (
        <div className="card bg-base-100 shadow-xl border border-slate-300 p-4">
            <figure>
                <img src={image} alt="Recipes" className="rounded-xl" />
            </figure>
            <div className="space-y-2 pt-4">
                <h2 className="card-title font-semibold">Ingredients: {tags.length}</h2>
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
                {/* <button onClick={() => handleWantToCook(recipe)} className="btn bg-[#0BE58A] hover:bg-[#0be58ecd] border-none rounded-3xl text-black min-h-10 h-10 font-normal">Want to Cook</button> */}
            </div>
        </div>
    );
};

Book.propTypes = {
    book: PropTypes.object,
};

export default Book;