import { Nav } from '../components/nav';
import React from "react"
import domPic from '../assets/domPic.png'

export function ProfileDom() {
  const [showModal, setShowModal] = React.useState(false);
    return(
    <>
      <div className="flex flex-col w-full h-screen bg-gradient-to-r from-slate-50 to-zinc-300">
        <div className="flex w-full justify-end h-1/6">
          <div className="flex flex-row h-14 gap-x-4 pr-7 pt-3">
            <Nav />
          </div>
        </div>
        <div className="text-3x1 text-center pb-5 text-black">
            Dev
        </div>
        <>
      <button className="flex justify-center"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <img src={domPic} alt="domPic" width={200} height={200} />      
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Hello!
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >

                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    My name is Dommenick Lacuata and I'm a Dev for FUSite. I'm a 1st year Computer Science major at UC Irvine.
                    I am hoping to learn a lot about web development during this project and create a fantastic website!
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <a href="https://www.linkedin.com/in/dommenick-lacuata/ " target="_blank">
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    LinkedIn
                  </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
      <div className="text-center">
        Dommenick Lacuata
      </div>
        </div>  
    </>
    );
}