import Header from "./header";
import Footer from "./footer";

const ClientLayouts = ({children}) =>{
    <div>
        <Header/>
        {children}
        <Footer/>
    </div>   
}

export default ClientLayouts;