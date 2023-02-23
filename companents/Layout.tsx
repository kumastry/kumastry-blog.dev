import React from "react";
import type { ReactNode } from 'react';
import Header from "./Header";
//import Footer from "./Footer";

const Layout = ({children}:{ children: ReactNode }) : JSX.Element => {
    return (
        
        <div>
            <Header />
                <div style={{margin:"30px"}}> {children}</div>
        </div>
    );

}

export default Layout;