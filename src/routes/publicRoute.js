import React from "react";

const PublicRoute = ({ children }) => {
    const isToken = localStorage.getItem('token');
    return !isToken ? <>{children}</> : "NULL"
}

export default PublicRoute;