import { Link } from "react-router-dom";
import AssetImage from "./AssetImage";

type AvailableIcons = "unit" | "house" | "battle";

type Props = {
    icon: AvailableIcons;
    to: string;
    title: string;
    disabled?: boolean;
};

const NavigationTile = ({ icon, to, title, disabled }: Props) => {
    return (
        <Link to={to} className={`${disabled && "disabled"}`}>
            <div className={`navTile h-36 w-36 flex flex-col items-center justify-center ${disabled && "disabled"} `}>
                <AssetImage src={`/icons/${icon}.png`} className="max-h-20 max-w-20" alt={title} />
                <span className="title max-w-20 text-center">{title}</span>
            </div>
        </Link>
    );
};

export default NavigationTile;
