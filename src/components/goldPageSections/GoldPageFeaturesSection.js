import React from 'react'
import '../../assets/styles/goldPageSectionCSS/goldPageFeaturesSection.css'
import sectionImg1 from '../../assets/images/golds/featuresSectionImgs/sectionImg1.webp'
import sectionImg2 from '../../assets/images/golds/featuresSectionImgs/sectionImg2.webp'

const GoldPageFeaturesSection = () => {
    const sectionData = [
        {
            sectionImg: sectionImg1,
            contentData: [
                {
                    title: "OUR CATALOGUE FEATURES THOUSANDS OF SONGS",
                    content: "Enjoy your music through our webplayer, or download high quality files (FLAC, WAV & MP3)",
                },
                {
                    title: "CONTENT CREATOR SAFE MUSIC",
                    content: "You are safe from DMCA strikes on Twitch or YouTube, and you can monetize multiple channels, claim free, while subscribed to Monstercat Gold. This blog post explains more about DMCA strikes and why content creators love us.",
                },
                {
                    title: "SUPPORT THE ARTISTS",
                    content: "Your streams help artists boost the signal on music discovery – artists are paid out from Gold subscriptions based on how often people download and stream their songs.",
                },
            ]
        },
        {
            sectionImg: sectionImg2,
            direction: true,
            contentData: [
                {
                    title: "EARLY ACCESS",
                    content: "Listen to releases on our webplayer the day before they are released to everyone else. You’ll also receive early access to new apparel drops and special Monstercat news!",
                },
                {
                    title: "SHOP PERKS",
                    content: "Gold users receive a monthly discount code to the Monstercat Shop, your home for apparel, event merch, and other must-haves for the music lover. The longer you’re a member, the bigger your discount!",
                },
                {
                    title: "COMMUNITY PERKS",
                    content: "Your membership comes with exclusive access to our Gold-only Discord channel. Get a custom reddit flair on /r/Monstercat and show off your bling.",
                },
            ]
        },
    ]
    return (
        <>
            <div className='gold-page-features-section-container'>
                <div className='gold-page-features-section-title'>
                    <h4>Gold Features</h4>
                </div>
                {
                    sectionData?.map((data, index) => (
                        <div className='gold-page-features-section-content' key={index}
                            style={{
                                flexDirection: data?.direction ? 'row-reverse' : ''
                            }}
                        >
                            <div className='gold-page-features-section-left-content'>
                                {
                                    data?.contentData?.map((data, index) => (
                                        <div className='gold-page-features-section-left-content-box' key={index}>
                                            <h2>{data?.title}</h2>
                                            <p>{data?.content}</p>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className='gold-page-features-section-right-content'>
                                <img src={data?.sectionImg} alt='section-img' />
                            </div>
                        </div>
                    ))
                }
                <div className='gold-page-features-section-button'>
                    <button>join gold now</button>
                </div>
            </div>
        </>
    )
}

export default GoldPageFeaturesSection
