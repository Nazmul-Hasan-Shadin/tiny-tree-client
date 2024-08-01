
import CategoryCard from "../ui/CategoryCar";
import Container from "@/container/Container";
import HeaderTitile from "../ui/HeaderTitle/HeaderTitile";
import { useGetAllCategoriesQuery } from "@/redux/api/categoriesBaseApi";

interface Category {
  name: string;
  image: string;
}

const Categories = () => {
  const { data: categories } = useGetAllCategoriesQuery();

  return (
    <div>
      <Container>
        <div className="space-y-9">
          <HeaderTitile header={"Our Category"} />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-items-center gap-3">
            {categories?.data?.map((category, index) => {
              return <CategoryCard key={index} category={category} />;
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Categories;
