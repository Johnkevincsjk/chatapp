import React from 'react'
import '../MainComponent/MainComponent.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import SearchIcon from '@mui/icons-material/Search';
import Conversation from '../Parts/Conversation/Conversation';
import { Outlet, useNavigate } from 'react-router-dom';
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';
import Groups2Icon from '@mui/icons-material/Groups2';


export default function MainComponent() {

    const navi = useNavigate()
    return (
        <div className='container  main_box'>
            <div className="row main_box_row rounded">
                <div className="col-md-4 p-1  chats_list bg-dark">
                    <div className="ci-icons">
                        <div className="ci-icons_sec1">
                            <IconButton onClick={() => navi('')}>
                                <AccountCircleIcon sx={{ color: "white", padding: "0", fontSize: "larger" }} />
                            </IconButton>
                        </div>
                        <div className="ci-icons_sec2">
                            <IconButton onClick={() => navi("persononline")}>
                                <OnlinePredictionIcon sx={{ color: "white" }} />
                            </IconButton>
                            <IconButton>
                                <AddCircleOutlineIcon sx={{ color: "white" }} />
                            </IconButton>
                            <IconButton onClick={() => navi('creategroups')}>
                                <GroupAddIcon sx={{ color: "white" }} />
                            </IconButton>
                            <IconButton>
                                <Groups2Icon sx={{ color: "white" }} />
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
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
