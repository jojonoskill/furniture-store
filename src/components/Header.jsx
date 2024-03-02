import logo from '../assets/logo.svg'; // Adjust the path according to your file structure
import shoppingCart from '../assets/icons/shoppingCart.svg';

const Header = () => {

  return (
    <div className="flex w-full justify-between">
			<img src={logo} alt="Lumo" />
			<div className='flex justify-between text-xl child:ml-12 child:flex child:justify-center child:items-center'>
				<span>Products</span> 
				<span>About us</span>
				<span>Contacts</span>
				<img className='w-5' src={shoppingCart} alt="Lumo" />

			</div>
		</div>
  )
}

export default Header;
