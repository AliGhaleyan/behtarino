import { NextPage } from "next";
import React, { Fragment } from "react";

const NotFoundPage: NextPage = () => {
    return <Fragment>
        <div className="d-flex text-uppercase justify-content-center align-items-center w-100 min-vh-100">
            <h4 className="boldText">Not Found 404</h4>
        </div>
    </Fragment>;
};

export default NotFoundPage;