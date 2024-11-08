import NavigationTile from "@heroeshelper/shared/components/NavigationTile";

export default function Home() {
    return (
        <div className="flex items-center justify-center p-8 pb-20 sm:p-20 flex-grow">
            <main className="flex flex-row gap-8 items-center justify-center flex-wrap">
                <NavigationTile icon="house" to="/city" title="Coming soon" disabled />
                <NavigationTile icon="unit" to="/heroes/list" title="Coming soon" disabled />
                <NavigationTile icon="battle" to="/heroes/line-up" title="Hero Line-up" />
            </main>
        </div>
    );
}
