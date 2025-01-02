import { NavLink } from "react-router";
import packageJson from "../../../package.json";
import { DIVIDER } from "../constants";

const Divider = () => <span>{DIVIDER}</span>;

const Footer = () => {
    return (
        <div className="footer h-8 flex flex-row flex-grow-0 px-4 py-2 align-center text-sm w-full justify-between">
            <div className="flex gap-2">
                <NavLink to="/about">About</NavLink>
                <Divider />
                <NavLink to="/cookies">Cookie policy</NavLink>
            </div>
            <div className="flex gap-2">
                <NavLink to="/changelog">{packageJson.version}</NavLink>
                <Divider />
                <NavLink to={packageJson.homepage} target="_blank">
                    GitHub
                </NavLink>
            </div>
        </div>
    );
};

export default Footer;
