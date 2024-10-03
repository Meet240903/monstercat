import React from 'react'
import '../../assets/styles/eventsPageSectionCSS/eventsPageTopTwoSection.css'
import sectionImg1 from '../../assets/images/events/topSectionImgs/sectionImg4.webp'

const EventsPageTopTwoSection = () => {
    return (
        <>
            <div className='events-page-top-two-section-container'>
                <div className='events-page-top-two-section-content'>
                    <div className='events-page-top-two-section-left-content'>
                        <img src={sectionImg1} alt='section-img' />
                    </div>
                    <div className='events-page-top-two-section-right-content'>
                        <h1>Experience events in person</h1>
                        <p>Live events bring the Monstercat experience to our fans across the world, in living colour and sound. Immersive productions and unparalleled lineups of touring artists are the hallmarks of our shows. Whether it’s a stage at a major festival or a sold out night at a top venue, providing a powerful connection between artists, fans, and the Monstercat family is what our events are all about.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EventsPageTopTwoSection
