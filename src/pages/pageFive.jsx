import { Nav } from '../components/nav';

export function PageFive() {
  return (
    <>
      <div className="flex flex-col w-full h-screen bg-gradient-to-r from-purple-100 to-purple-300">
        <div className="flex w-full justify-end h-1/6">
          <div className="flex flex-row h-14 gap-x-4 pr-7 pt-3">
            <Nav />
          </div>
        </div>
        <div className="flex h-3/4 items-center justify-center">
          <form className="flex flex-col gap-y-4 w-1/3">
            <label className="text-white text-xl text-center">Form</label>
            <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xs mx-auto" />
            <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs mx-auto" />
            <input type="text" placeholder="Username" className="input input-bordered w-full max-w-xs mx-auto" />
            <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs mx-auto" />
            <div className="flex justify-end">
              <button className="btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}