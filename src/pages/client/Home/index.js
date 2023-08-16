import Item from '../../../components/Item'
import Slide from '../../../layouts/ClientLayouts/Slide'

const items =[
    {id: 0, name: "item0", href: "https://www.facebook.com/photo/?fbid=712382994237560&set=a.658638499612010", color: "white", price: 1230, imageAlt: "item0", imageSrc: "https://www.facebook.com/photo/?fbid=712382994237560&set=a.658638499612010"},
    {id: 1, name: "item1", href: "https://www.facebook.com/photo/?fbid=712382994237560&set=a.658638499612010", color: "black", price: 1230, imageAlt: "item1", imageSrc: "https://www.facebook.com/photo/?fbid=712382994237560&set=a.658638499612010"},
    {id: 2, name: "item2", href: "https://www.facebook.com/photo/?fbid=712382994237560&set=a.658638499612010", color: "violet", price: 1230, imageAlt: "item2", imageSrc: "https://www.facebook.com/photo/?fbid=712382994237560&set=a.658638499612010"},
    {id: 3, name: "item3", href: "https://www.facebook.com/photo/?fbid=712382994237560&set=a.658638499612010", color: "blue", price: 1230, imageAlt: "item3", imageSrc: "https://www.facebook.com/photo/?fbid=712382994237560&set=a.658638499612010"},

]

export default function Home (){
return (
    <div className="">
        <Slide></Slide>
        {items.map((item) =>
        <Item key={item.id} item={item}/>)}
    </div>
)
}

