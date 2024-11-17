import { SITE_TITLE } from "@heroeshelper/shared/constants";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <>
            <Helmet>
                <title>404 Not Found | {SITE_TITLE}</title>
                <meta name="description" content="Not the page you're looking for" />
            </Helmet>
            <div className="flex items-center justify-center p-8 pb-20 sm:p-20 flex-grow">
                <main className="flex flex-col gap-8 items-center justify-center flex-wrap">
                    <div>
                        <h1 className="text-4xl">Page not found</h1>
                    </div>
                    <div>
                        <Link to="/">Back to home</Link>
                    </div>
                </main>
            </div>
        </>
    );
}
