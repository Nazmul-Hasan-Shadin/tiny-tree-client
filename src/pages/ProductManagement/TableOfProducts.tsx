import ProductManagementRow from "@/components/TableRow/ProductManagementRow";
import { useGetAllProductQuery } from "@/redux/feature/product/productApi";

const ProductTables = () => {
  const { data: productData } = useGetAllProductQuery({});

  return (
    <div className="overflow-x-auto">
      <table className="table table-xs">
        <thead>
          <tr>
            <th></th>
            <th>image</th>
            <th>title</th>
            <th>price</th>
            <th>category</th>
            <th> actions</th>
          </tr>
        </thead>
        <tbody>
          {productData?.data?.map((product) => (
            <ProductManagementRow key={product._id} product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTables;
