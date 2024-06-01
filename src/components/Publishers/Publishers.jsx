import { useLoaderData } from "react-router-dom";
import publisherImage from '../../assets/publisher.jpg';
import Publisher from "../Publisher/Publisher";

const Publishers = () => {
    const publisherData = useLoaderData();
    return (
        <div className="p-4">
            <h2 className="bg-slate-200 py-6 rounded-xl text-center text-3xl font-semibold mb-4">All Publishers</h2>
            <div className="sm:grid grid-cols-3 gap-4 space-y-4 sm:space-y-0">
                {
                    publisherData.map(book => <Publisher book={book} key={book.bookId} publisherImage={publisherImage}></Publisher>)
                }
            </div>
        </div>
    );
};

export default Publishers;