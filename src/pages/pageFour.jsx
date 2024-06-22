import { Nav } from '../components/nav';

export function PageFour() {
  return (
    <>
      <div className="flex flex-col w-full h-screen bg-gradient-to-r from-slate-50 to-zinc-300">
        <div className="flex w-full justify-end h-1/6">
          <div className="flex flex-row h-14 gap-x-4 pr-7 pt-3">
            <Nav />
          </div>
        </div>
        {/* code  */}
        <div className="flex h-3/4 items-center justify-center">
          <form className="flex flex-col gap-y-4 w-1/3">
            <label className="text-black text-xl text-center">Form</label>
            <input type="text" placeholder="Name:" className="input-field rounded-lg text-white placeholder-white h-16 pl-2" />
            <input type="email" placeholder="Email:" className="input-field rounded-lg text-white placeholder-white h-16 pl-2" />
            <input type="text" placeholder="Username:" className="input-field rounded-lg text-white placeholder-white h-16 pl-2" />
            <input type="password" placeholder="Password:" className="input-field rounded-lg text-white placeholder-white h-16 pl-2" />
            <div className="flex justify-end">
              <button type="submit" className="btn w-1/2">Submit</button>
              {/* <button className="btn">Submit</button> */}
            </div> 
          </form>
        </div>
      </div>
    </>
  );
}