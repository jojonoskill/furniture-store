import { useState } from 'react';

const Catalogue = () => {

	const [activeButton, setActiveButton] = useState('Sofa');

  const buttons = ['Sofa', 'Armchair', 'Chair', 'Bed', 'All'];


	return (
		<div className="mt-12">
			{buttons.map((button) => (
        <button
          key={button}
          className={`px-4 py-2 border rounded-2xl ${
            activeButton === button ? 'bg-light-orange text-white' : 'bg-white text-black'
          }`}
          onClick={() => setActiveButton(button)}
        >
          {button}
        </button>
      ))}
			<hr className="mt-9"/>
		</div>
	)
}

export default Catalogue;