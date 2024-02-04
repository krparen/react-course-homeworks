import { Layout } from "./components/layout/component";
import { restaurants } from "./constants/mock";

export const App = () => {
    return (
        <Layout restaurants={restaurants}></Layout>
    );
};