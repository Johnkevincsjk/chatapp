import React from 'react'
import FaceIcon from '@mui/icons-material/Face';
import '../DisplayUserMsg/DisplayUserMsg.css'

export default function DisplayUserMsg(props) {
    return (
        <div className='conversation_main'>
            <div className="conversation_main1">
                <div className="conversation_sec1">
                    <FaceIcon fontSize="large" />
                </div>
                <div className="conversation_sec2">
                    <p>{props.Username}</p>
                </div>
            </div>
        </div>
    )
}
