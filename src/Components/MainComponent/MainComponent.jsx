
import '../MainComponent/MainComponent.css';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Conversation from '../Parts/Conversation/Conversation';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../Parts/NavBar/NavBar';
import { useSelector } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion'

export default function MainComponent() {

    const location = useLocation()
    const lightTheme = useSelector((state) => state.themeKey);
    return (
        <div className="container-fluid ms-4 p-0 main_box">

            <div className="row main_box_row rounded">
                <NavBar />
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="col-md-4 p-1 chats_list  bg-dark">
                    <Conversation />

                </motion.div>
                <AnimatePresence>
                    <motion.div
                        key={location.pathname}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.2 }}
                        className={!lightTheme ? "col-md-8 p-1 chats bg-dark" : "col-md-8 p-1 chats light_theme"}>
                        <Outlet />
                    </motion.div>

                </AnimatePresence>
            </div>
        </div>
    );
}
