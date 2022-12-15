import React from 'react';

const HeroBanner = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide relative mb-5"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner relative w-full overflow-hidden">
        <div className="carousel-item active relative float-left w-full">
          <img
            src="https://images.samsung.com/is/image/samsung/assets/nl/home/NeoQLED_KV_Header_PC_1440x6401.jpg?imwidth=2560"
            className="block w-full"
            alt="..."
          />
          <div className="carousel-caption hidden md:block absolute text-center">
            <h5 className="text-7xl">Ontdek de nieuwste Neo QLED TV’s</h5>
          </div>
        </div>
        <div className="carousel-item relative float-left w-full">
          <img
            src="https://images.samsung.com/is/image/samsung/assets/nl/homepage/04_Holiday-Main_Home_Desktop_1440x640.jpg?imwidth=2560"
            className="block w-full"
            alt="..."
          />
          <div className="carousel-caption hidden md:block absolute text-center">
            <h5 className="text-7xl">Vind je perfecte holiday gift</h5>
            <p className="text-4xl">en laat ieders wensen uitkomen</p>
          </div>
        </div>
        <div className="carousel-item relative float-left w-full">
          <img
            src="https://images.samsung.com/is/image/samsung/assets/nl/home/2022-bespoke-home_home-takeover_kv_pc_BEW1.jpg?imwidth=2560"
            className="block w-full"
            alt="..."
          />
          <div className="carousel-caption hidden md:block absolute text-center">
            <h5 className="text-7xl">BESPOKE Home</h5>
            <p className="text-4xl">
              Jouw huis, jouw plek om jezelf te zijn met Bespoke.
            </p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export { HeroBanner };
