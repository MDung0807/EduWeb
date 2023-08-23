import Item from '../../../components/Item'
import configs from '../../../configs'
import Slide from '../../../layouts/ClientLayouts/Slide'

const items =[
    {id: 0, name: "item0", href: "#", color: "white", price: 1230, imageAlt: "item0", imageSrc: "https://res.cloudinary.com/dx7nsygei/image/upload/v1686538367/image_user_teacher2.jpg"},
    {id: 1, name: "item1", href: "#", color: "black", price: 1230, imageAlt: "item1", imageSrc: "https://res.cloudinary.com/dx7nsygei/image/upload/v1686538159/image_user_student4.jpg"},
    {id: 1, name: "item1", href: "#", color: "black", price: 1230, imageAlt: "item1", imageSrc: "https://res.cloudinary.com/dx7nsygei/image/upload/v1686538159/image_user_student4.jpg"},
    {id: 2, name: "item2", href: "#", color: "violet", price: 1230, imageAlt: "item2", imageSrc: "https://res.cloudinary.com/dx7nsygei/image/upload/v1684258241/image_user_mothaibabon.jpg"},
    {id: 2, name: "item2", href: "#", color: "violet", price: 1230, imageAlt: "item2", imageSrc: "https://res.cloudinary.com/dx7nsygei/image/upload/v1684258241/image_user_mothaibabon.jpg"},
]
const titleSubject = "Subject"

export default function Home (){
return (
    <div className="">
        <Slide></Slide>
        <Item items={items} title={titleSubject} linkAction={'/subjects/'}/>
    </div>
)
}

