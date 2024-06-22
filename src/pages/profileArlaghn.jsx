import { Nav } from '../components/nav';
import Arlaghnpic from '../assets/Arlaghn_image.png';

export function ProfileArlaghn() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-gradient-to-r from-slate-50 to-zinc-300">
      <div className="w-full flex justify-end h-1/6">
        <div className="flex flex-row h-14 gap-x-4 pr-7 pt-3">
          <Nav />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center flex-grow">
        <p className="text-3xl text-center pb-5 text-black">Dev Subteam</p>
        <div className="flex place-content-center">
          <div
            className="avatar"
            onClick={() => document.getElementById("Arlaghn_Modal").showModal()}
          >
            <div className="w-44 rounded hover:w-48">
              <img src={Arlaghnpic} alt="Arlaghn_image" />
            </div>
          </div>
        </div>
        <p className="text-2xl text-center pt-5 text-black">Arlaghn</p>
      </div>
      <dialog id="Arlaghn_Modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Arlaghn Cayanan</h3>
          <p className="py-4"> Hi. I am Arlaghn Cayanan, a first-year computer science major at UCI.
          </p>
          <div className="modal-action">
            <button
              className="btn"
              onClick={() => document.getElementById("Arlaghn_Modal").close()}
            >
              Close
            </button>
            <button
              className="btn"
              onClick={() => window.location.href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'}
            >
              LinkedIn
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}