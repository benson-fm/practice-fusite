import { Nav } from '../components/nav';
import AarielPic from '../assets/aarielPic.png';

export function ProfileAariel() {
  return (
    <>
      <div className="flex flex-col w-full h-screen bg-gradient-to-r from-slate-50 to-zinc-300">
      <div className="flex w-full justify-end h-1/6">
        <div className="flex flex-row h-14 gap-x-4 pr-7 pt-3">
          <Nav />
        </div>
      </div>
      <div className="flex flex-col h-3/4 items-center justify-center">
        <p className="text-black text-2xl text-center mb-4">Developer</p>
        <div>
          <img 
            src={AarielPic} 
            alt='Aariel' 
            className="w-44 rounded hover:w-48 transition-all duration-300 cursor-pointer"
            onClick={() => document.getElementById('my_modal_1').showModal()}
          />
        </div>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">My name is Aariel Abaincia and I am a 1st year Software Engineering major at UCI. 
            I am excited to collaborate with this amazing team and potentially contribute to FUSION's website!</p>
            <div className="modal-action">
                <button className="btn" onClick={() => window.open('https://www.linkedin.com/in/aariel-abaincia/', '_blank')}>LinkedIn</button>
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
        <label className="text-black text-xl text-center mb-4">Aariel Abaincia</label>
      </div>
    </div>
    </>
  );
}