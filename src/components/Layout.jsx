import React, { useEffect } from "react";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import Navbar from "./Navbar.jsx";
import CategoryBar from "./CategoryBar.jsx";
import Sidebar from "./Sidebar.jsx";
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import Tooltip from "@mui/material/Tooltip";
const Layout = ({ children }) => {
    const [visible, setVisible] = React.useState(false);

    useEffect(() => {
        if (visible) {
            const scrollY = window.scrollY;
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = '100%';
        } else {
            const scrollY = document.body.style.top;
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }
    }, [visible]);

    return (
        <div className="flex  flex-col min-h-screen">
            <Tooltip title={'Scroll To Top'} placement={'top'} arrow>
                <ArrowUpwardOutlinedIcon
                    className={`fixed top-[90%] right-10 bg-accent hover:bg-accent/50 rounded-full p-2 cursor-pointer`} fontSize={'large'}
                    onClick={() => scrollTo(0, 0)}
                />

            </Tooltip>
            <Sidebar visible={visible} setVisible={setVisible} />
            <Header />
            <Navbar />
            <CategoryBar setVisible={setVisible} />

            <main className="flex-1  bg-bg text-text  w-full h-full bg-gray-50">
                {children}
            </main>

            <Footer className="bg-gray-800 text-gray-200 py-4 text-center" />
        </div>
    );
};

export default Layout;
