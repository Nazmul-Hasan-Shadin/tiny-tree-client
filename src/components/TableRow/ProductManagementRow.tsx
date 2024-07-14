import { FaEdit, FaTrash } from "react-icons/fa";
import Modal from "../Modal/Modal";

type TProduct = {
  category: string;
  title: string;
  price: number;
  quantity: number;
  description: string;
  rating: number;
  image: string;
};

const ProductManagementRow = ({ product }) => {
  const { image, title, price, quantity, rating, category } = product;
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
        <div className="flex gap-2 text-3xl">
         <Modal product={product}></Modal>
          <FaTrash className="text-red-400"></FaTrash>
        </div>
      </td>
    </tr>
  );
};

export default ProductManagementRow;
