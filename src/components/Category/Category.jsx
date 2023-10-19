import CategoryCard from "./categoryCard";


const Category = ({categorys}) => {
    
    return (
        <div className="py-10">
            <h2 className="flex justify-center items-center font-extrabold">All Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {
                    categorys?.map(category => <CategoryCard key={category._id} category={category}></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default Category;