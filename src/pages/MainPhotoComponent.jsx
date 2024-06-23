import internImage from '/src/assets/intern.jpg';

const MainPhoto = () => {
  return (
    <div className="relative w-full h-screen flex flex-col justify-center items-center text-center">
      <img src={internImage} alt="Main" className="absolute inset-0 w-full h-full object-cover z-0" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-6xl font-bold">PROGRAMS</h1>
        <h2 className="text-2xl mt-4">INTERNSHIP</h2>
      </div>
    </div>
  );
};

export default MainPhoto;