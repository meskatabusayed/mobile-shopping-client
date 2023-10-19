import MyBrandCart from "./MyBrandCart";


const MyBrand = ({loadedBrands}) => {
    
    return (
        <div>
            <h2 className="text-center font-extrabold text-3xl m-10">All Brands</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {
                    loadedBrands?.map(brand => <MyBrandCart key={brand.id} brand={brand}></MyBrandCart> )
                }
            </div>


           
        </div>
    );
};

export default MyBrand;