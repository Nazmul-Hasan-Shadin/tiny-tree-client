import { useEffect, useState } from "react";
import categorieData from "../../../public/categories.json";
import CategoryCard from "../ui/CategoryCar";
import Container from "@/container/Container";

interface Category {
    name: string;
    image: string;
  }

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);


  useEffect(() => {
    // Directly use the imported JSON data
    setCategories(categorieData.categories);
  }, []);

 
  return (
    <div>
      <Container >
      <div className="space-y-9">
        <h3 className="text-4xl  pl-11">Our Categories</h3>
         
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-items-center gap-3">
            {
                categories.map((category,index)=>{
                    return <CategoryCard key={index} category={category}/>
                })
            }
        </div>
        
      </div>
      </Container>
    </div>
  );
};

export default Categories;
