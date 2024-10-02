import React from 'react'
import '../Workspace/Workspace.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import MyMsg from '../MyMsg/MyMsg';
import Otherschat from '../Otherschat/Otherschat';

export default function Workspace() {
    return (
        <div className='workspace_main'>
            <div className="workspace_header">
                <div className="workspace_wrapper">
                    <div className="chatprofile">
                        <AccountCircleIcon fontSize='large' />
                    </div>
                    <div className="profileName">
                        <h5>My Friend</h5>
                        <p>last message</p>
                    </div>
                </div>
                <IconButton style={{ color: "white" }}>
                    <DeleteIcon />

                </IconButton>
            </div>
            <div className="workspace_body">
                <MyMsg />
                <Otherschat/>
                <MyMsg />
                <Otherschat/>
                <MyMsg />
                <Otherschat/>
                <MyMsg />
                <Otherschat/>
                <MyMsg />
                <Otherschat/>
                <MyMsg />
                <Otherschat/>
                <MyMsg />
                <Otherschat/>
            </div>
            <div className="workspace_textarea">
                <IconButton style={{ color: '#01aafe' }}>
                    <AddIcon />
                </IconButton>
                <textarea name="" id="type_chat" cols={88} rows={1}></textarea>
                <IconButton style={{ color: '#01aafe' }}>
                    <SendIcon />
                </IconButton>

            </div>
        </div>
    )
}
