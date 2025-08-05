export default function part2() {

	return <div className='flex items-center flex-col p-10'>
		<div>Part 2</div>
		<h1 className="text-center
		font-bold
		text-xl
		relative
		after:content-[':after']
		after:block
		after:absolute
		after:left-0
		after:-bottom-4
		after:text-red-400
		">Channel</h1>
		<input type='text'
		       name='email'
		       autoComplete='email'
		       placeholder='Email'
		       className='border-2
				border-solid
				border-white/30
				focus:border-orange-500
				mx-auto
				my-5
				transition-colors
				ease-in
				duration-300
				outline-none
				px-2.5
		'
		/>
		<button
			className='rouded bg-orange-500 cursor-pointer hover:bg-orange-400 transition-colors ease-in duration-300 mx-auto mt-10 block px-3 py-1 border border-white/50 border-solid'>Click
			ME
		</button>

		<div className="mx-auto
		rounded-xl
		bg-orange-500
		p-10
		m-5
		flex
		items-center
		justify-center
		w-30
		h-30
		font-bold
		transition-colors
		duration-500

		md:bg-blue-500
		lg:bg-green-500
		xl:bg-red-500
		">ADAPTIVE</div>

		<div className='w-80 h-auto'>
			<h2 className='text-center my-3 font-bold text-orange-400'>Video</h2>
			<iframe src='http://commondatastorage.googleapis.com/gtv-videos-bucket/big_buck_bunny_1080p.mp4'
			        className='aspect-video
			        rotate-x-50
			        rotate-z-30
			        transform-3d
			        hover:rotate-x-0
			        hover:rotate-z-0
			        transition-transform
			        duration-900
			        shadow-2xl
			        rounded-xl

			        '></iframe>
		</div>
	</div>
}