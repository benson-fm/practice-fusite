import { Nav } from '../components/nav';
import Benson from '../assets/bensonPic.png';

export function ProfileBenson() {

 const handleLinkedIn = () => {
    window.open("https://www.linkedin.com/in/benson-manzano/", "_blank");
 }
  return (
    <>
      <div className="flex flex-col w-full h-screen bg-gradient-to-r from-slate-50 to-zinc-300">
        <div className="flex w-full justify-end h-1/6">
          <div className="flex flex-row h-14 gap-x-4 pr-7 pt-3">
            <Nav />
          </div>
        </div>
        <p className="text-3xl text-center pb-5 text-black">Dev Lead</p>
        <div className="flex place-content-center">
          <div
            className="avatar"
            onClick={() => document.getElementById("Benson_Modal").showModal()}>
            <div className="w-44 rounded hover:w-48">
              <img src={Benson} />
            </div>
          </div>
        </div>
        <p className="text-2xl text-center pt-5 text-black">Benson Manzano</p>
        <dialog id="Benson_Modal" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">
              My name is Benson Manzano and I am the Dev Lead for this project. I am a 1st year Computer Science major at UCI. I am responsible for 
              the overall implementation of this project. I am hoping that this would be an amazing project that FUSION could utilize in the future as 
              their official website. I am excited to see the final product and I am looking forward to working with my team to make this project a success!
            </p>
            <div className="modal-action">
              <form method="dialog" className="flex flex-row gap-4">
                <div>
                    <button className="btn" onClick={handleLinkedIn}>LinkedIn</button>
                </div>
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
}