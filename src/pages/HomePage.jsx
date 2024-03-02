import coach from '../assets/icons/coach.svg';
import crateBarrel from '../assets/icons/crateBarrel.svg';
import hookerFurniture from '../assets/icons/hookerFurniture.svg';
import bassett from '../assets/icons/bassett.svg';
import abdFurniture from '../assets/icons/abdFurniture.svg';
import pictureRoom from '../assets/pictures/pictureRoom.png';

import Catalogue from '../components/Catalogue.jsx';

const HomePage = () => {

  return (
		<div>
			<div className="flex w-full justify-between">
				<div>
					<h5 className='font-bold text-4xl mt-36 w-96 leading-relaxed' >
						Make Your Interior More Minimalistic & Modern
					</h5>
					<p className='mt-4 font-light w-full text-base'>
						Create a cozy space where you want to live with our
						ergonomic, durable and stylish furniture from leading
						European manufacturers.
					</p>
					<button className='text-sm mt-10 h-11 w-24 bg-light-orange/90 text-white font-extrabold rounded-xl'>
						Shop now
					</button>
				</div>
				<img src={coach} />
			</div>
			<div className='flex w-full justify-between mt-36' >
				<p className='font-semibold w-64 text-base flex items-center'>
					We Partner With More Than 10+ Manufacturers
				</p>
				<div className='flex child:mx-3'  >
					<img src={crateBarrel} />
					<img src={hookerFurniture} />
					<img src={bassett} />
					<img src={abdFurniture} />
				</div>
			</div>
			<div className="flex w-full justify-between mt-36">
				<img className='mr-16' src={pictureRoom} />
				<div className=''>
					<h5 className='font-bold text-2xl mt-10 w-80 leading-relaxed' >
						Flexibility And Option To Suit Your Lifestyle
					</h5>
					<p className='mt-7 font-medium text-base leading-relaxed'>
						We can make any furniture bigger or smaller, deeper or shallower,
						softer or firmer. Think of us as a workshop where the options are nearly
						unlimited. Our goal is to make your furniture.
					</p>                
					<button className='text-sm mt-11 h-11 w-24 bg-light-orange text-white font-extrabold rounded-xl'>
						Explore
          </button>
				</div>
			</div>
			<div>
				<div className='flex justify-between mt-36'>
					<h5 className="font-extrabold text-2xl flex items-center">
						Best Selling Products
					</h5>
					<button className='text-sm h-11 w-24 bg-white text-light-orange font-extrabold rounded-xl border-light-orange border-2'>
						Show All
					</button>
				</div>
				<div>
					<Catalogue />
				</div>
			</div>
		</div>

		
  )
}

export default HomePage;
