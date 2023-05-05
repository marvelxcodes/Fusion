import Image from 'next/image';
import NavItem from '@/components/NavItem';
import Link from 'next/link';

const Header = () => {
	return (
		<header className='w-full flex items-center h-20 bg-[#0e031e] px-8'>
			<Link className='flex-1 flex gap-3 items-center text-white' href='/'>
				<Image className='invert w-12 h-12' alt='logo' width={40} height={60} src='/logo512.png' />
            <h3 className='text-2xl font-bold'>Fusion</h3>
			</Link>
			<nav className='space-x-5'>
            <NavItem href='/blog'>Blog</NavItem>
            <NavItem href='/updates'>Updates</NavItem>
            <NavItem href='/support'>Support</NavItem>
         </nav>
		</header>
	);
};

export default Header;
