import React from 'react'
import '../Conversation/Conversation.css'
import FaceIcon from '@mui/icons-material/Face';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';



export default function Conversation() {
    const lightTheme = useSelector((state) => state.themeKey);
    const navi = useNavigate()
    return (
        <>
            <div className={!lightTheme ? "ci-searchBar my-2" : "ci-searchBar my-2 light_theme"}> {/*Right side chat list codes starts here*/}
                <IconButton>
                    <SearchIcon className='icons' sx={{ color: "white" }} />
                </IconButton>
                <input type="text" className={!lightTheme ? "seach_input" : "seach_input light_theme"} placeholder='Search' />
            </div>

            <div className={!lightTheme ? "ci-convo my-2" : "ci-convo my-2 light_theme"}>

                <div className='conversation_main' onClick={() => navi('workspace')}>
                    <div className="conversation_main1">
                        <div className="conversation_sec1">
                            <FaceIcon className='icons' />
                        </div>
                        <div className="conversation_sec2">
                            <p>John Kevin</p>
                            <p>last message</p>

                        </div>

                        <p className='msg_time'>today</p>
                    </div>
                </div>
            </div>
        </>
    )
}
