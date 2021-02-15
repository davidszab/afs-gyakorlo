import React from "react";
import { Link, navigate } from "@reach/router";

export default function CustomLink(props) {
    const { to, children } = props;
    return <Link to={`%BASE_URL%/${to}`}>{children}</Link>;
}

export function navigateTo(url) {
    navigate(`%BASE_URL%/${url}`);
}
