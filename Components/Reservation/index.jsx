import React, { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { BiCalendar } from 'react-icons/bi';
import { AiFillClockCircle } from 'react-icons/ai';
import { ReservationQuantity, ReservationTime } from './ReservationData'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



const Reservation = () => {
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
        <div id="reservation" className={quantity && date && time ? 'form-styling-wrapper preview' : 'form-styling-wrapper'}>
            <form className='reservation-form'>
                <h2>Book a Reservation</h2>

                <div className='form-inputs-wrapper'>
                    <div className='quantity'>
                        <FaUser className='user-icon' />
                        <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                            {
                                ReservationQuantity.map((item) => (
                                    <option key={item?.quantity}>{item?.quantity} people</option>
                                ))
                            }
                        </select>
                    </div>

                    <div className='calendar'>
                        <BiCalendar className='calendar-icon' />
                        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
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
                            <p>Your Selected Number of Patrons is: {quantity}</p>
                            <p>Your Selected Date is: {date}</p>
                            <p>Your Selected Time is: {time}</p>
                            <span>Complete Reservation? </span>
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