import { useState } from "react";
const Ecommerce=()=>{
    let [product,setProduct]=useState([])
    let addProd=(event)=>{
        event.preventDefault();
        let productObject={
            name:event.target.name.value,
            description:event.target.description.value,
            price:event.target.price.value,
            color:event.target.color.value,
            expirydate:event.target.expirydate.value
        };
        let newProducts=[...product,productObject];
        setProduct(newProducts);
    }
    return (
        <div className="Ecommerce">
            <h2>Ecommerce Application</h2>
            <form onSubmit={addProd}>
                <input type="text" name="name" placeholder="Product Name"/><br/>
                <textarea type="text" name="description" placeholder="description"></textarea><br/>
                <input type="number" name="price" placeholder="Product Price"/><br/>
                Choose The Color<input type="color" name="color"/><br/>
                <input type="date" name="expirydate"/><br/>
                <button >Add Product</button>

            </form>
            {product.map((val,index)=>{
                return(
                    <div className="Border">
                       Product name:{val.name}<br/>
                       Description:{val.description}<br/>
                       Price:{val.price}<br/>
                       Color:{val.color}<br/>
                       ExpiryDate:{val.expirydate}<br/>   
                    </div>
                )
            })
            }   
        </div>
    )
}
export default Ecommerce;
