import DisclosureButtonComponent from './DisclosureButtonComponent.jsx';
import CarouselComponent from './CarouselComponent.jsx';  // Ensure CarouselComponent is properly imported
import { Nav } from '../components/nav';

export function PageTwo() {
    return (
      <>
        <div className="flex flex-col w-full h-screen bg-gradient-to-r from-slate-50 to-zinc-300">
          {/* Navigation buttons at the top */}
          <div className="flex w-full justify-end h-1/6">
            <div className="flex flex-row h-14 gap-x-4 pr-7 pt-3">
              <Nav />
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
      </div>
    </>
  );
}
