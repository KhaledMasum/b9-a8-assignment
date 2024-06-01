import { NavLink } from 'react-router-dom';
import BannerImg from '../../assets/banner-book.jpg'

const Banner = () => {
    return (
        <div>
            <div className="p-4 sm:p-20 bg-[#1313130D] rounded-2xl">
                <div className='sm:grid grid-cols-12 gap-4 space-y-4'>
                    <div className='col-span-8 space-y-4'>
                        <h2 className="text-2xl sm:text-5xl">Books to freshen up your bookshelf</h2>
                        <a className="btn bg-[#23BE0A] text-white hover:text-[#23BE0A] hover:bg-[#E2E8F0] hover:border-[#fff]"><NavLink to={'/listed-books'}>Listed Books</NavLink></a>
                    </div>
                    <div className='col-span-4'>
                        <img className='border' src={BannerImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;