import React from 'react'
import '../Workspace/Workspace.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import MyMsg from '../MyMsg/MyMsg';
import Otherschat from '../Otherschat/Otherschat';
import { useSelector } from 'react-redux';

export default function Workspace() {

    const lighttheme = useSelector((state) => state.themeKey)
    return (
        <div className='workspace_main'>
            <div className={!lighttheme ? "workspace_header" : 'workspace_header light_theme'}>
                <div className="workspace_wrapper">
                    <div className="chatprofile">
                        <AccountCircleIcon className='icons' />
                    </div>
                    <div className="profileName">
                        <h5>My Friend</h5>
                        <p>last message</p>
                    </div>
                </div>
                <IconButton style={{ color: "white" }}>
                    <DeleteIcon className='icons' />

                </IconButton>
            </div>
            <div className={!lighttheme ? "workspace_body" : 'workspace_body light_theme'}>
                <MyMsg />
                <Otherschat />
                <MyMsg />
                <Otherschat />
                <MyMsg />
                <Otherschat />
                <MyMsg />
                <Otherschat />
                <MyMsg />
                <Otherschat />
                <MyMsg />
                <Otherschat />
                <MyMsg />
                <Otherschat />
                <MyMsg />
                <Otherschat />
                <MyMsg />
                <Otherschat />
                <MyMsg />
                <Otherschat />
                <MyMsg />
                <Otherschat />
                <MyMsg />
                <Otherschat />
                <MyMsg />
                <Otherschat />
                <MyMsg />
                <Otherschat />
            </div>
            <div className={!lighttheme ? "workspace_textarea" : 'workspace_textarea light_theme'}>
                <IconButton style={{ color: '#01aafe' }}>
                    <AddIcon />
                </IconButton>
                <textarea name="" id="type_chat" className={!lighttheme ? "bg-dark" : "bg-white"} cols={88} rows={1}></textarea>
                <IconButton style={{ color: '#01aafe' }}>
                    <SendIcon />
                </IconButton>

            </div>
        </div>
    )
}
