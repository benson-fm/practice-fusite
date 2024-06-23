import { useNavigate } from "react-router-dom";

export function Nav() {
  const navigate = useNavigate();

  const handleHomePage = () => {
    navigate("/");
  };

  const handlePageOne = () => {
    navigate("/pageOne");
  };

  const handlePageTwo = () => {
    navigate("/pageTwo");
  };

  const handlePageThree = () => {
    navigate("/pageThree");
  };
  const handlePageFour = () => {
    navigate("/pageFour");
  };

  const handlePageFive = () => {
    navigate("/pageFive");
  };

  const handleProfileArvin = () => {
    navigate("/profileArvin");
  };
    
  const handleProfileArlaghn = () => {
    navigate('/profileArlaghn');
  }
  
  const handleProfileBenson = () => {
    navigate("/profileBenson");
  };

  const handleProfileEthan = () => {
    navigate("/profileEthan");
  };
  const handleProfileDom = () => {
    navigate("/profileDom");
  };

  const handleProfileAariel = () => {
    navigate("/profileAariel");
  };

  const handlePractice = () => {
    navigate("/practice");
  };

  return (
    <>
      <details className="dropdown dropdown-end">
        <summary className="m-1 btn text-white bg-slate-600">Menu</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-slate-600 text-white rounded-box w-52">
          <li>
            <button onClick={handleHomePage}>Home</button>
          </li>
          <li>
            <button onClick={handlePageOne}>PageOne</button>
          </li>
          <li>
            <button onClick={handlePageTwo}>PageTwo</button>
          </li>
          <li>
            <button onClick={handlePageThree}>PageThree</button>
          </li>
          <li>
            <button onClick={handlePageFour}>PageFour</button>
          </li>
          <li>
            <button onClick={handlePageFive}>PageFive</button>
          </li>
          <li>
            <button onClick={handlePractice}>Practice</button>
          </li>
        </ul>
      </details>
      <details className="dropdown dropdown-end">
        <summary className="m-1 btn text-white bg-slate-600">About</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] rounded-box w-52 bg-slate-600 text-white">
          <li>
            <button onClick={handleProfileBenson}>Benson</button>
            <button onClick={handleProfileDom}>Dommenick</button>
            <button onClick={handleProfileAariel}>Aariel</button>
            <button onClick={handleProfileEthan}>Ethan</button>
            <button onClick={handleProfileArvin}>Arvin</button>
            <button onClick={handleProfileArlaghn}>Arlaghn</button>
          </li>
        </ul>
      </details>
    </>
  );
}
