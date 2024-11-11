import NavigationTile from "@heroeshelper/shared/components/NavigationTile";
import { SITE_TITLE } from "@heroeshelper/shared/constants";
import { Helmet } from "react-helmet-async";

export default function Home() {
    return (
        <>
            <Helmet>
                <title>{SITE_TITLE}</title>
                <meta
                    name="description"
                    content="Plan your Heroes of History city layout and hero line-up right here!"
                />
            </Helmet>
            <div className="flex items-center justify-center p-8 pb-20 sm:p-20 flex-grow">
                <main className="flex flex-row gap-8 items-center justify-center flex-wrap">
                    <NavigationTile icon="house" to="/city" title="Coming soon" disabled />
                    <NavigationTile icon="unit" to="/heroes/list" title="Coming soon" disabled />
                    <NavigationTile icon="battle" to="/heroes/line-up" title="Hero Line-up" />
                </main>
            </div>
        </>
    );
}
