import { Footer } from "../footer/component";
import { Header } from "../header/component";
import {Button} from "../button/button.jsx";

export const Layout = ({ children }) => {
    return (
        <div>
            <Header>
                <Button text={"darova ebat"}/>
                <Button text={"zdarova zaebal"}/>
                <Button text={"ebat' moi lisiy cherep kakie lyudi"}/>
            </Header>
            <div>{children}</div>
            <Footer />
        </div>
    );
};
