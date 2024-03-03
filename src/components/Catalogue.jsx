import { useEffect, useMemo, useState } from 'react';
import coach1 from '../assets/pictures/coach1.png';
import coach2 from '../assets/pictures/coach2.png';
import coach3 from '../assets/pictures/coach3.png';
import coach4 from '../assets/pictures/coach4.png';
import chair1 from '../assets/pictures/chair1.jpg';
import chair2 from '../assets/pictures/chair2.jpg';
import chair3 from '../assets/pictures/chair3.jpg';
import chair4 from '../assets/pictures/chair4.jpg';


const Catalogue = () => {
  const buttons = ['Sofa', 'Armchair', 'Chair', 'Bed', 'All'];


	const [activeButton, setActiveButton] = useState(buttons[0]);

	useMemo(() => {
		switch (activeButton) {
			case 'sofa':

		}
	})
	const activeItems = useMemo(() => {
		switch (activeButton) {
			case 'Sofa':
				return [
					{
						pictureLink: coach1,
						type: 'Sofa',
						name: 'Atlas',
					},
					{
						pictureLink: coach2,
						type: 'Sofa',
						name: 'Morrison',
					},
					{
						pictureLink: coach3,
						type: 'Sofa',
						name: 'Windsor',
					},
					{
						pictureLink: coach4,
						type: 'Sofa',
						name: 'Night Fever',
					},
				];
				break;
			case 'Armchair':
				return [
					{
						pictureLink: coach1,
						type: 'Armchair',
						name: 'Atlas',
					},
					{
						pictureLink: coach2,
						type: 'Armchair',
						name: 'Morrison',
					},
					{
						pictureLink: coach3,
						type: 'Armchair',
						name: 'Windsor',
					},
					{
						pictureLink: coach4,
						type: 'Armchair',
						name: 'Night Fever',
					},
				];
				break;
			case 'Chair':
				return [
					{
						pictureLink: chair1,
						type: 'Chair',
						name: 'Atlas',
					},
					{
						pictureLink: chair2,
						type: 'Chair',
						name: 'Morrison',
					},
					{
						pictureLink: chair3,
						type: 'Chair',
						name: 'Windsor',
					},
					{
						pictureLink: chair4,
						type: 'Chair',
						name: 'Night Fever',
					},
				];
				break;
			case 'Bed':
				return [
					{
						pictureLink: coach1,
						type: 'Bed',
						name: 'Atlas',
					},
					{
						pictureLink: coach2,
						type: 'Bed',
						name: 'Morrison',
					},
					{
						pictureLink: coach3,
						type: 'Bed',
						name: 'Windsor',
					},
					{
						pictureLink: coach4,
						type: 'Bed',
						name: 'Night Fever',
					},
				];
				break;
			case 'All':
				return [
					{
						pictureLink: coach1,
						type: 'Sofa',
						name: 'Atlas',
					},
					{
						pictureLink: coach2,
						type: 'Armchair',
						name: 'Morrison',
					},
					{
						pictureLink: coach3,
						type: 'Denis',
						name: 'Windsor',
					},
					{
						pictureLink: coach4,
						type: 'Bed',
						name: 'Night Fever',
					},
				];
				break;
			default:
				return null
				break;
		}
	}, [activeButton])


	return (
		<div className="mt-12">
			{
				buttons.map((button) => (
					<button
						key={button}
						className={`px-3 py-2 border rounded-2xl mr-8 font-extrabold text-sm ${
							activeButton === button ? 'bg-light-orange text-white' : 'bg-white text-black'
						}`}
						onClick={() => setActiveButton(button)}
					>
						{button}
					</button>
      	))
			}
			<hr className="mt-9"/>
			<div className='flex mt-8'>
					{
						activeItems.map((activeItem) => (
							<div key={activeItem.ID} className='w-64 border border-black border-solid mr-8'>
								<img className='w-64 h-44' src={activeItem.pictureLink} />
								<div className='px-3 font-semibold text-sm opacity-40 mt-5'>{activeItem.type}</div>
								<div className='px-3 mt-6 font-extrabold text-base'>{activeItem.name}</div>
								<div className='px-3 mb-3 mt-20 flex justify-end'>
									<button className='border-2 border-light-orange text-light-orange rounded-xl w-24 h-9 font-extrabold text-sm' >
										Add +
									</button>
								</div>
								
							</div>
						))
					}
			</div>
		</div>
	)
}

export default Catalogue;