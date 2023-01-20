import React from 'react'
import { Pagination } from 'react-bootstrap'

const MyPagination = ({pages, limit, offset, setOffset}) => {

    const currentOffset = (page) => (page-1)*limit; 

    const nextPage = (page) => {
        setOffset(currentOffset(page))
    }

    return (
        <Pagination className='d-flex justify-content-center mb-2'>
            {pages.map(page =>
                <Pagination.Item className='pagination' active={currentOffset(page) === offset} onClick={() => nextPage(page)} key={page}>{page}</Pagination.Item>
            )}
        </Pagination>
    )
}

export default MyPagination