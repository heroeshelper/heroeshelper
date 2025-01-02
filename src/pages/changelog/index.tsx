import { SITE_TITLE } from "@heroeshelper/shared/constants";
import { Helmet } from "react-helmet-async";

const ChangelogPage = () => {
    return (
        <>
            <Helmet>
                <title>Updates | {SITE_TITLE}</title>
                <meta name="description" content="Recent updates to the site." />
            </Helmet>
            <div className="flex pb-20 pt-8 flex-grow justify-center">
                <div className="hero-row">
                    <h1 className="roboto-slab text-4xl">Updates</h1>
                    <br />
                    <h2 className="roboto-slab text-2xl">2025-01-02 - 1.2.0</h2>
                    <ul className="list-disclosureClosed">
                        <li className="mb-4">
                            <b>Heroes</b> - Added hero abilities to hero pages
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default ChangelogPage;
