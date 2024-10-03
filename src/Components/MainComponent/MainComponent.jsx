import React from 'react'
import '../MainComponent/MainComponent.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { colors, IconButton } from '@mui/material';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SearchIcon from '@mui/icons-material/Search';
import Conversation from '../Parts/Conversation/Conversation';
import Workspace from '../Parts/Workspace/Workspace';
import WelcomePage from '../Parts/WelcomePage/WelcomePage';
import Creategroups from '../Parts/Creategroups/Creategroups';
import PersonOnline from '../Parts/PersonOnline/PersonOnline';

export default function MainComponent() {
    return (
        <div className='container  main_box'>
            <div className="row main_box_row rounded">
                <div className="col-md-4 p-1  chats_list bg-dark">
                    <div className="ci-icons">
                        <div className="ci-icons_sec1">
                            <IconButton>
                                <AccountCircleIcon sx={{ color: "white", padding: "0", fontSize: "larger" }} />
                            </IconButton>
                        </div>
                        <div className="ci-icons_sec2">
                            <IconButton>
                                <AddAPhotoIcon sx={{ color: "white" }} />
                            </IconButton>
                            <IconButton>
                                <AddCircleOutlineIcon sx={{ color: "white" }} />
                            </IconButton>
                            <IconButton>
                                <GroupAddIcon sx={{ color: "white" }} />
                            </IconButton>
                            <IconButton>
                                <PersonAddIcon sx={{ color: "white" }} />
                            </IconButton>
                        </div>

                    </div>
                    <div className="ci-searchBar my-2">
                        <IconButton>
                            <SearchIcon sx={{ color: "white" }} />
                        </IconButton>
                        <input type="text" className='seach_input' placeholder='Search' />
                    </div>

                    <div className="ci-convo my-2">
                        <Conversation />
                    </div>
                </div>

                <div className="col-md-8 p-1 chats bg-dark">
                    {/* <Workspace /> */}
                    {/* <WelcomePage /> */}
                    {/* <Creategroups /> */}
                    <PersonOnline />
                </div>
            </div>
        </div>
    )
}
