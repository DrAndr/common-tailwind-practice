import {useState} from "react";

function App() {
	const [modalState, setModalState] = useState(false);


	return (
		<div className='container mx-auto relative'>
			<h1 className='text-5xl font-bold text-orange-400 text-center mt-32'>Tailwind v4</h1>
			<button onClick={()=> !modalState && setModalState(true)}
				className='rouded bg-orange-500 cursor-pointer hover:bg-orange-400 transition-colors ease-in duration-300 mx-auto mt-10 block px-3 py-1 border border-white/50 border-solid'>Click
				ME
			</button>
			<div className="bg-blue-400 mt-5 w-24 h32">Width & Height</div>

			<div className='flex items-center gap-5 mt-5'>
				<div className="bg-blue-300 w-20 h-20"></div>
				<div className="bg-blue-300 w-20 h-20"></div>
				<div className="bg-blue-300 w-20 h-20"></div>
				<div className="bg-blue-300 w-20 h-20"></div>
			</div>
			<div className='grid grid-cols-4 gap-5 mt-5'>
				<div className="bg-blue-500 h-20"></div>
				<div className="bg-blue-500 h-20"></div>
				<div className="bg-blue-500 h-20"></div>
				<div className="bg-blue-500 h-20"></div>
			</div>

			{modalState && (<div onClick={(e)=> {
				console.log(e.target)
				modalState && setModalState(false)
			}} className="fixed inset-0 bg-black/30 backdrop-blur-xs flex items-center justify-content">

				<div
					className="rounded-2xl
					text-black
					font-bold
					bg-white/80
					w-1/2 absolute
					top-1/2
					left-1/2
					transform
					-translate-1/2
					p-10
					border-2
					border-red-400
					border-solid
					max-w-100">
					<h1 className='text-xl font-semibold'>Modal Window</h1>
					<p className='text-xl'>Lorem ipsum dolor, Lorem ipsum dolor, Lorem ipsum dolor, Lorem ipsum dolor</p>
				</div>
			</div>)}

		</div>
	)
}

export default App
