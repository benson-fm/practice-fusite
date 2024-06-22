import { useNavigate } from "react-router-dom";

export function Nav() {
  const navigate = useNavigate();

  const handleHomePage = () => {
    navigate('/');
  }

  const handlePageOne = () => {
    navigate('/pageOne');
  }

  const handlePageTwo = () => {
    navigate('/pageTwo')
  }

  const handlePageThree = () => {
    navigate('/pageThree');
  }
  const handlePageFour = () => {
    navigate('/pageFour')
  }

  const handlePageFive = () => {
    navigate('/pageFive');
  }

  const handlePageInternship = () => {
    navigate('/pageInternship');
  }

  const handleProfileArvin = () => {
    navigate('/profileArvin');
  }

  const handleProfileBenson = () => {
    navigate('/profileBenson');
  }
  
  const handleProfileEthan = () => {
    navigate('/profileEthan');
  }
    const handleProfileDom = () => {
      navigate('/profileDom');
    }

   const handleProfileAariel = () => {
    navigate('/profileAariel');
  }
  

    return (
      <>
        <details className="dropdown dropdown-end">
          <summary className="m-1 btn text-white">Menu</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <button onClick={handleHomePage}>
                Home
              </button>
            </li>
            <li>
              <button onClick={handlePageOne}>
                PageOne
              </button>
            </li>
            <li>
              <button onClick={handlePageTwo}>
                PageTwo
              </button>
            </li>
            <li>
              <button onClick={handlePageThree}>
                PageThree
              </button>
            </li>
            <li>
              <button onClick={handlePageFour}>
                PageFour
              </button>
            </li>
            <li>
              <button onClick={handlePageFive}>
                PageFive
              </button>
            </li>
            <li>
              <button onClick={handlePageInternship}>
                PageInternship
              </button>
            </li>
          </ul>
        </details>
        <details className="dropdown dropdown-end">
          <summary className="m-1 btn text-white">About</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <button onClick={handleProfileBenson}>
                Benson
              </button>
              <button onClick={handleProfileDom}>
                Dommenick
              </button>
              <button onClick={handleProfileAariel}>
                Aariel
              </button>
              <button onClick={handleProfileEthan}>
                Ethan
              </button>
              <button onClick={handleProfileArvin}>
                Arvin
              </button>
            </li>    
          </ul>
        </details>
      </>
    );
}
