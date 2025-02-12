import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function AddItemPage() {
  const [productKey, setProductKey] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productCategory, setProductCategory] = useState("Audio");
  const [productDimension, setProductDimension] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const navigate = useNavigate();

  async function handleAddItem() {
    
    console.log( productKey,productName,productPrice,productCategory,productDimension,productDescription);
    const token = localStorage.getItem("token")
  

    if(token){
        try{
      const result= await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/products`,{
            key:productKey,
            name:productName,
            price:productPrice,
            category:productCategory,
            description:productDescription,
            dimension:productDimension
        },{
            headers :{
                Authorization : "Bearer "+ token
            }
        });
        toast.success(result.data.message);
        navigate("/admin/items");

    }catch(err){
        toast.error("product not added ");
        
    }
        
    }else{
        toast.error("You are not authorized to do action")
    }
  }

  return (
    <div className="w-full h-full flex flex-col items-center p-4">
      <h1 className="text-xl font-bold mb-4">Add Items</h1>
      <div className="w-[400px] border p-4 flex flex-col gap-3 rounded-lg shadow-md">
        <input
          onChange={(e) => setProductKey(e.target.value)}
          value={productKey}
          type="text"
          placeholder="Product Key"
          className="border p-2 w-full rounded"
        />
        <input
          onChange={(e) => setProductName(e.target.value)}
          value={productName}
          type="text"
          placeholder="Product Name"
          className="border p-2 w-full rounded"
        />
        <input
          onChange={(e) => setProductPrice(e.target.value)}
          value={productPrice}
          type="number"
          placeholder="Product Price"
          className="border p-2 w-full rounded"
        />
        <select
          onChange={(e) => setProductCategory(e.target.value)}
          value={productCategory}
          className="border p-2 w-full rounded"
        >
          <option value="Audio">Audio</option>
          <option value="Light">Light</option>
        </select>
        <input
          onChange={(e) => setProductDimension(e.target.value)}
          value={productDimension}
          type="text"
          placeholder="Product Dimensions"
          className="border p-2 w-full rounded"
        />
        <input
          onChange={(e) => setProductDescription(e.target.value)}
          value={productDescription}
          type="text"
          placeholder="Product Description"
          className="border p-2 w-full rounded"
        />
        <button
          onClick={handleAddItem}
          className="bg-blue-500 text-white p-2 w-full rounded hover:bg-blue-600"
        >
          Add
        </button>
        <button onClick ={()=>{navigate("/admin/items")}} className="bg-red-600 text-white p-2 w-full rounded hover:bg-red-700"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
