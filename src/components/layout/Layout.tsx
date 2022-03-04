import React, { FC, Fragment } from "react";
import TitleMeta from "./TitleMeta";

interface Props {
    title?: string,
    description?: string
}

const Layout: FC<Props> = ({ title, description, children }) => {
    return <div className="d-flex flex-column min-vh-100 bg-light">
        <TitleMeta title={title} description={description} />
        <main className="flex-grow-1">
            {children}
        </main>
    </div>;
};

export default Layout;