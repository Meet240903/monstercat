import React, { useState } from 'react';
import '../../assets/styles/newsPageSectionsCSS/newsPageBottomSection.css';
import { FaSearch, FaSortAmountDown, FaTag, FaAngleLeft, FaAngleRight, FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import newsPageData from '../../data/NewsPageData';

const NewsPageBottomSection = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [newsType, setNewsType] = useState('all'); // Default to 'all'

    const itemsPerPage = 5;

    // Filter the news items based on the selected news type
    const filteredData = newsType === 'all'
        ? newsPageData // Show all news if 'all' is selected
        : newsPageData.filter(item => item.newsType.toLowerCase() === newsType.toLowerCase());

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    // Calculate start and end indices for slicing the data
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = filteredData.slice(startIndex, endIndex);

    // Truncate title for longer text
    const truncateTitle = (title, maxLength) => {
        if (!title) return "";
        return title.length > maxLength ? title.substring(0, maxLength) + "..." : title;
    };

    // Handle pagination
    const goToPage = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    // Handle header click to filter news based on the clicked type
    const handleHeaderClick = (type) => {
        setNewsType(type); // Set the selected news type
        setCurrentPage(1); // Reset to the first page when changing filter
    };

    const headerData = [
        { title: "all" },
        { title: "announcements" },
        { title: "artist features" },
        { title: "lost civ" },
    ];

    return (
        <>
            <div className='news-page-bottom-section-container'>
                <div className='news-page-bottom-section-title'>
                    <h1>news</h1>
                    <div className='news-page-bottom-section-header-body'>
                        <div className='news-page-bottom-section-header-body-left-content'>
                            {headerData.map((data, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleHeaderClick(data.title)} // Filter when clicked
                                    className={`header-link ${newsType === data.title ? 'active' : ''}`} // Optional: Add active class for styling
                                >
                                    <h4>{data.title}</h4>
                                </div>
                            ))}
                        </div>
                        <div className='news-page-bottom-section-header-body-right-content'>
                            <button className='news-page-bottom-section-header-body-search-button'>
                                <FaSearch />
                            </button>
                            <button className='news-page-bottom-section-header-body-desc-button'>
                                <FaSortAmountDown /> desc
                            </button>
                            <button className='news-page-bottom-section-header-body-tags-button'>
                                <FaTag /> tags
                            </button>
                        </div>
                    </div>
                </div>

                {/* Render only the current 5 items */}
                {currentItems.map((data, index) => (
                    <div className='news-page-bottom-section-content' key={index}
                        style={{
                            flexDirection: data?.direction ? 'row-reverse' : ''
                        }}
                    >
                        <div className='news-page-bottom-section-left-content'
                            style={{
                                backgroundImage: `url(${data.sectionImg})`
                            }}
                        >
                        </div>
                        <div className='news-page-bottom-section-right-content'>
                            <h1>{data?.title}</h1>
                            <div className='news-page-bottom-section-right-content-news-type-content'>
                                <span>{data?.date}</span>
                                <span>{data?.newsType}</span>
                            </div>
                            <p>{truncateTitle(data?.content, 300)}</p>
                        </div>
                    </div>
                ))}

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
    );
};

export default NewsPageBottomSection;
