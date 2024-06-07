import { Nav } from '../components/nav';
import ArvinPic from '../assets/arvinPic.png';

export function ProfileArvin() {

    const handleLinkedIn = () => {
        window.open("https://www.linkedin.com/in/arvin-limjoco", "_blank");
    }

    return (
        <>
            <div className="flex flex-col w-full h-screen bg-gradient-to-r from-slate-50 to-zinc-300">
                <div className="flex w-full justify-end h-1/6">
                    <div className="flex flex-row h-14 gap-x-4 pr-7 pt-3">
                        <Nav />
                    </div>
                </div>
                <p className="text-3xl text-center pb-5 text-black">Developer</p>
                <div className="flex place-content-center">
                    <div
                        className="avatar"
                        onClick={() => document.getElementById("Arvin_Modal").showModal()}>
                        <div className="w-44 rounded hover:w-48">
                            <img src={ArvinPic} alt="Arvin Limjoco" />
                        </div>
                    </div>
                </div>
                <p className="text-2xl text-center pt-5 text-black">Arvin Limjoco</p>
                <dialog id="Arvin_Modal" className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <p className="py-4">
                            My name is Arvin Limjoco and I am FUSION&apos;s Treasurer for the year 2024-2025. 
                            I am a 1st Year Data Science major, and my pronouns are he/him/his. 
                            I am also a FUSITE developer.
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
