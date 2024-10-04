import React from 'react'
import '../../assets/styles/goldPageSectionCSS/goldPageTrustedBySection.css'
import sectionImg1 from '../../assets/images/golds/trustedBySectionImgs/sectionImg1.webp'
import sectionImg2 from '../../assets/images/golds/trustedBySectionImgs/sectionImg2.webp'
import sectionImg3 from '../../assets/images/golds/trustedBySectionImgs/sectionImg3.jpeg'

const GoldPageTrustedBySection = () => {
    const sectionData = [
        {
            sectionImg: sectionImg1,
            title: "NYMN",
            content: "In scary DMCA times like these, Monstercat Gold has been an absolute life saver, letting me enjoy a vast library of great tunes without having to look over my back.",
        },
        {
            sectionImg: sectionImg2,
            title: "Vikkstar",
            content: "I’ve always enjoyed music on Monstercat & have been using it within my video content for the past few years. Being able to do this with no copyright concerns is fantastic.",
        },
        {
            sectionImg: sectionImg3,
            title: "Joblessgarrett",
            content: "I have been a part of the Monstercat family for over 5 years. Monstercat gives me the peace of mind from DMCA issues with amazing music to choose from! If you’re a streamer and still not using Monstercat music, you’re missing out!",
        },
    ]
    return (
        <>
            <div className='gold-page-trusted-by-section-container'>
                <div className='gold-page-trusted-by-section-title'>
                    <h1>trusted by ...</h1>
                </div>
                <div className='gold-page-trusted-by-section-content'>
                    {
                        sectionData?.map((data, index) => (
                            <>
                                <div className='gold-page-trusted-by-section-content-box' key={index}>
                                    <p>{data?.content}</p>
                                    <div className='gold-page-trusted-by-section-content-box-img-body'>
                                        <img src={data?.sectionImg} alt='section-img' />
                                        <p>{data?.title}</p>
                                    </div>
                                </div>
                                <div className='gold-page-trusted-by-section-content-box-mobile-img-body'>
                                    <img src={data?.sectionImg} alt='section-img' />
                                    <p>{data?.title}</p>
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default GoldPageTrustedBySection
