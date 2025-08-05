import {useState, useRef, useEffect} from "react";
import './Header.css';

export default function Header() {
	const [isSticky, setIsSticky] = useState(false);
	const stickyRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				console.log('entry.isIntersecting', entry.isIntersecting)
				return setIsSticky(!entry.isIntersecting)
			},
			{threshold: [1]}
		);

		console.log('observer', observer)

		const stickyMarker = stickyRef.current;
		if (stickyMarker) observer.observe(stickyMarker);


		return () => {
			console.log('stickyMarker', stickyMarker)

			if (stickyMarker) observer.unobserve(stickyMarker);
		}
	}, [stickyRef]);

	return <>
		<div ref={stickyRef} className=''></div>
		<header className={`sticky
		top-0
		transition-all
		duration-500
		bg-fuchsia-200
		w-full
		max-h-50
		shadow-emerald-100
		${isSticky ? 'shadow-md h-10' : 'h-20'}`}>
			<div className='container flex items-center justify-between h-full mx-auto z-10 header'>
				<div className={`h-full aspect-[3/1] transition duration-500 max-h-fit`}>
					<img src='./public/img/logo.svg' className='object-contain w-full h-full' alt='logo'/>
				</div>
				<div className='flex flex-col items-end self-end'>
					<ul className='m-0 p-0 decoration-0 text-xl [&>li:color:red] mb-1'>
						<li className='float-left'><a href="#">Home</a></li>
						<li><a href="#">Our works</a></li>
						<li><a href="#">Blog</a></li>
						<li><a href="#">Contacts</a></li>
						<li><a href="#">About Us</a></li>
					</ul>
				</div>
			</div>
		</header>
	</>
}