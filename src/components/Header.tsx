import Image from 'next/image';
import NavItem from '@/components/NavItem';
import Link from 'next/link';
import { ToggleIcon } from '@/components/ToggleIcon';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<AnimatePresence>
			<header className='w-full overflow-hidden relative flex z-40 md:flex-row flex-col md:h-20 max-md:py-6 bg-[#0e031e] px-8'>
				<Link
					className='flex-1 flex gap-3 items-center text-white'
					href='/'
				>
					<Image
						className='invert w-12 h-12'
						alt='logo'
						width={40}
						height={60}
						src='/logo512.png'
					/>
					<h3 className='text-2xl font-bold'>Fusion</h3>
				</Link>
				<ToggleIcon setIsOpen={setIsOpen} isOpen={isOpen} />

				<motion.nav
					initial={{
						scaleY: 0,
					}}
					animate={{
						scaleY: 1,
					}}
					exit={{
						scaleY: 0,
					}}
					className={`${isOpen?"":"max-md:hidden"} max-md:pt-5 max-md:space-y-5 md:space-x-5 flex max-md:flex-col justify-center md:items-center`}
				>
					<NavItem href='/blog'>Blog</NavItem>
					<NavItem href='/updates'>Updates</NavItem>
					<NavItem href='/support'>Support</NavItem>
				</motion.nav>
			</header>
		</AnimatePresence>
	);
};

export default Header;
