import React from 'react'
import '../Creategroups/Creategroups.css'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { IconButton } from '@mui/material';

export default function Creategroups() {
    return (
        <div className='creategroups_main'>
            <h1>New Group</h1>
            <div className="creategroups_input">
                <input type="text" className='creategroup_input2' placeholder='Create group name' />
                <IconButton style={{ color: '#0984ff' }}>
                    <CheckCircleOutlineIcon />
                </IconButton>
            </div>
        </div>
    )
}
