import React from 'react'
import "../styling/sortingModel.css";

export const SortingModal = ({ isSortingModalOpen }) => {
    return (
        <>
            {
                isSortingModalOpen && (
                    <div>

                        <div className='sorting-modal'>
                            <div>
                                <h3>Default sorting</h3>
                                <p>Sort by popularity</p>
                                <p>Sort by average rating</p>
                                <p>Sort by latest</p>
                                <p>Sort by price: low to high</p>
                                <p>Sort by price: high to low</p>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

