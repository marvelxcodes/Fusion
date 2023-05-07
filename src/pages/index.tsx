import Header from '@/components/Header';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
	return (
		<AnimatePresence>
			<Header />
			<main>
				{/* Section 1 */}
				<div className='gradientBG relative overflow-hidden flex max-md:flex-col min-h-[calc(100vh-5rem)]'>
					<div className='flex-1 p-8 md:p-20 lg:p-24 space-y-10 z-10 flex flex-col items-center justify-center md:items-start'>
						{/* App of the Day Image */}
						<motion.div
							className='appOfTheDayImg overflow-hidden h-24 w-56 bg-no-repeat'
							whileInView={{
								opacity: 1,
								transform: 'translate(0)',
							}}
							initial={{
								opacity: 0,
								transform: 'translate(-1rem)',
							}}
						/>
						<motion.h1
							className='text-white text-6xl font-semibold max-md:text-center'
							whileInView={{
								opacity: 1,
								transform: 'translate(0)',
							}}
							initial={{
								opacity: 0,
								transform: 'translate(-1rem)',
							}}
						>
							Transform Your Ideas into Art with AI Image Generation
						</motion.h1>
						<motion.div
							whileInView={{
								opacity: 1,
								transform: 'translate(0)',
							}}
							initial={{
								opacity: 0,
								transform: 'translate(-1rem)',
							}}
							className='flex gap-x-8'
						>
							<a href='https://www.apple.com/in/app-store/' target="_blank"  className='h-12 w-36'>
								<Image
									alt='Download on app store'
									width={160}
									height={10}
									src='/assets/downloadOnTheAppStore.png'
								/>
							</a>
							<a href='https://play.google.com/store/' target="_blank" className='h-12 w-36'>
								<Image
									alt='Get it on Google play store'
									width={160}
									height={10}
									src='/assets/getItOnGooglePlay.png'
								/>
							</a>
						</motion.div>
					</div>
					<motion.div
						whileInView={{
							opacity: 1,
							transform: 'translate(0)',
						}}
						initial={{
							opacity: 0,
							transform: 'translate(1rem)',
						}}
						className='flex-1 grid place-items-center'
					>
						<Image
							className='max-md:absolute bottom-0 opacity-60 md:inset-0 z-0'
							alt='product image'
							height={500}
							width={500}
							src='/assets/PhoneImage.png'
						/>
					</motion.div>
				</div>
				{/* Section 2 */}
				<div className='flex flex-col md:flex-row h-screen'>
					
				</div>
			</main>
		</AnimatePresence>
	);
}
