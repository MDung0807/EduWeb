import Header from "./header";
import Footer from "./footer";

const AdminLayouts = ({children}) => {
    return (
        <div>
            <Header />
            {children}
            <Footer/>
        </div>
    );
}

export default AdminLayouts;