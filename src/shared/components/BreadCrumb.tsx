import { NavLink } from "react-router";
import { Fragment } from "react/jsx-runtime";

export type BreadCrumbPart = {
    url: string;
    name: string;
    active: boolean;
};

type Props = {
    parts: BreadCrumbPart[];
};

const BreadCrumb = ({ parts }: Props) => {
    return (
        <div className="flex flex-row gap-3 select-none">
            {parts.map((part, i) => {
                return (
                    <Fragment key={i}>
                        <NavLink to={part.url} className={part.active ? "active" : ""}>
                            {part.name}
                        </NavLink>
                        {i < parts.length - 1 && <span>/</span>}
                    </Fragment>
                );
            })}
        </div>
    );
};

export default BreadCrumb;
