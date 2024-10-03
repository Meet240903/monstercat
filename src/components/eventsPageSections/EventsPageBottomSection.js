import React from 'react'
import '../../assets/styles/eventsPageSectionCSS/eventsPageBottomSection.css'

const EventsPageBottomSection = () => {
    return (
        <>
            <div className='events-page-bottom-section-container'>
                <div className='events-page-bottom-section-title'>
                    <h1>EVENTS NEWSLETTER</h1>
                    <p>Want to know when we’ll be visiting a city near you next? Sign up for our Events newsletter!</p>
                </div>
                <div className='events-page-bottom-section-content'>
                    <div className='events-page-bottom-section-content-form'>
                        <div className='events-page-bottom-section-content-form-group'>
                            <label>first name<span>*</span></label>
                            <input type='text' placeholder='First Name' />
                        </div>
                        <div className='events-page-bottom-section-content-form-group'>
                            <label>last name<span>*</span></label>
                            <input type='text' placeholder='Last Name' />
                        </div>
                        <div className='events-page-bottom-section-content-form-group'>
                            <label>email<span>*</span></label>
                            <input type='email' placeholder='Email' />
                        </div>
                    </div>
                    <p>By clicking submit, you agree to receive emails and communications from Monstercat.You can withdraw your consent any time by clicking the unsubscribe link in the footer of any email you receive from us, or by contacting us at support@monstercat.com.</p>
                    <div className='events-page-bottom-section-content-button'>
                        <button>submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EventsPageBottomSection
