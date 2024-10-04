import React from 'react'
import '../Conversation/Conversation.css'
import FaceIcon from '@mui/icons-material/Face';
import { useNavigate } from 'react-router-dom';

export default function Conversation() {
    const navi = useNavigate()
    return (
        <div className='conversation_main' onClick={() => navi('workspace')}>
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
