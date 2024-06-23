import MainPhoto from './MainPhotoComponent.jsx';
import Overview from './OverviewComponent.jsx';
import { Nav } from '../components/nav';

export function PageInternship() {
    return (
      <>
        <div className="flex flex-col min-h-screen bg-gradient-to-r from-slate-50 to-zinc-300">
          {/* Navigation buttons at the top */}
          <div className="flex w-full justify-end h-1/6">
            <div className="flex flex-row h-14 gap-x-4 pr-7 pt-3">
              <Nav />
            </div>
          </div>
  
          {/* Main Photo Component */}
          <div className="w-full h-screen flex justify-center items-center">
            <MainPhoto />
          </div>
  
          {/* Overview Component */}
          <div className="w-full flex justify-center bg-white py-10">
            <div className="w-full max-w-4xl px-4">
              <Overview />
            </div>
          </div>
        </div>
      </>
    );
  }