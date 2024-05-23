import { useNavigate } from "react-router-dom";
import DisclosureButtonComponent from './DisclosureButtonComponent.jsx';
import CarouselComponent from './CarouselComponent.jsx';  // Ensure CarouselComponent is properly imported

export function PageTwo() {
    const navigate = useNavigate();

    const handleHome = () => {
        navigate('/');
    };

    const handlePageOne = () => {
        navigate('/pageOne')
    };

    return (
      <>
        <div className="flex flex-col w-full h-screen bg-gradient-to-r from-slate-50 to-zinc-300">
          {/* Navigation buttons at the top */}
          <div className="flex w-full justify-end h-1/6">
            <div className="flex flex-row h-14 gap-x-4 pr-7 pt-3">
              <button className="hover:underline decoration-2 text-zinc-900 font-medium py-2 px-4" onClick={handleHome}>
                Home
              </button>
              <button className="hover:underline decoration-2 text-zinc-900 font-medium py-2 px-4" onClick={handlePageOne}>
                PageOne
              </button>
            </div>
          </div>
          
          {/* Carousel added here, placed above the disclosure buttons for visibility */}
          <div className="h-1/3 w-full flex justify-center items-center">
            <CarouselComponent />
          </div>

          {/* Disclosure buttons centered below the carousel */}
          <div className="flex flex-col items-center justify-center grow">
            <div className="w-full max-w-md space-y-2">
              <DisclosureButtonComponent question="What is FUSION?" answer="Filipinos Unifying Scientist-Engineers in an Organized Network (FUSION) exists to provide a community that fosters the personal and professional growth of our members through the engineering field and the Filipinx culture.​​​​" />
              <DisclosureButtonComponent question="Culture" answer="Learn more about Filipino traditions and culture" />
              <DisclosureButtonComponent question="Academics" answer="Host study hours and offer academic resources" />
              <DisclosureButtonComponent question="Social Support" answer="Hold social events and offer internal programs" />
              <DisclosureButtonComponent question="Professionalism" answer="Host workshops that prepare our members for jobs and internships" />
              <DisclosureButtonComponent question="Science & Engineering" answer="Hold an annual engineering project and competition" />
              {/* Add more DisclosureButtonComponent as needed */}
            </div>
          </div>
        </div>
      </>
    );
}
