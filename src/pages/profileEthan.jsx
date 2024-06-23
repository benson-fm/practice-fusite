import React from 'react'
import { Nav } from '../components/nav'
import Ethan from '../assets/ethanPic.png';
import Dialogue from '../components/Dialogue';

export function ProfileEthan() {
    return (
        <div>
            <div className="flex flex-col w-full h-screen bg-gradient-to-r from-slate-50 to-zinc-300">
                <div className="flex w-full justify-end h-1/6">
                    <div className="flex flex-row h-14 gap-x-4 pr-7 pt-3">
                        <Nav />
                    </div>
                </div>
                <div className="flex justify-center h-screen">
                    <div className="text-center">
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src={Ethan} onClick={() => document.getElementById('my_modal_4').showModal()} /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Ethan Santos</h2>
                                <p className="card-title">Developer</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Dialogue title={"Hello!"} description={"My name is Ethan Santos and I am a Developer for this project. I am a 3rd year Computer Science major at UCI (transfer). I am excited to have joined the team and I look forward to working with all of you to make a super cool website. Feel free to connect with me on LinkedIn!"} link={'https://www.linkedin.com/in/ethanmadeit/'} />
            </div>
        </div>
    )
}
