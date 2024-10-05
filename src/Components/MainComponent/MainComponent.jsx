
import '../MainComponent/MainComponent.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import SearchIcon from '@mui/icons-material/Search';
import Conversation from '../Parts/Conversation/Conversation';
import { Outlet, useNavigate } from 'react-router-dom';
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';
import Groups2Icon from '@mui/icons-material/Groups2';
import LoginIcon from '@mui/icons-material/Login';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../Redux/themeSlice'; // Correct the action name

export default function MainComponent() {
    const dispatch = useDispatch();
    const navi = useNavigate();
    const lightTheme = useSelector((state) => state.themeKey); // Assuming themeKey is for the theme

    return (
        <div className="container  main_box">
            <div className="row main_box_row rounded">
                <div className="col-md-4 p-1 chats_list bg-dark">
                    <div className={!lightTheme ? "ci-icons" : "ci-icons light_theme"}>
                        <div className="ci-icons_sec1">
                            <IconButton onClick={() => navi('')}>
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
                                {lightTheme ? <DarkModeIcon className='icons' sx={{ color: "white" }} /> : <LightModeIcon sx={{ color: "white" }} />}
                            </IconButton>
                            <IconButton onClick={() => navi('/')}>
                                <LoginIcon className='icons' sx={{ color: "white" }} />
                            </IconButton>
                        </div>
                    </div>

                    <div className={!lightTheme ? "ci-searchBar my-2" : "ci-searchBar my-2 light_theme"}>
                        <IconButton>
                            <SearchIcon className='icons' sx={{ color: "white" }} />
                        </IconButton>
                        <input type="text" className={!lightTheme ? "seach_input" : "seach_input light_theme"} placeholder='Search' />
                    </div>

                    <div className='ci-convo my-2'>
                        <Conversation />
                    </div>
                </div>

                <div className="col-md-8 p-1 chats bg-dark">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
