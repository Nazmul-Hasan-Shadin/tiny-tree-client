import { useState } from "react";
import UpdateProductForm from "../form/UpdateProduct/UpdateProductForm";
import { FaEdit } from "react-icons/fa";


const Modal = ({product}) => {

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
      setIsOpen(true);
    };
  
    const closeModal = () => {
      setIsOpen(false);
    };
  return (
    <div>
     {/* You can open the modal using document.getElementById('ID').showModal() method */}
     
      <FaEdit className="text-2xl" onClick={openModal}></FaEdit>
      {isOpen && (
        <dialog id="my_modal_4" className="modal" open>
          <div className="modal-box w-11/12 max-w-5xl">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Click the button below to close</p>


         <UpdateProductForm  isUpdate={true} product={product}></UpdateProductForm>



            <div className="modal-action">
              <button className="btn" onClick={closeModal}>Close</button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default Modal;