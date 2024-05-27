function CarouselComponent() {
    return (
      <>
        <style>
          {`
            .zoom-out {
              transition: transform 0.3s ease;
              transform: scale(0.8);  // Reduces the image size to 80% of its original
            }
            .carousel-item:hover .zoom-out {
              transform: scale(1);  // Returns to full size on hover
            }
          `}
        </style>
        <div className="carousel w-full">
          {/* Slide 1 */}
          <div id="slide1" className="carousel-item relative w-full">
            <img src="src\assets\c1.jpg" className="w-full max-h-64 object-cover zoom-out" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>
          {/* Slide 2 */}
          <div id="slide2" className="carousel-item relative w-full">
            <img src="src\assets\c2.jpg" className="w-full max-h-64 object-cover zoom-out" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div>
          {/* Slide 3 */}
          <div id="slide3" className="carousel-item relative w-full">
            <img src="src\assets\c3.jpg" className="w-full max-h-64 object-cover zoom-out" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">❮</a>
              <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
          </div>
          {/* Slide 4 */}
          <div id="slide4" className="carousel-item relative w-full">
            <img src="src\assets\c4.jpg" className="w-full max-h-64 object-cover zoom-out" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">❮</a>
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default CarouselComponent;