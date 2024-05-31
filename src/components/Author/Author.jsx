import PropTypes from 'prop-types';
const Author = ({ book, authorImage }) => {
    const { author } = book;
    return (
        <div className="card bg-base-100 shadow-xl border border-slate-100">
            <div className="card-body flex flex-col items-center">
                <img src={authorImage} className="h-16 w-16" alt="" />
                <h2 className="card-title">{author}</h2>
            </div>
        </div>
    );
};

Author.propTypes = {
    book: PropTypes.object,
    authorImage: PropTypes.object
};

export default Author;