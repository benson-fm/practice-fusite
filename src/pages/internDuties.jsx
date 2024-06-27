import { Nav } from '../components/nav';
import FusionLogo from '../assets/fusionLogo.png';

export function InternDuties() {
    const items = [
        { id: 1, header: 'DUTY #1', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.' },
        { id: 2, header: 'DUTY #2', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.' },
        { id: 3, header: 'DUTY #3', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.' },
        { id: 4, header: 'DUTY #4', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.' },
        { id: 5, header: 'DUTY #5', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.' },
        { id: 6, header: 'DUTY #6', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.' },
    ];

    return (
        <div style={{
            display: 'flex',
            width: '1275px',
            alignItems: 'flex-start',
            alignContent: 'flex-start',
            gap: '124px 231px',
            flexWrap: 'wrap',
            margin: 'auto', 
            padding: '2px',
        }}>
            <div className="flex flex-col w-full h-screen bg-white">
                <div className="flex w-full justify-end h-1/6">
                    <div className="flex flex-row h-14 gap-x-4 pr-7 pt-3">
                        <Nav />
                    </div>
                </div>
                <div className="flex flex-col items-center justify-start h-5/6 pt-10 px-20">
                    <h1 style={{ fontSize: '40px', letterSpacing: '8px'}} className="font-inter font-medium tracking-wider"> INTERN DUTIES</h1>
                    <div className="grid grid-cols-3 gap-x-40 gap-y-20 w-full py-20">
                        {items.map(item => (
                            <div key={item.id} className="flex flex-col items-center">
                                <img src={FusionLogo} alt={`Example ${item.id}`} className="w-104.244 h-104 object-cover flex-shrink-0"/>
                                <h2 style={{ fontSize: '32px', letterSpacing: '6.4px'}}className="font-inter font-medium mt-6">{item.header}</h2>
                                <p style={{ fontSize: '20px'}}className="font-inter font-normal mt-2 text-center">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}