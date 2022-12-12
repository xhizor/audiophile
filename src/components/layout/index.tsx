import React from "react";

interface LayoutProps {
    children: React.ReactNode
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
            <main>
                {children}
            </main>
        </>
    )
};

export default Layout;