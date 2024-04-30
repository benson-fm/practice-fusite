import { useNavigate } from "react-router-dom";

export function PageOne() {
    const navigate = useNavigate();

    const handleHome = () => {
        navigate('/');
    }

    const handlePageTwo = () => {
        navigate('/pageTwo')
    }

  return (
    <>
      <div className="flex flex-col w-full h-screen bg-gradient-to-r from-slate-50 to-zinc-300">
        <div className="flex w-full justify-end h-1/6">
          <div className="flex flex-row h-14 gap-x-4 pr-7 pt-3">
            <button className= "hover:underline decoration-2 text-zinc-900 font-medium py-2 px-4" onClick={handleHome}>
              Home
            </button>
            <button className= "hover:underline decoration-2 text-zinc-900 font-medium py-2 px-4" onClick={handlePageTwo}>
              PageTwo
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
