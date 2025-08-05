import Header from '../components/Header.jsx';
import './style.css';

export default function Home() {


	return <div className='bg-white'>

		<Header/>
		<div className='container h-[3000px] mx-auto bg-white'>
			<div className="grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4 gallery_wrap">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	</div>;
}