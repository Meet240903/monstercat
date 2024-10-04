import React from 'react'
import GoldPageTopSection from './goldPageSections/GoldPageTopSection'
import GoldPageTrustedBySection from './goldPageSections/GoldPageTrustedBySection'
import GoldPageFeaturesSection from './goldPageSections/GoldPageFeaturesSection'
import GoldPageFAQsSection from './goldPageSections/GoldPageFAQsSection'

const GoldPage = () => {
    return (
        <>
            <GoldPageTopSection />
            <GoldPageTrustedBySection />
            <GoldPageFeaturesSection />
            <GoldPageFAQsSection />
        </>
    )
}

export default GoldPage
