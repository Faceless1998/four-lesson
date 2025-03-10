import React from "react"
import stylus from "./home.module.css" 
import IMG from "./../../assets/41QKCkQ2A5L.jpg"
const data = [
{
    name: "Potato",
    price: 10,
    description: "Really Good Potato, even Mc buy this",
    image:IMG
},
{
    name: "Potato",
    price: 10,
    description: "Really Good Potato, even Mc buy this",
    image:IMG
},
{
    name: "Potato",
    price: 10,
    description: "Really Good Potato, even Mc buy this",
    image:IMG
},
{
    name: "Potato",
    price: 10,
    description: "Really Good Potato, even Mc buy this",
    image:IMG
}

]



 export const Home = () => {
     return(
         <>
            <div className={stylus.container}>
                {data.map( (item, index) => (
                   <>
                    <p> {item.name} </p>
                    <p> {item.price} </p>
                    <p> {item.description} </p>
                    <img src={item.image} alt={item.name} />
                    </>
                ) ) }
            </div>

         </>
     )
 }