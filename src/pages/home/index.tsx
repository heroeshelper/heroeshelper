import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 flex-grow">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start main">
                <div>Under construction</div>
                <div>
                    <Link to="/heroes/line-up">Hero planner</Link>
                </div>
            </main>
        </div>
    );
}
