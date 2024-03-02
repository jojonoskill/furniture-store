import React from 'react';
import logo from '../assets/logo.svg';

const FooterSection = ({ title, children }) => {
  return (
    <div className="">
      <div className="font-bold mb-9 h-4">{title}</div>
      {children}
    </div>
  );
};

const Footer = () => {
  return (
    <div className="bg-light-orange/80 h-64 mt-24 w-screen">
			<div className="flex justify-between mt-8 mx-96 px-3">
				<div>
						<img src={logo} className='w-28 h-12' />
						<p className="text-xs w-60 font-semibold mt-11">Furniture from leading European manufacturers</p>
					</div>
					<FooterSection title="Services">
						<ul className="text-sm child:my-2 child:font-medium">
							<li>Product</li>
							<li>Categories</li>
							<li>Brands</li>
						</ul>
					</FooterSection>
					<FooterSection title="" className="mx-8">
						<ul className="text-sm child:my-2 child:font-medium">
								<li>Payment & Delivery</li>
								<li>Return & Store Policies</li>
								<li>FAQ</li>
						</ul>
					</FooterSection>
					<FooterSection title="About Us" className="mx-8">
						<ul className="text-sm child:my-2 child:font-medium">
							<li>Our Story</li>
							<li>Team</li>
							<li>Careers</li>
						</ul>
					</FooterSection>
					<FooterSection title="Contact" className="mx-8">
						<ul className="text-sm child:my-2 child:font-medium">
							<li>fntr@lumostore.com</li>
							<li>(+380) 568-367-6501</li>
						</ul>
					</FooterSection>
				</div>
    </div>
  );
};

export default Footer;