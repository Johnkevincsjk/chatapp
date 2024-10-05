import React from 'react'
import '../AvailableGroups/AvailableGroups.css'
import { IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import DisplayUserMsg from '../DisplayUserMsg/DisplayUserMsg'

export default function AvailableGroups() {
    return (
        <div className='onlineuser_main'>
            <div className="onlineuser_main2">
                <div className="onlineuser_header">
                    <h3>Available Groups</h3>
                </div>
                <div className="ci-searchBar my-2">
                    <IconButton>
                        <SearchIcon sx={{ color: "white" }} />
                    </IconButton>
                    <input type="text" className='seach_input' placeholder='Search Groups' />
                </div>
                <div className="onlineuser_user">
                    <DisplayUserMsg Username="Test Groups1" />
                    <DisplayUserMsg Username="Test Groups2" />
                    <DisplayUserMsg Username="Test Groups3" />

                </div>

            </div>
        </div>
    )
}
