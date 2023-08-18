import { Avatar } from "@mui/material"
import { Image } from "react-bootstrap"
import Grid from '@mui/material/Unstable_Grid2';
import ListGroup from 'react-bootstrap/ListGroup';
import './main.css'
import ItemTranscript from "../../../components/ItemTranscript";
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

const hisTest = [
    {hisId: 1, firstName: 'Do', lastName: 'Dung', testId: 1, testName: 'test 1', score: 8, timeInTest: 60 , time: "12/12/2020"},
    {hisId: 2, firstName: 'Do', lastName: 'Dung', testId: 2, testName: 'test 2', score: 8, timeInTest: 60 , time: "12/12/2020"},
    {hisId: 3, firstName: 'Do', lastName: 'Dung', testId: 3, testName: 'test 3', score: 8, timeInTest: 60 , time: "12/12/2020"},
    {hisId: 4, firstName: 'Do', lastName: 'Dung', testId: 4, testName: 'test 4', score: 8, timeInTest: 60 , time: "12/12/2020"},
    {hisId: 5, firstName: 'Do', lastName: 'Dung', testId: 5, testName: 'test 5', score: 8, timeInTest: 60 , time: "12/12/2020"},
    {hisId: 6, firstName: 'Do', lastName: 'Dung', testId: 6, testName: 'test 6', score: 8, timeInTest: 60 , time: "12/12/2020"},
    {hisId: 7, firstName: 'Do', lastName: 'Dung', testId: 7, testName: 'test 7', score: 8, timeInTest: 60 , time: "12/12/2020"},
    {hisId: 8, firstName: 'Do', lastName: 'Dung', testId: 8, testName: 'test 8', score: 8, timeInTest: 60 , time: "12/12/2020"},

]
export default function Profile (){
    return (
        <div className="profile">
            <div className="body">
                <div className="image-infor ">
                    <div className="image-cover">
                        <Image src={user.avatar} fluid />     
                    </div>
                <Grid container spacing={2}>
                    <Grid xs={2.5}>
                        <div className="avatar">
                            <img className="" src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/366709017_962995118145135_2999400435322536742_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=MT4GDF4arXEAX_D3vKH&_nc_oc=AQk8roSgjGrzHQ53k2AYD3h7mfdyKhfst8JhpIm71euRukEv5SPw07poEQQRVIQ5xb4&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfBr5Mo0Z6Gx80dzU5D7UOXQ90ReqQP1SFMpXOVjv3viBw&oe=64E2A8BC" alt="MD" />
                        </div>
                    </Grid>
                    <Grid xs={8}>
                        <div className="info pt-2">
                            <ListGroup className="">
                                <ListGroup.Item className="p-1 m-0 border border-0">
                                    <div className="info-item-name title">
                                         <h1>{user.firstName} {user.lastName}</h1>
                                     </div>
                                </ListGroup.Item>
                                <ListGroup.Item className="p-1 m-0 border border-0">
                                    <div className="info-item-dateCreate">
                                         <p>{user.dateCreate}</p>
                                     </div>
                                </ListGroup.Item>
                            </ListGroup>
                                        
                            </div>
                            
                    </Grid>
                </Grid>
                </div>
                <div className="Transcript has-background-grey-light py-5">
                    <div className="transcript-title title text-center">
                        <h1>Transcript</h1>
                    </div>
                    <div className="pt-5">
                        {hisTest.map((item, index) => (
                            <ItemTranscript key={index} item={item} />)
                        )}
                    </div>
               
                </div>
            </div>
        </div>
    )
}