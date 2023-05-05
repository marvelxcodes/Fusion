import Link from 'next/link';
import React, { ReactNode } from 'react';
import { useRouter } from 'next/router';

type NavItemPropsType = {
	href: string;
	children: ReactNode;
};

const NavItem = ({ children, href }: NavItemPropsType) => {
	const { asPath } = useRouter();
	return (
		<Link className={`${asPath === href} text-white text-sm font-medium`} href={href}>
			{children}
		</Link>
	);
};

export default NavItem;
