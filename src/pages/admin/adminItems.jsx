const sampleArr = [
    {
      key: "AUDIO001",
      name: "Wireless Headphones",
      price: 99.99,
      category: "Audio",
      description: "High-quality wireless headphones with noise cancellation.",
      dimension: "8 x 6 x 3 inches",
      availability: true,
      image: [
        "https://example.com/images/headphones1.jpg",
        "https://example.com/images/headphones2.jpg",
      ],
    },
    {
      key: "LIGHT001",
      name: "Smart LED Bulb",
      price: 19.99,
      category: "Light",
      description: "Energy-efficient smart LED bulb with Wi-Fi control.",
      dimension: "5 x 2 x 2 inches",
      availability: true,
      image: [
        "https://example.com/images/bulb1.jpg",
        "https://example.com/images/bulb2.jpg",
      ],
    },
    {
      key: "AUDIO002",
      name: "Bluetooth Speaker",
      price: 49.99,
      category: "Audio",
      description: "Portable Bluetooth speaker with deep bass and waterproof design.",
      dimension: "7 x 3 x 3 inches",
      availability: false,
      image: [
        "https://example.com/images/speaker1.jpg",
        "https://example.com/images/speaker2.jpg",
      ],
    },
    {
      key: "LIGHT002",
      name: "Desk Lamp",
      price: 29.99,
      category: "Light",
      description: "Adjustable LED desk lamp with touch control and USB charging port.",
      dimension: "10 x 5 x 5 inches",
      availability: true,
      image: [
        "https://example.com/images/desk-lamp1.jpg",
        "https://example.com/images/desk-lamp2.jpg",
      ],
    },
    {
      key: "AUDIO003",
      name: "Soundbar",
      price: 149.99,
      category: "Audio",
      description: "Dolby Atmos soundbar for an immersive audio experience.",
      dimension: "35 x 4 x 3 inches",
      availability: true,
      image: [
        "https://example.com/images/soundbar1.jpg",
        "https://example.com/images/soundbar2.jpg",
      ],
    },
  ];


import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";
export default function AdminItemsPage(){
    const[items,setItems] = useState(sampleArr);
    return(
        <div className="w-full h-full relative">
            <table>
                <thead>
                    <th>Key</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Dimention</th>
                    <th>Availability</th>
                </thead>
                <tbody>
                {
                    items.map((product)=>{
                        console.log(product)
                        return(
                            <tr key={product.key}>
                                <td>{product.key}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.category}</td>
                                <td>{product.dimention}</td>
                                <td>{product.availability ? "Available" : true}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
            <Link to="/admin/items/add">
            <CiCirclePlus className="text-[100px] flex absolute right-2 bottom-2 hover:text-red-900 hover:text-[120px]" />
            </Link>
        </div>
    )
}