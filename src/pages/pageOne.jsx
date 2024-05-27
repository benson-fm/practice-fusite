import { Nav } from '../components/nav';
import Anteater from '../assets/anteater.png';

export function PageOne() {
  return (
    <>
      <div className="flex flex-col w-full h-screen bg-gradient-to-r from-slate-50 to-zinc-300">
        <div className="flex w-full justify-end h-1/6">
          <div className="flex flex-row h-14 gap-x-4 pr-7 pt-3">
            <Nav />
          </div>
        </div>
        <div className= "flex place-content-center">
        Vermilingua
        </div>
        <div className="flex place-content-center">
          <div className="flex place-content-center flex-col card w-160 bg-base-100 shadow-xl">
            <figure><img src={Anteater} alt="anteater" width={400} height={400} /></figure>
            <div className="card-body">
              <h2 className="card-title">
                Anteater!
                <div className="badge badge-secondary">They eat ants!</div>
              </h2>
              <p>anteaters don&apos;t have any teeth</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">zot zot zot</button>
              </div>
            </div>
          </div>
        </div>  
        </div>
    </>
  );
}
