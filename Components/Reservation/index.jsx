import React from 'react'
import { FaUser } from 'react-icons/fa'
import { BiCalendar } from 'react-icons/bi';
import { AiFillClockCircle } from 'react-icons/ai';
import { ReservationQuantity, ReservationTime } from './ReservationData'


const Reservation = () => {
    return (
        <div className='form-styling-wrapper'>
            <form className='reservation-form'>
                <h2>Find a Table</h2>

                <div className='form-inputs-wrapper'>
                    <div className='quantity'>
                        <FaUser className='user-icon' />
                        <select>
                            {
                                ReservationQuantity.map((item) => (
                                    <option key={item?.quantity}>{item?.quantity} people</option>
                                ))
                            }
                        </select>
                    </div>

                    <div className='calendar'>
                        <BiCalendar className='calendar-icon' />
                        <input type="date" />
                    </div>

                    <div className='time'>
                        <AiFillClockCircle className='time-icon' />
                        <select>
                            {
                                ReservationTime.map((item) => (
                                    <option key={item?.quantity}>{item?.time}</option>
                                ))
                            }
                        </select>
                    </div>

                    <button type="submit">Submit Reservation</button>
                </div>
            </form>
        </div>
    )
}

export default Reservation