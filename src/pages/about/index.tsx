import { SITE_TITLE } from "@heroeshelper/shared/constants";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router";

const AboutPage = () => {
    return (
        <>
            <Helmet>
                <title>About | {SITE_TITLE}</title>
                <meta name="description" content="What are we about? Find out here." />
            </Helmet>
            <div className="flex pb-20 pt-8 flex-grow justify-center">
                <div className="hero-row">
                    <h1 className="roboto-slab text-4xl">About</h1>
                    <p>
                        <Link to="https://www.innogames.com/games/heroes-of-history" target="_blank">
                            Heroes of History
                        </Link>{" "}
                        is an online game developed by{" "}
                        <Link to="https://www.innogames.com" target="_blank">
                            InnoGames
                        </Link>
                        .
                    </p>
                    <br />
                    <p>
                        Our goal is to provide players with the tools and information they need to enhance their
                        gameplay experience, ensuring that they can build the best cities and decide which heroes to
                        include in their roster and level up.
                        <br />
                        Do note that this site is fan made and not in any way supported by InnoGames.
                    </p>
                    <br />
                    <p>
                        While this site is still a work in progress, we do have a range of interesting features already:
                    </p>
                    <br />
                    <ul className="list-disclosureClosed">
                        <li className="mb-4">
                            <b>Hero line-up planner</b> - Plan your hero line-up, share it with others and save
                            different loadouts for battling against Tesla, to use in the arena or to conquer the
                            campaign map.
                        </li>
                        <li className="mb-4">
                            <b>Detailed hero information</b> - Looking for more information about heroes, to figure out
                            which to level up next or to to view more about the newest heroes? We've got you covered!
                            Our <Link to="/heroes/list">Hero list</Link> contains all heroes currently in the game, with
                            the possibility to go to a detailed page of every hero to see more information.
                        </li>
                        <li className="mb-4">
                            <b>City planner</b> <i>(coming soon)</i> - Figure out the optimal layout of your main city,
                            or for the various stages of the allied cultures! Share them with others and let them know
                            what your tactic is to reach gold!
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default AboutPage;
