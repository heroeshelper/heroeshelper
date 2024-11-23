import { SITE_TITLE } from "@heroeshelper/shared/constants";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router";

const CookiePage = () => {
    return (
        <>
            <Helmet>
                <title>Cookie policy | {SITE_TITLE}</title>
                <meta name="description" content="What's in our cookie jar?" />
            </Helmet>
            <div className="flex pb-20 pt-8 flex-grow justify-center">
                <div className="hero-row">
                    <h1 className="roboto-slab text-4xl">Cookie policy</h1>
                    <p>
                        Cookies are small pieces of text used to store information on web browsers. They are used by
                        many websites to store and receive identifiers and other information on devices, such as a
                        handheld phone or computer. You can learn more about cookies and their functions generally by
                        visiting an information website such as{" "}
                        <Link to="https://knowcookies.com" target="_blank">
                            https://knowcookies.com
                        </Link>
                        .
                    </p>
                    <br />
                    <p>
                        We do not set any cookies ourselves at this moment. This will change once login features have
                        been added to the site. We do however use Cloudflare features, which may set cookies on your
                        machine.
                    </p>
                    <h1 className="roboto-slab text-2xl mt-4">Necessary cookies</h1>
                    <p>These are essential cookies, and do not require any consent.</p>
                    <br />
                    <ul className="list-disclosureClosed">
                        <li className="mb-4">
                            <b>__cf_bm</b> - Set by Cloudflare in case bot protection is enabled. More information on{" "}
                            <Link
                                to="https://developers.cloudflare.com/fundamentals/reference/policies-compliances/cloudflare-cookies/"
                                target="_blank"
                            >
                                Cloudflare cookies
                            </Link>
                        </li>
                        <li>
                            <b>cf_ob_info</b> and <b>cf_use_ob</b> - Set by Cloudflare in case Always Online is enabled.
                            More information on{" "}
                            <Link
                                to="https://developers.cloudflare.com/fundamentals/reference/policies-compliances/cloudflare-cookies/"
                                target="_blank"
                            >
                                Cloudflare cookies
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default CookiePage;
