import React, { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { BiCalendar } from 'react-icons/bi';
import { AiFillClockCircle, AiOutlineNumber } from 'react-icons/ai';
import { ReservationQuantity, ReservationTime } from './ReservationData'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



const Reservation = () => {
    const [name, setName] = useState("")
    const [quantity, setQuantity] = useState(undefined);
    const [date, setDate] = useState(undefined);
    const [time, setTime] = useState(undefined);

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success('Reservation Submitted!', {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
        });


        setQuantity("")
        setDate("")
        setTime("")
    }

    const handleReset = () => {
        setQuantity("")
        setDate("")
        setTime("")
    }

    return (
        <div id="reservation" className={name && quantity && date && time ? 'form-styling-wrapper preview' : 'form-styling-wrapper'}>
            <form className='reservation-form'>
                <h2>Book a Reservation</h2>

                <div className='form-inputs-wrapper'>
                    <div className='name'>
                        <FaUser className='user-icon' />
                        <input type="string" placeholder='Name for Reservation' value={name} onChange={(e) => setName(e.target.value)} />

                    </div>
                    <div className='quantity'>
                        <AiOutlineNumber className='user-icon' />
                        <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                            {
                                ReservationQuantity.map((item) => (
                                    <option key={item?.quantity}>{item?.quantity} guests</option>
                                ))
                            }
                        </select>
                    </div>

                    <div className='calendar'>
                        <BiCalendar className='calendar-icon' />
                        <input type="date" placeholer="DD/MM/YYYY" value={date} onChange={(e) => setDate(e.target.value)} />
                    </div>

                    <div className='time'>
                        <AiFillClockCircle className='time-icon' />
                        <select value={time} onChange={(e) => setTime(e.target.value)}>
                            {
                                ReservationTime.map((item) => (
                                    <option key={item?.quantity}>{item?.time}</option>
                                ))
                            }
                        </select>
                    </div>

                    <button onClick={handleReset} type="button">Reset</button>

                    <ToastContainer
                        position="bottom-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                    />
                </div>
                {
                    quantity && date && time && (
                        <div className='preview-reservation'>
                            <p>The name for your reservation is: <br /> <span>{name}</span></p>
                            <p>Your Selected Number of Guests is: <br /> <span>{quantity}</span></p>
                            <p>Your Selected Date is: <br /> <span>{date}</span></p>
                            <p>Your Selected Time is: <br /> <span>{time}</span></p>
                            <button type="submit" onClick={(e) => handleSubmit(e)}>Submit Reservation</button>
                            <span></span>
                        </div>
                    )
                }
            </form>


        </div>
    )
}

export default Reservation