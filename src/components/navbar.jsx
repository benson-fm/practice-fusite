import FusionLogo from '../assets/FusionLogo.png'

export function Navbar(){
    return(
        <>
        <div class="flex justify-center items-center space-x-24 text-2xl">
            <button>
                HOME
            </button>
            <button>
                ABOUT
            </button>
            <button>
                PROJECTS
            </button>
            <img src={FusionLogo} width={90} height={90}/>
            <button>
                BOARD
            </button>
            <button>
                PROGRAMS
            </button>
            <button>
                FUSIONCON
            </button>
        </div>
        </>
    );
}