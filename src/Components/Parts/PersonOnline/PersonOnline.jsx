import React from 'react'
import '../PersonOnline/Persononline.css'
import { IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import DisplayUserMsg from '../DisplayUserMsg/DisplayUserMsg';


export default function PersonOnline() {
    return (
        <div className='onlineuser_main'>
            <div className="onlineuser_main2">
                <div className="onlineuser_header">
                    <h3>Online User</h3>
                </div>
                <div className="ci-searchBar my-2">
                    <IconButton>
                        <SearchIcon sx={{ color: "white" }} />
                    </IconButton>
                    <input type="text" className='seach_input' placeholder='Search online users' />
                </div>
                <div className="onlineuser_user">
                    <DisplayUserMsg Username="Test User" />
                    <DisplayUserMsg Username="Test User" />
                    <DisplayUserMsg Username="Test User" />
                    <DisplayUserMsg Username="Test User" />
                    <DisplayUserMsg Username="Test User" />
                    <DisplayUserMsg Username="Test User" />
                    <DisplayUserMsg Username="Test User" />
                    <DisplayUserMsg Username="Test User" />
                    <DisplayUserMsg Username="Test User" />
                    <DisplayUserMsg Username="Test User" />
                    <DisplayUserMsg Username="Test User" />
                    <DisplayUserMsg Username="Test User" />
                    <DisplayUserMsg Username="Test User" />
                    <DisplayUserMsg Username="Test User" />
                </div>

            </div>
        </div>
    )
}
