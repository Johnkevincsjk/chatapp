import React from 'react'
import '../WelcomePage/WelcomePage.css'
import ForumIcon from '@mui/icons-material/Forum';
import { useSelector } from 'react-redux';

export default function WelcomePage() {

    const lighttheme = useSelector((state) => state.themeKey)
    return (
        <div className={!lighttheme ? "welcomepage_main" : 'welcomepage_main light_theme'}>
            <ForumIcon className='welcome_icon' style={{ fontSize: "60px" }} />
            <h1>Welcome to Chatapp</h1>
            <p>You have not yet selected any chat ...</p>
        </div>
    )
}
