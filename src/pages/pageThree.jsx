import { Nav } from '../components/nav';
import Anteater from '../assets/anteater.png';

export function PageThree() {
  return (
    <>
      <div className="flex flex-col w-full h-screen bg-gradient-to-r from-slate-50 to-zinc-300">
        <div className="flex w-full justify-end h-1/6">
          <div className="flex flex-row h-14 gap-x-4 pr-7 pt-3">
            <Nav />
          </div>
        </div>

        <div class="flex justify-center items-center h-screen">
          <div class="w-1/2">
            <div className="diff aspect-[16/9]">
              <div className="diff-item-1">
                <div className="bg-primary text-primary-content text-9xl font-black grid place-content-center">
                  <img src={Anteater} alt='anteater' className="" />
                </div>
              </div>
              <div className="diff-item-2">
                <div className="bg-base-200 text-9xl font-black grid place-content-center">
                  <img src={Anteater} alt='anteater' className="" />
                </div>
              </div>
              <div className="diff-resizer"></div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}