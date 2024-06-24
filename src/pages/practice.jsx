import { Nav } from "../components/nav";
import Arlaghnpic from '../assets/Arlaghn_image.png';
import Bensonpic from '../assets/bensonPic.png';
import Dompic from '../assets/domPic.png'


export function Practice() {
  return (
    <>
      <div className="flex w-full h-screen bg-white">
        {/* Right section for navigation and content */}
        <div className="flex flex-col w-full">
          <div className="flex w-full justify-end h-1/6">
            <div className="flex flex-row h-14 gap-x-4 pr-7 pt-3">
              <Nav />
            </div>
          </div>
          <div className="flex-grow flex flex-col items-center pt-8">
            <h2 className="text-2xl font-bold mb-8 text-black">Benefits of Interning</h2>
            
            <div className="flex items-start mb-8 w-3/4">
              <img src={Arlaghnpic} alt="Person" className="w-40 h-40 object-cover mr-4" />
              <div>
                <p className="text-lg mb-2 text-black">
                  “I enjoyed being an intern because I got a hands on experience to help out with many different programs. I also enjoyed getting to see many of the things that go on behind the scenes such as attending baord meetings, it allowed me to gain a better appreciation for the hard work Motherboard does.”
                </p>
                <p className="font-semibold text-black">- Arlaghn Cayanan <span className="text-gray-500">On Class</span></p>
              </div>
            </div>

            <div className="flex items-start mb-8 w-3/4">
              <img src={Bensonpic} alt="Person" className="w-40 h-40 object-cover mr-4" />
              <div>
                <p className="text-lg mb-2 text-black">
                  “I enjoyed being an intern because it allowed me to form a deeper connection to each board member as well as memories with board and si class. I just wish I was in on class because they are better!”
                </p>
                <p className="font-semibold text-black">- Benson Manzano <span className="text-gray-500">Si Class</span></p>
              </div>
            </div>

            <div className="flex items-start mb-8 w-3/4">
              <img src={Dompic} alt="Person" className="w-40 h-40 object-cover mr-4" />
              <div>
                <p className="text-lg mb-2 text-black">
                  “I like interning because I gave me the opprotunity to be more proative within the FUSION space, as well as gave me a platform to make positive contributions to programs the org has to offer. I also look like DIR.”
                </p>
                <p className="font-semibold text-black">- Dommonick Lacuata <span className="text-gray-500">On Class</span></p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}