import React from 'react'
import {PhoneIcon, ArrowSmRightIcon} from '@heroicons/react/outline'
import { ChipIcon, SupportIcon  } from '@heroicons/react/solid'
import bgSupport from '../assets/support.jpeg'

const Support = () => {
  return (
    <div name="support" className='w-full mt-24'>
        <div className='w-full h-[700px] bg-gray-900/90 absolute'>
            <img className='w-full h-full object-cover mix-blend-overlay' src={bgSupport} alt="/" />
        </div>
        <div className='max-w-[1240px] mx-auto text-white relative'>
            <div className='py-4 px-12'>
                <h2 className='text-3xl pt-8 text-gray-300 uppercase text-center'>Support</h2>
                <h2 className='text-5xl text-bold py-6 text-center'>Finding The Right Team</h2>
                <p className='py-4 text-2xl text-slate-300'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries Ini harus nya berisikan deskripsi tentang container Support, mohon di siapkan</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <PhoneIcon className='w-16 p-4 text-white bg-indigo-600 rounded-xl mt-[-4rem]' />
                        <h2 className='font-bold text-2xl my-6'>Sales</h2>
                        <p className='text-gray-600 text-xl'>Ini harus nya berisikan deskripsi tentang container Support, mohon di siapkan lorem Ipsum Asu Koe coeg</p>
                    </div>
                    <div className='bg-slate-200 pl-8 py-4'>
                        <p className='flex item-center text-indigo-600'>Contact Us <ArrowSmRightIcon className='w-5 ml-2'/> </p>
                    </div>
                </div>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <ChipIcon className='w-16 p-4 text-white bg-indigo-600 rounded-xl mt-[-4rem]' />
                        <h2 className='font-bold text-2xl my-6'>Technical Support</h2>
                        <p className='text-gray-600 text-xl'>Ini harus nya berisikan deskripsi tentang container Support, mohon di siapkan lorem Ipsum Asu Koe coeg</p>
                    </div>
                    <div className='bg-slate-200 pl-8 py-4'>
                        <p className='flex item-center text-indigo-600'>Contact Us <ArrowSmRightIcon className='w-5 ml-2'/> </p>
                    </div>
                </div>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <SupportIcon className='w-16 p-4 text-white bg-indigo-600 rounded-xl mt-[-4rem]' />
                        <h2 className='font-bold text-2xl my-6'>Media Inquiries</h2>
                        <p className='text-gray-600 text-xl'>Ini harus nya berisikan deskripsi tentang container Support, mohon di siapkan lorem Ipsum Asu Koe coeg</p>
                    </div>
                    <div className='bg-slate-200 pl-8 py-4'>
                        <p className='flex item-center text-indigo-600'>Contact Us <ArrowSmRightIcon className='w-5 ml-2'/> </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Support