import HeroSectionComponent from "../Components/HeroSectionComponent";
import ProductSectionComponent from "../Components/ProductSectionComponent";

const Home = () => {
    document.title="Home"
    return (
        <>
            <HeroSectionComponent />
            <ProductSectionComponent />
        </>
    );
}

export default Home;