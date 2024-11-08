import { NavLink } from "react-router-dom";
import packageJson from "../../../package.json";

const Footer = () => {
    return (
        <div className="footer h-8 flex flex-col flex-grow-0 px-4 py-2 justify-center text-sm">
            <div className="self-end flex gap-4">
                <span>{packageJson.version}</span>
                <NavLink to={packageJson.homepage} target="_blank">
                    GitHub
                </NavLink>
            </div>
        </div>
    );
};

export default Footer;
