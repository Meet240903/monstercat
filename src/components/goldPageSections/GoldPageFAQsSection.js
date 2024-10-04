import React, { useState } from 'react';
import '../../assets/styles/goldPageSectionCSS/goldPageFAQsSection.css';
import { FaMinus, FaPlus } from 'react-icons/fa';

const GoldPageFAQsSection = () => {
    const [showContent, setShowContent] = useState(null);
    const [activeIndex, setActiveIndex] = useState(null); // For storing active accordion index

    const aboutMCGoldData = [
        {
            title: 'What does Monstercat Gold mean by "content creator friendly music," or "claim free music"?',
            contentData: [
                {
                    content: "Monstercat Gold's subscription offers content creators thousands of songs to use claim free in content. This means that content creators can stream, or play, the music offered through our service, and Monstercat will not claim your advertising revenue.",
                },
                {
                    content: "Want more information on what it means to be a content creator on Twitch and YouTube? Click here to read our blog!",
                },
            ]
        },
        {
            title: 'Will Monstercat "strike" my content?',
            contentData: [
                {
                    content: "NO! Monstercat will not copyright strike your channel(s). However, if you use Monstercat music without a Gold subscription, you'll receive a claim from us. This will not harm your channel, but it means that advertising revenue from your video will go to the label and the artist(s) involved with the song.",
                },
                {
                    content: "Want more information on how to avoid copyright, or DMCA, strikes? Click here to read our blog!",
                },
            ]
        },
        {
            title: 'I want to use Monstercats music in my videos/streams. What are the basics I need to know?',
            contentData: [
                {
                    content: "When using our music in your videos/streams, creators must abide by the following terms (whether you have a license or not):",
                },
                {
                    content: "Although we offer thousands of songs through Monstercat Gold, not all Monstercat label releases are available for use with a content creator license. For more information on what is excluded from our licensing offering, click here.",
                },
            ]
        },
        {
            title: 'What are "Non-Licensable" tracks?',
            contentData: [
                {
                    content: "Non-Licensable tracks are tracks that cannot be used in your content, even with a Gold subscription. You can see the list of tracks here.",
                },
                {
                    content: "Monstercat Gold also has a built-in feature that will allow you to automatically skip tracks that are non-licensable. Log into your account, click the Account tab, and check the Skip Non-licensable Tracks box. And you're ready to go!",
                },
            ]
        },
        {
            title: 'As a corporate entity, am I allowed to take advantage of the Content Creator License?',
            contentData: [
                {
                    content: "As a corporate entity, am I allowed to take advantage of the Content Creator License?",
                },
                {
                    content: "No, Monstercat Gold is available for individual licenses only. Commercial/corporate entities must purchase a Commercial License.",
                },
            ]
        },
    ];

    const usingMyAccountData = [
        {
            title: 'How do I get the music?',
            contentData: [
                {
                    content: "Sign into your Monstercat Gold account and listen to music directly from our webplayer. Monstercat Gold allows for full high-quality track downloads of our catalog, as well as early streaming access to new songs.",
                },
            ]
        },
        {
            title: 'How do I download music? What formats are available?',
            contentData: [
                {
                    content: "Simply search for the track you want to download here and click the download button.",
                },
                {
                    content: "To choose your preferred download format (we offer MP3, FLAC, or WAV files), go to the Account page and edit Preferred Download Format under Settings.",
                },
            ]
        },
        {
            title: 'If I received a claim even though I already purchased a license, what do I do?',
            contentData: [
                {
                    content: "Sometimes YouTube accidentally claims videos on channels that have a license. Don't panic -- this WILL NOT hurt your channel!",
                },
                {
                    content: "If this happens, you can manually release the claim from our Claim Release page here. Make sure you are logged into your Monstercat.com account when you are releasing the claims.",
                },
            ]
        },
        {
            title: 'Can I change my YouTube/Twitch ID?',
            contentData: [
                {
                    content: "If you'd like to change your ID, simply log in, visit the Licenses tab in the Gold account menu, delete your ID and add a new one.",
                },
            ]
        },
        {
            title: 'How do I change my payment information?',
            contentData: [
                {
                    content: "“In the “Gold Subscription” tab under “My User Settings” you can add new payment options under “Manage or Cancel Subscription” and link new payment options to your Gold subscription.",
                },
            ]
        },
    ];

    const toggleAccordion = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null); // Close the active accordion
        } else {
            setActiveIndex(index); // Open the clicked accordion
        }
    };

    return (
        <div className='gold-page-faqs-section-container'>
            <div className='gold-page-faqs-section-title'>
                <h1>Frequently Asked Questions</h1>
            </div>
            <div className='gold-page-faqs-section-content'>
                {showContent === null && (
                    <>
                        <div className='gold-page-faqs-section-content-box'
                            onClick={() => setShowContent('about-monstercat-gold')}
                        >
                            <p>About Monstercat Gold</p>
                            <p>&gt;</p>
                        </div>
                        <div className='gold-page-faqs-section-content-box'
                            onClick={() => setShowContent('using-my-account')}
                        >
                            <p>Using My Account</p>
                            <p>&gt;</p>
                        </div>
                    </>
                )}

                {showContent === 'about-monstercat-gold' && (
                    <div className='gold-page-faqs-section-content-about-mc-gold-content'>
                        <div className='gold-page-faqs-section-content-about-mc-gold-box-title'>
                            <p>About Monstercat Gold</p>
                            <p onClick={() => setShowContent(null)} style={{ cursor: 'pointer' }}>&lt; back</p>
                        </div>
                        {
                            aboutMCGoldData?.map((data, index) => (
                                <div key={index}>
                                    <div className='gold-page-faqs-section-content-about-mc-gold-box'
                                        onClick={() => toggleAccordion(index)}
                                        style={{
                                            backgroundColor: activeIndex === index ? '#f1d384' : '',
                                            color: activeIndex === index ? '#000' : ''
                                        }}
                                    >
                                        <p>{data?.title}</p>
                                        <p>
                                            {
                                                activeIndex === index ? <FaMinus /> : <FaPlus />
                                            }
                                        </p>
                                    </div>
                                    {
                                        activeIndex === index && (
                                            <div className='gold-page-faqs-section-content-about-mc-gold-box-accordion-content'>
                                                {
                                                    data?.contentData?.map((contentData, subIndex) => (
                                                        <div key={subIndex}>
                                                            <p>{contentData?.content}</p>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        )
                                    }
                                </div>
                            ))
                        }
                    </div>
                )}

                {showContent === 'using-my-account' && (
                    <div className='gold-page-faqs-section-content-about-mc-gold-content'>
                        <div className='gold-page-faqs-section-content-about-mc-gold-box-title'>
                            <p>Using my account</p>
                            <p onClick={() => setShowContent(null)} style={{ cursor: 'pointer' }}>&lt; back</p>
                        </div>
                        {
                            usingMyAccountData?.map((data, index) => (
                                <div key={index}>
                                    <div className='gold-page-faqs-section-content-about-mc-gold-box'
                                        onClick={() => toggleAccordion(index)}
                                        style={{
                                            backgroundColor: activeIndex === index ? '#f1d384' : '',
                                            color: activeIndex === index ? '#000' : ''
                                        }}
                                    >
                                        <p>{data?.title}</p>
                                        <p>
                                            {
                                                activeIndex === index ? <FaMinus /> : <FaPlus />
                                            }
                                        </p>
                                    </div>
                                    {
                                        activeIndex === index && (
                                            <div className='gold-page-faqs-section-content-about-mc-gold-box-accordion-content'>
                                                {
                                                    data?.contentData?.map((contentData, subIndex) => (
                                                        <div key={subIndex}>
                                                            <p>{contentData?.content}</p>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        )
                                    }
                                </div>
                            ))
                        }
                    </div>
                )}
            </div>
        </div>
    );
};

export default GoldPageFAQsSection;
