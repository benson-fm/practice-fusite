import { useNavigate } from "react-router-dom";
//import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
//import { Transition } from '@headlessui/react'

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
        <details className="dropdown dropdown-end">
          <summary className="m-1 btn text-white">Menu</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <button onClick={handleHomePage}>
                Home
              </button>
            </li>
            <li>
              <button onClick={handlePageOne}>
                PageOne
              </button>
            </li>
            <li>
              <button onClick={handlePageTwo}>
                PageTwo
              </button>
            </li>
            <li>
              <button onClick={handlePageThree}>
                PageThree
              </button>
            </li>
            <li>
              <button onClick={handlePageFour}>
                PageFour
              </button>
            </li>
            <li>
              <button onClick={handlePageFive}>
                PageFive
              </button>
            </li>
          </ul>
        </details>
        {/* <Menu>
          <Menu.Button className="inline-flex items-center gap-2 rounded-md bg-gray-800 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
            Pages
          </Menu.Button>
          <Transition
            enter="transition ease-out duration-75"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Menu.Items
              anchor="bottom end"
              className="w-52 origin-top-right rounded-xl border border-white/5 bg-gray-800 p-1 text-sm/6 text-white [--anchor-gap:var(--spacing-1)] focus:outline-none"
            >
              <Menu.Item>
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10" onClick={handleHomePage}>
                  Home
                </button>
              </Menu.Item>
              <div className="my-1 h-px bg-white/5" />
              <Menu.Item>
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10" onClick={handlePageOne}>
                  PageOne
                </button>
              </Menu.Item>
              <Menu.Item>
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10" onClick={handlePageTwo}>
                  PageTwo
                </button>
              </Menu.Item>
              <Menu.Item>
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10" onClick={handlePageThree}>
                  PageThree
                </button>
              </Menu.Item>
              <Menu.Item>
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10" onClick={handlePageFour}>
                  PageFour
                </button>
              </Menu.Item>
              <Menu.Item>
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10" onClick={handlePageFive}>
                  PageFive
                </button>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu> */}
      </>
    );
}
