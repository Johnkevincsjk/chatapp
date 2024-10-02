import React from 'react'
import '../Conversation/Conversation.css'
import FaceIcon from '@mui/icons-material/Face';

export default function Conversation() {
    return (
        <div className='conversation_main'>
            <div className="conversation_main1">
                <div className="conversation_sec1">
                    <FaceIcon fontSize="large" />
                </div>
                <div className="conversation_sec2">
                    <p>John Kevin</p>
                    <p>last message</p>

                </div>

                <p className='msg_time'>today</p>
            </div>
        </div>
    )
}
