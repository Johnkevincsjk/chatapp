import React from 'react'
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';
import '../NavBar/NavBar.css'
import Groups2Icon from '@mui/icons-material/Groups2';
import LoginIcon from '@mui/icons-material/Login';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../../Redux/themeSlice';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { useNavigate } from 'react-router-dom';


export default function NavBar() {

    const dispatch = useDispatch();
    const navi = useNavigate();
    const lightTheme = useSelector((state) => state.themeKey);
    return (
        <div className={!lightTheme ? "ci-icons mb-1" : "ci-icons light_theme mb-1"}> {/*nav bar starts here */}
            <div className="ci-icons_sec1">
                <IconButton onClick={() => navi('conversation')}>
                    <AccountCircleIcon className='icons' sx={{ color: "white", padding: "0" }} />
                </IconButton>
            </div>
            <div className="ci-icons_sec2">
                <IconButton onClick={() => navi("persononline")}>
                    <OnlinePredictionIcon className='icons' sx={{ color: "white" }} />
                </IconButton>
                <IconButton onClick={() => navi('creategroups')}>
                    <GroupAddIcon className='icons' sx={{ color: "white" }} />
                </IconButton>
                <IconButton onClick={() => navi('availablegroups')}>
                    <Groups2Icon className='icons' sx={{ color: "white" }} />
                </IconButton>
                <IconButton onClick={() => dispatch(toggleTheme())}>
                    {lightTheme ? <LightModeIcon className='icons' sx={{ color: "white" }} /> : <DarkModeIcon sx={{ color: "white" }} />}
                </IconButton>
                <IconButton onClick={() => navi('/')}>
                    <LoginIcon className='icons' sx={{ color: "white" }} />
                </IconButton>
            </div>
        </div>
    )
}
