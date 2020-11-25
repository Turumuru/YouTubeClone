import LayoutComponent from "./layout";
import MediaCard from "./MediaCard";
import PropTypes from "prop-types";

function Home() {
    return (
        <LayoutComponent>
            <main>
                <MediaCard/>
            </main>
        </LayoutComponent>
    );
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default Home;