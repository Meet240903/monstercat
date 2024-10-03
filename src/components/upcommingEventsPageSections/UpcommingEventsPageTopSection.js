import React from 'react'
import '../../assets/styles/upcommingEventsPageSectionCSS/upcommingEventsPageTopSection.css'
import sectionImg1 from '../../assets/images/events/topSectionImgs/sectionImg1.png'
import { FaLocationDot, FaTicket } from 'react-icons/fa6'
import { FaCalendarPlus } from 'react-icons/fa'

const UpcommingEventsPageTopSection = () => {
    return (
        <>
            <div className='upcomming-events-page-top-section-container'>
                <div className='upcomming-events-page-top-section-bg-layer'></div>
                <div className='upcomming-events-page-top-section-absolute-layer'>
                    <div className='upcomming-events-page-top-section-title'>
                        <h1>Featured <br /><span>Live Events</span></h1>
                    </div>
                    <div className='upcomming-events-page-top-section-content'>
                        <div className='upcomming-events-page-top-section-left-content'>
                            <img src={sectionImg1} alt="section-img" />
                        </div>
                        <div className='upcomming-events-page-top-section-right-content'>
                            <p><b>Upcoming Event</b> - October 26, 2024</p>
                            <h1>Horizon Festival</h1>
                            <span><FaLocationDot /> Manila</span>
                            <div className='upcomming-events-page-top-section-right-content-buttons'>
                                <button className='upcomming-events-page-top-section-right-content-learn-more-buttons'>learn more</button>
                                <button className='upcomming-events-page-top-section-right-content-get-tickets-buttons'><FaTicket /> get tickets</button>
                                <button className='upcomming-events-page-top-section-right-content-calender-buttons'><FaCalendarPlus /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpcommingEventsPageTopSection
