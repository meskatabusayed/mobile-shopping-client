import { Link, useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import MyBrand from "../../components/MyBrand/MyBrand";



const Home = () => {
    const loadedBrands = useLoaderData();
    



    return (
        <div>
            <div>
            <Banner></Banner>
            <MyBrand loadedBrands={loadedBrands}></MyBrand>
            <div>
                <h2 className="text-center text-3xl font-bold mt-10 mb-10">Best Seller Product Image</h2>
                <div  className="grid grid-cols-1 lg:grid-cols-2 gap-4 ml-5">
                    <div className="w-40">
                        <img src="https://i.ibb.co/1KXwKLK/AppleP.webp" alt="" />
                    </div>
                    <div className="w-40">
                        <img src="https://i.ibb.co/XJvXT68/samP.webp" alt="" />
                    </div>
                    <div className="w-40">
                        <img src="https://i.ibb.co/PwfjhcM/LenLap.webp" alt="" />
                    </div>
                    <div className="w-40">
                        <img src="https://i.ibb.co/3ymp4gG/samT.webp" alt="" />
                    </div>

                    
                </div>
            </div>


            <div>
                    <h2 className="text-center text-3xl font-bold mt-10 mb-10">Our Member</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 ml-5">
                        <div>
                            <img src="https://i.ibb.co/cx17qwC/pro1.png" alt="" />
                        </div>
                        <div>
                            <img src="https://i.ibb.co/ts5FVDf/pro2.png" alt="" />
                        </div>
                        <div>
                            <img src="https://i.ibb.co/2YYRHxD/pro3.png" alt="" />
                        </div>
                        <div>
                            <img src="https://i.ibb.co/BCBQhp6/pro4.png" alt="" />
                        </div>
                    </div>
                </div>

            


            
           </div> 
        </div>
    );
};

export default Home;