import React from "react";
import type { ReactNode } from 'react';

const Layout = ({children}:{ children: ReactNode }) : JSX.Element => {
    return (
        <div style={{margin:"30px"}}>
            {children}
        </div>
    );

}

export default Layout;