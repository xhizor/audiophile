import React from "react";

import Header from "./header";

interface LayoutProps {
    children: React.ReactNode,
}

/**
 * Layout component.
 *
 * @param children
 * @constructor
 */
const Layout: React.FC<LayoutProps> = ({children}: LayoutProps) => {
    return (
        <>
            <Header/>
            <main>
                {children}
            </main>
        </>
    )
};

export default Layout;