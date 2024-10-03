import React from 'react'
import '../WelcomePage/WelcomePage.css'
import ForumIcon from '@mui/icons-material/Forum';

export default function WelcomePage() {
    return (
        <div className='welcomepage_main'>
            <ForumIcon style={{ fontSize: "60px", color: '#ffffff5b' }} />
            <h1>Welcome to Chatapp</h1>
            <p>You have not yet selected any chat ...</p>
        </div>
    )
}
