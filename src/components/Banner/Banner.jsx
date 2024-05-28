import { NavLink } from 'react-router-dom';
import BannerImg from '../../assets/banner-book.jpg'

const Banner = () => {
    return (
        <div>
            {/* <div style={{ '--image-url': `url(${BannerImg})` }}
                className="h-[500px] bg-[#1313130D] bg-[image:var(--image-url)] bg-no-repeat bg-right bg-contain">
            </div> */}
            <div className="p-20 bg-[#1313130D] rounded-2xl">
                <div className='grid grid-cols-12 gap-4'>
                    <div className='col-span-8 space-y-4'>
                        <h2 className="text-5xl">Books to freshen up your bookshelf</h2>
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