import { useEffect, useRef, useState } from 'react';

import Wrapper from '../Components/Wrapper';
import Home from '../Components/Home/Home';
import NavBar from '../Components/Navbar/Navbar';
import Work from '../Components/Work/Work';

import { Elt, Page } from '../models/models';


const pages: Page[] = [
	{ name: 'Home',     id: 'home', 	Component: Home },
	{ name: 'Work', 	id: 'work', 	Component: Work },
	{ name: 'Projects', id: 'projects', Component: Home },
	{ name: 'Contact',  id: 'contact',  Component: Work },
]


function App() 
{
	const ref = useRef<Elt>(null)
	const [index, setIndex] = useState<number>(0)

	useEffect( () => {
		if ( ref.current === null ) return;
		const { children } = ref.current;

		const calcIndex = () => {
			let i = -1;
			let val = 9999;
			[].forEach.call( children, (elt: any, j: number) =>
			{
				const { top } = elt.getBoundingClientRect();
				const abs = Math.abs(top)
				if ( abs < val )
				{
					i = j;
					val = abs
				}
			} )
			setIndex(i)
		}

		calcIndex()
		document.addEventListener('scroll', calcIndex)
		return () => document.removeEventListener('scroll', calcIndex)
	}, [])

	return (
		<div className="App" >
			<NavBar index={index} pages={pages}/>
			<div className="app-wrapper" ref={ref}>
				{ pages.map( ( { Component, id }, i ) =>
					<Wrapper id={id} key={`wrapper-${i}`}>
						<Component />
					</Wrapper> 
				) }
			</div>
		</div>
	);
}

export default App;
