import { NextPage } from 'next';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image'
import ToiletImg from '../../public/assets/toilet-map.jpg'


const HomePage: NextPage = () => {
  const { status } = useSession();

  const handleLogout = () => {
    signOut({ redirect: false });
  };

  return (
    <div className="flex justify-between items-center p-4">
      <div>
	 	 <p className='mb-5 max-w-[450px]'>
          Welcome to the coding exercise. This exercise is an opportunity for you to
          demonstrate your coding abilities. It&apos;s a chance to showcase your proficiency
          and understanding of key principles and good coding practices.
        </p>
        {status === 'authenticated' ? (
          <button onClick={handleLogout} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Logout
          </button>
        ) : (
		  	
          <Link href="/login" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
           Login</Link>
        )}
      </div>
      <Image src={ToiletImg} alt="Toilet" className="rounded-full" width={500} height={500} />
    </div>
  )
}

export default HomePage;
