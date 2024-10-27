import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const TopHeader = () => {
    return (
        <div className="h-8 flex items-center flex-grow-0 px-4 py-2">
            <NavLink to="/">
                <FontAwesomeIcon icon={faHouse} size="xl" className="icon"></FontAwesomeIcon>
            </NavLink>
        </div>
    );
};

export default TopHeader;
