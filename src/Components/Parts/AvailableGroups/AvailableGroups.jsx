import React from 'react'
import '../AvailableGroups/AvailableGroups.css'
import { IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import DisplayUserMsg from '../DisplayUserMsg/DisplayUserMsg'
import { useSelector } from 'react-redux';

export default function AvailableGroups() {
    const lighttheme = useSelector((state) => state.themeKey)

    return (
        <div className='onlineuser_main'>
            <div className="onlineuser_main2">
                <div className={!lighttheme? "onlineuser_header":'onlineuser_header light_theme'}>
                    <h3>Available Groups</h3>
                </div>
                <div className={!lighttheme? "ci-searchBar my-2":'ci-searchBar my-2 light_theme'}>
                    <IconButton>
                        <SearchIcon className='available_groupSearch' sx={{ color: "white" }} />
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
