import React from 'react';

const BrandBanner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/NWhbZMZ/images-q-tbn-ANd9-Gc-Sq-L8-nd-Pr-E10m8o45-Og30-Dm-HP2lm-O-ywa-KVk-Q9-KDe-HZHE-Rnioqr2e1p-O8a-Sx-BRf.jpg" className="w-full md:h-[500px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/0Qc56c6/sony-3.jpg" className="w-full md:h-[500px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/Rvg3k7j/images-q-tbn-ANd9-Gc-Qsq-Fz-OLM1359c-LN-nc-MIk-Hhe-YKl-Reh-URBq-A-usqp-CAU.jpg" className="w-full md:h-[500px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BrandBanner;