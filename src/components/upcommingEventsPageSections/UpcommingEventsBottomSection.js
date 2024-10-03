import React, { useState } from 'react'
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaAngleLeft, FaAngleRight, FaBars, FaSortAmountDown } from 'react-icons/fa'
import '../../assets/styles/upcommingEventsPageSectionCSS/upcommingEventsBottomSection.css'

const UpcommingEventsBottomSection = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const sectionData = [null]
    const itemsPerPage = 5;
    const totalPages = Math.ceil(sectionData.length / itemsPerPage);
    // Calculate start and end indices for slicing the data
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = sectionData.slice(startIndex, endIndex);
    // Handle pagination
    const goToPage = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };
    return (
        <>
            <div className='upcomming-events-bottom-section-container'>
                <div className='upcomming-events-bottom-section-title'>
                    <h1>Upcoming Events</h1>
                    <div className='upcomming-events-bottom-section-title-buttons'>
                        <button><FaBars /> filters</button>
                        <button><FaSortAmountDown /> desc.</button>
                    </div>
                </div>
                <div className='upcomming-events-bottom-section-content'>
                    <h1>No events were found.</h1>
                </div>
                {/* Pagination Controls */}
                <div className='news-page-bottom-section-pagination-controls'>
                    <button onClick={() => goToPage(1)} disabled={currentPage === 1}>
                        <FaAngleDoubleLeft />
                    </button>
                    <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
                        <FaAngleLeft /> PREV
                    </button>
                    <span>{currentPage}</span>
                    <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
                        NEXT <FaAngleRight />
                    </button>
                    <button onClick={() => goToPage(totalPages)} disabled={currentPage === totalPages}>
                        <FaAngleDoubleRight />
                    </button>
                </div>
            </div>
        </>
    )
}

export default UpcommingEventsBottomSection
