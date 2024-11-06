import React from 'react'
import MainContainer from '../Container/container'
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const BookTable = () => {

    const { register, handleSubmit, watch, formState: { errors },reset } = useForm();
    const onSubmit = data => {
       

        Swal.fire({
            title: `Hello ${data.name} you are booked table at ${data.date}`,
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
          });

        reset()
    }


    return (
        <div style={{ backgroundImage: "url('/contact-bg.jpg')" }} className=' py-14 bg-cover text-white'>
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

                    <form className="flex flex-col  gap-3" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col md:flex-row items-center gap-2" >
                            <input className='input' type="text" placeholder='Name*' {...register("name",{required:true})} name='name' />
                            {errors.name && <p>This field is required</p>}
                            <input className='input' type="text" placeholder='Email*' {...register("email",{required:true})} name='email' />
                            {errors.email && <p>This field is required</p>}
                        </div>
                        <div className="flex flex-col md:flex-row items-center gap-2">
                            <input className='input' type="date" placeholder='Reservision Date*' {...register("date",{required:true})} name='date' />
                            {errors.date && <p>This field is required</p>}
                            <input className='input' type="number" placeholder='Total People*' {...register("people",{required:true})} name='people' />
                            {errors.people && <p>This field is required</p>}
                        </div>

                        <textarea cols={5} className='input w-full' {...register("message",{required:true})} placeholder='Message' />
                        {errors.message && <p>This field is required</p>}

                        <button className='btn uppercase' type='submit'>
                            Book Now
                        </button>
                    </form>
                </div>
            </MainContainer>
        </div>
    )
}

export default BookTable