import Link from 'next/link';
import React, { ReactNode } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
type NavItemPropsType = {
	href: string;
	children: ReactNode;
};

const NavItem = ({ children, href }: NavItemPropsType) => {
	const { asPath } = useRouter();
	return (
		<Link
			className={`${
				asPath === href
			} text-white text-center text-lg md:text-sm font-medium`}
			href={href}
		>
			<motion.p initial={{translateY: "1rem"}} whileInView={{translateY: "0"}}>{children}</motion.p>
		</Link>
	);
};

export default NavItem;
