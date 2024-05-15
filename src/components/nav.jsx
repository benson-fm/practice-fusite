import { useNavigate } from "react-router-dom";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Transition } from '@headlessui/react'

export function Nav() {
    const navigate = useNavigate();

    const handleHomePage = () => {
        navigate('/');
    }

    const handlePageOne = () => {
        navigate('/pageOne');
    }

    const handlePageTwo = () => {
        navigate('/pageTwo')
    }

    const handlePageThree = () => {
        navigate('/pageThree');
    }

    const handlePageFour = () => {
        navigate('/pageFour')
    }

    const handlePageFive = () => {
        navigate('/pageFive');
    }


    return (
      <>
        <Menu>
          <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-800 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
            Pages
          </MenuButton>
          <Transition
            enter="transition ease-out duration-75"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <MenuItems
              anchor="bottom end"
              className="w-52 origin-top-right rounded-xl border border-white/5 bg-gray-800 p-1 text-sm/6 text-white [--anchor-gap:var(--spacing-1)] focus:outline-none"
            >
              <MenuItem>
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10" onClick={handleHomePage}>
                  Home
                </button>
              </MenuItem>
              <div className="my-1 h-px bg-white/5" />
              <MenuItem>
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10" onClick={handlePageOne}>
                  PageOne
                </button>
              </MenuItem>
              <MenuItem>
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10" onClick={handlePageTwo}>
                  PageTwo
                </button>
              </MenuItem>
              <MenuItem>
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10" onClick={handlePageThree}>
                  PageThree
                </button>
              </MenuItem>
              <MenuItem>
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10" onClick={handlePageFour}>
                  PageFour
                </button>
              </MenuItem>
              <MenuItem>
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10" onClick={handlePageFive}>
                  PageFive
                </button>
              </MenuItem>
            </MenuItems>
          </Transition>
        </Menu>
      </>
    );
}
