
// eslint-disable-next-line react/prop-types
const Title = ({topHeader, bottomTitle}) => {
    return (
        <div className="text-center py-3 md:py-10">
            <h1 data-aos="fade-right" data-aos-easing="linear" className="homepage text-4xl font-extrabold">{topHeader}</h1>
            <h5 data-aos="fade-left" data-aos-easing="linear"  className="text-sm mt-3 text-slate-500">{bottomTitle}</h5>
        </div>
    );
};

export default Title;