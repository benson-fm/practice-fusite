import Typewriter from "typewriter-effect";
import Anteater from '../assets/anteater.png';
import { Nav } from '../components/nav';

export function Home() {

  return (
    <>
      <div className="flex flex-col w-full h-screen bg-gradient-to-r from-slate-50 to-zinc-300">
        <div className="flex w-full justify-end h-1/6">
          <div className="flex flex-row h-14 gap-x-4 pr-7 pt-3">
            <Nav />
          </div>
        </div>
        <div className="flex flex-row h-5/6 pl-8">
          <div className="w-1/2 pt-52">
            <div className="text-zinc-900 text-8xl font-semibold">
              <Typewriter
                options={{
                  strings: ["Fusite Website Practice", "GO FUSITEEE!!!!!", "Go Dom and Arvin!!", "GO ETHANN!!", "YESS ARLAGHNN", "AARIEL AARIEL AARIEL!"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <div className="text-zinc-900 text-lg font-medium pt-10">
              <p>
                Welcome to the Practice Site! This is your next tool for
                developing your skills <br />
                in WebDev! Lets get started! <br />
              </p>
            </div>
          </div>
          <div>
            <img src={Anteater} alt='anteater' className="pt-44 pl-36 h-3/4 animate-bounce"/>
          </div>
        </div>
        <p className="text-center">Made with love &lt;3</p>
      </div>
    </>
  );
}
