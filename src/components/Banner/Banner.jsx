import BannerImg from '../../assets/banner-book.png'

const Banner = () => {
    return (
        <div>
            <div style={{ '--image-url': `url(${BannerImg})` }}
                className="h-[500px] bg-[#1313130D] bg-[image:var(--image-url)] bg-no-repeat bg-right bg-contain">
            </div>
        </div>
    );
};

export default Banner;