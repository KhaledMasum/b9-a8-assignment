import PropTypes from 'prop-types';
const Publisher = ({ book, publisherImage }) => {
    const { publisher } = book;
    return (
        <div className="card bg-base-100 shadow-xl border border-slate-100">
            <div className="card-body flex flex-col items-center">
                <img src={publisherImage} className="h-16 w-16" alt="" />
                <h2 className="card-title">{publisher}</h2>
            </div>
        </div>
    );
};

Publisher.propTypes = {
    book: PropTypes.object,
    publisherImage: PropTypes.object
};

export default Publisher;