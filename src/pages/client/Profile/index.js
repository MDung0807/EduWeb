import { Avatar } from "@mui/material"
import './main.css'
const user = {
    userId: 1,
    avatar: "https://res.cloudinary.com/dx7nsygei/image/upload/v1686538256/image_user_student5.jpg",
    dateCreate: "12/12/2020",
    email: "dominhdung@gmail.com",
    firstName: "Do",
    lastName: "Minh",
    phoneNumber: "0987898789",
    gender: "Female",
    status: 1,
}
export default function Profile (){
    return (
        <div className="profile">
            <div className="body">
                <div className="image-cover">
                    <img className= "m-auto img-fluid" src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/298467250_742089330235716_4851150234273575892_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_ohc=ceOcAwqiZ9QAX-sc68W&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfCb75s4-ncR_-wYaoQ2982HmKWMiXRyEvxTFIlkzhmhmg&oe=64E3A3BE" alt="cover_image"/>
                </div>
                <div className="avatar image is-128x128 m-auto">
                    <img className="is-rounded" src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/366709017_962995118145135_2999400435322536742_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=MT4GDF4arXEAX_D3vKH&_nc_oc=AQk8roSgjGrzHQ53k2AYD3h7mfdyKhfst8JhpIm71euRukEv5SPw07poEQQRVIQ5xb4&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfBr5Mo0Z6Gx80dzU5D7UOXQ90ReqQP1SFMpXOVjv3viBw&oe=64E2A8BC" alt="MD" />
                </div>
            </div>
        </div>
    )
}