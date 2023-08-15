import Header from "./Header";
import Footer from "./Footer";

export default function Client({children}){
    return (
        <div>
        <Header/>
        {children}
        <Footer/>
        </div>
    )
}