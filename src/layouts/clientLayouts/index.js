import Header from "./Header";
import Footer from "./Footer";

const ClientLayouts = ({children}) =>{
    return (
        <div>
            <Header/>
            <div className="my-5">{children}</div>
            <Footer/>
        </div>   
    )
}

export default ClientLayouts;