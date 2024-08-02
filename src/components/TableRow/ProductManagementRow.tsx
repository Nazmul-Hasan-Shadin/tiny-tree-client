import {  FaTrashAlt } from "react-icons/fa";
import Modal from "../Modal/Modal";
import { useDeleteProductMutation } from "@/redux/feature/product/productApi";
import { toast } from "sonner";
import Swal from 'sweetalert2'

type TProduct = {
  _id?:string;
  category: string;
  title: string;
  price: number;
  quantity: number;
  description: string;
  rating: number;
  image: string;
};
type ProductProps ={
  product:TProduct
} 

const ProductManagementRow = ({ product }:ProductProps) => {
  const { image, title, price, quantity, rating, category } = product;

   const [deleteProduct]=useDeleteProductMutation()
  const handleDeleteProduct=(id:string)=>{
    
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(id)
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });

    
     
      
   
      
  }
  return (
    <tr>
      <th>1</th>
      <td>
        <img className="w-24 h-24 rounded-full" src={image} alt="" />
      </td>
      <td> {title} </td>
      <td>{price} </td>
      <td> {category} </td>
      <td>
        <div className="flex gap-4 text-3xl items-center">
         <Modal  product={product}></Modal>
       
          <FaTrashAlt onClick={()=>handleDeleteProduct((product._id) as string)} className="text-xl text-red-600"></FaTrashAlt>{" "}
        </div>
      </td>
    </tr>
  );
};

export default ProductManagementRow;
