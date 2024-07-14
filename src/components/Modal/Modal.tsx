import { useState } from "react";
import UpdateProductForm from "../form/UpdateProduct/UpdateProductForm";


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
     <button className="btn" onClick={openModal}>Open Modal</button>
      {isOpen && (
        <dialog id="my_modal_4" className="modal" open>
          <div className="modal-box w-11/12 max-w-5xl">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Click the button below to close</p>


         <UpdateProductForm product={product}></UpdateProductForm>



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
