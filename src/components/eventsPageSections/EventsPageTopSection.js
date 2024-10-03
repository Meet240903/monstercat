import React from 'react'
import '../../assets/styles/eventsPageSectionCSS/eventsPageTopSection.css'
import sectionImg1 from '../../assets/images/events/topSectionImgs/sectionImg1.png'
import sectionImg2 from '../../assets/images/events/topSectionImgs/sectionImg2.jpg'
import sectionImg3 from '../../assets/images/events/topSectionImgs/sectionImg3.jpg'

const EventsPageTopSection = () => {
    const sectionData = [
        {
            sectionImg: sectionImg1,
            title: "Horizon Festival",
        },
        {
            sectionImg: sectionImg2,
            title: "Ministry of sound",
        },
        {
            sectionImg: sectionImg3,
            title: "ade 2024",
        },
    ]
    return (
        <>
            <div className='events-page-top-section-container'>
                <div className='events-page-top-section-title'>
                    <h1>The true <br /><span>Monstercat</span><br /> Event Experience</h1>
                </div>
                <div className='events-page-top-section-upcomming-events-content'>
                    <h1>Just to name a few events...</h1>
                    <div className='events-page-top-section-upcomming-events-content-box'>
                        {
                            sectionData?.map((data, index) => (
                                <div className='events-page-top-section-upcomming-events-content-box-body' key={index}>
                                    <img src={data?.sectionImg} alt='section-img' />
                                    <p>{data?.title}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className='events-page-top-section-upcomming-events-content-box-button'>
                        <button>View All Upcoming Events</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EventsPageTopSection
