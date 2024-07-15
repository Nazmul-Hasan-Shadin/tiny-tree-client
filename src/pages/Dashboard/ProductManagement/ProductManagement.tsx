import ProductTables from "@/pages/ProductManagement/TableOfProducts";
import { FaFilePdf, FaFilter, FaList, FaPrint } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
const ProductManagement = () => {
  return (
    <div>
   {/* add product butoon for add */}

      <div className="flex bg-[#FAFBFE] p-4 lg:p-12  justify-between">
        <div>
          <h2 className="text-xl md:text-2xl">Total Product</h2>
          <p>Manage Your Product</p>
        </div>

        <Link to={"/dashboard/add-product"}>
          <button className="btn text-white text-xs lg:text-xl  lg:px-10 bg-primary-green">
        
            <FaPlus /> Add Product
          </button>
        </Link>
      </div>

         {/* add product butoon  end */}

         {/* for produc search  */}

      <div className="flex bg-[#FFFFFF] lg:p-12  justify-between">
        <form onSubmit={(e) => e.preventDefault()} className="p-3" action="">
          <div className="flex gap-3 lg:gap-5 items-center">
            <FaFilter className="text-5xl p-1 rounded-md bg-[#FF9F43]" />
          </div>
        </form>

        <Link to={""}>
          <span className="text-xl lg:text-2xl  flex gap-1 lg:gap-3 py-3">
            <FaPrint className="text-green-500 flex "></FaPrint>
            <FaFilePdf className="text-red-700"></FaFilePdf>
            <FaList></FaList>
          </span>
        </Link>
      </div>
      {/* product management table for crud */}
      <ProductTables></ProductTables>
    </div>
  );
};

export default ProductManagement;
