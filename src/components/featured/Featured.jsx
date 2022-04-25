import React from 'react'
import './featured.scss';

import MoreVertIcon from '@mui/icons-material/MoreVert';

const Featured = () => {
  return (
    <div className='featured'>
        <div className="top">
          <div className="title">
            Total Revenue
            <MoreVertIcon fontSize='small'/>
          </div>
        </div>
        <div className="bottom"></div>

    </div>
  )
}

export default Featured