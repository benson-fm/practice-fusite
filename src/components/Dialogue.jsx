import React from 'react'

const Dialogue = ({ title, description, link}) => {
    return (
        <div>
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-2xl">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{description}</p>
                    <form method="dialog">
                        <div className="modal-action space-x-4">
                            <button className="btn" onClick={() => window.open(link)}>LinkedIn</button>
                            <button className="btn">Close</button>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    )
}

export default Dialogue
