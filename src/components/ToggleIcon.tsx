import { Dispatch, SetStateAction } from 'react';

type ToggleIconPropsType = {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const ToggleIcon = ({ isOpen, setIsOpen }: ToggleIconPropsType) => {
	return (
		<span className='absolute right-5 md:hidden' onClick={() => setIsOpen((isOpen) => !isOpen)}>
			{isOpen ? (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='white'
					className='w-8 h-8'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M6 18L18 6M6 6l12 12'
					/>
				</svg>
			) : (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth='1.5'
					stroke='white'
					className='h-8 w-8'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25'
					/>
				</svg>
			)}
		</span>
	);
};
