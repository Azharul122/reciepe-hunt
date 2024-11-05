import React from 'react'
import MainContainer from '../Container/container'

const BookTable = () => {
    return (
        <div className='bg-[url("./contact-bg.jpg")] py-14 bg-cover'>
            <MainContainer>
                <div className="md:w-[500px] sm:w-[425px] w-full flex flex-col gap-4">
                    <div className="flex  text-primary items-center gap-2">
                        <p className='size-3 bg-primary'></p>
                        <p>Book Now</p>
                    </div>
                    <div className="">
                        <p className='text-2xl font-bold uppercase text-white'>Book Your Table</p>
                    </div>

                    <p className='text-white'>Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
                        molestie vel, ornare non id blandit netus.</p>

                    <div className="flex flex-col  gap-3">
                        <div className="flex flex-col md:flex-row items-center gap-2">
                            <input className='input' type="text" placeholder='Name*' name='name' />
                            <input className='input' type="text" placeholder='Email*' name='email' />
                        </div>
                        <div className="flex flex-col md:flex-row items-center gap-2">
                            <input className='input' type="date" placeholder='Reservision Date*' name='date' />
                            <input className='input' type="number" placeholder='Total People*' name='people' />
                        </div>

                        <textarea cols={5} className='input w-full' placeholder='Message' />

                        <button className='btn uppercase'>
                            Book Now
                        </button>
                    </div>
                </div>
            </MainContainer>
        </div>
    )
}

export default BookTable