import React from 'react'
import {BiErrorAlt} from 'react-icons/bi'
const EmptySearch = ({filter, search}:{filter:string; search:string}) => {
  return (
    <div className='search-error'>
        <div className="container">
            <div className='fetch-error-img'>
                    <span className="icon"><BiErrorAlt /></span>
            </div>
            <div className="fetch-error-content">
                {
                    filter.length>0?
                    (<>
                        <p className="error-header">
                            {'Sorry:) '}<strong>{`${search}`}</strong>{' is found in '}<strong>{`${filter}`}</strong>
                        </p>
                        <p className="error-statement">
                            Change the filter to default to expand the search region
                        </p>
                    </>
                    ):
                    (
                        <p className="error-header">
                         {'Sorry:) '}<strong>{`${search}`}</strong>{' is not found'}
                    </p> 
                    )

                }
                
            </div>
        </div>
    </div>
  )
}

export default EmptySearch