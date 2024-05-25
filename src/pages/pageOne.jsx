import { Tab } from '@headlessui/react';
import { Transition } from '@headlessui/react'
import { useState } from 'react'
import { Nav } from '../components/nav';
import Anteater from '../assets/anteater.png';

export function PageOne() {

    let [isShowing, setIsShowing] = useState(true)


  return (
    <>
      <div className="flex flex-col w-full h-screen bg-gradient-to-r from-slate-50 to-zinc-300">
        <div className="flex w-full justify-end h-1/6">
          <div className="flex flex-row h-14 gap-x-4 pr-7 pt-3">
            <Nav />
          </div>
        </div>
        {/* <Tab.Group>
          <Tab.List className = "flex space-x-6 justify-center rounded-xl bg-blue-900/20" >
            <Tab>Tab 1</Tab>
            <Tab>Tab 2</Tab>
            <Tab>Tab 3</Tab>
          </Tab.List>
          <Tab.Panels className = "flex  justify-center">
            <Tab.Panel>hey</Tab.Panel>
            <Tab.Panel>hello</Tab.Panel>
            <Tab.Panel>
              <br></br>
              <button onClick={() => setIsShowing((isShowing) => !isShowing)}>Hit me.</button>
              <Transition
                show={isShowing}
                enter="transition-opacity duration-300"
                enterFrom="rotate-[-120deg] opacity-0"
                enterTo="rotate-0 opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="rotate-0 opacity-100"
                leaveTo="opacity-0"
              >
                <div className= "size-full rounded-xl bg-black shadow-lg">I will fade in and out</div>
              </Transition>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>       */}
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
              <p>anteaters don't have any teeth</p>
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
