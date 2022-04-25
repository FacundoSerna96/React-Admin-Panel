import React from 'react'
import './featured.scss';

import MoreVertIcon from '@mui/icons-material/MoreVert';

//libreria react-circular-progressbar
import {CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpOutlined from '@mui/icons-material/KeyboardArrowUpOutlined';


const Featured = () => {
  return (
    <div className='featured'>
        <div className="top">
          <div className="title">
            Total Revenue
            <MoreVertIcon fontSize='small'/>
          </div>
        </div>
        <div className="bottom">
          <div className="featuredChart">
            <CircularProgressbar value={70} text={'70%'} strokeWidth={5}/>
          </div>
          <p className="title">Total sales made today</p>
          <p className="amount">$320</p>
          <p className="desc">
            Previous transactions processing, Last payments may not be included
          </p>
          <div className="summary">
            <div className="item">
              <div className="itemTitle">Target</div>
              <div className="itemResult positive">
                <KeyboardArrowUpOutlined fontSize='small'/>
                <div className="resultAmount">
                  $12.4k
                </div>
              </div>
            </div>
            <div className="item">
              <div className="itemTitle">Last Week</div>
              <div className="itemResult negative">
                <KeyboardArrowDownIcon fontSize='small'/>
                <div className="resultAmount">
                  $12.4k
                </div>
              </div>
            </div>
            <div className="item">
              <div className="itemTitle">Last Month</div>
              <div className="itemResult positive">
                <KeyboardArrowUpOutlined fontSize='small'/>
                <div className="resultAmount">
                  $12.4k
                </div>
              </div>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Featured