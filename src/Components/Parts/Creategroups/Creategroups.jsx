import React from 'react'
import '../Creategroups/Creategroups.css'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { IconButton } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Creategroups() {


    const lighttheme = useSelector((state) => state.themeKey)
    const navi = useNavigate()
    return (
        <div className='creategroups_main'>
            <h1>Create New Group</h1>
            <div className={!lighttheme ? "creategroups_input" : "creategroups_input dark_input"}>
                <input type="text" className='creategroup_input2' placeholder='Create group name' />
                <IconButton style={{ color: "#367588" }}>
                    <CheckCircleOutlineIcon />
                </IconButton>
            </div>
        </div>
    )
}
