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
                <h2 className="text-center text-3xl font-bold mt-10 mb-10">Trusted By</h2>
                <div  className="grid grid-cols-1 lg:grid-cols-2 gap-10 ml-5">
                    <div>
                        <img src="https://i.ibb.co/YkN5Qn4/trust-1.png" alt="" />
                    </div>
                    <div>
                        <img src="https://i.ibb.co/Qb8fjPh/trust-2.png" alt="" />
                    </div>
                    <div>
                        <img src="https://i.ibb.co/nQQp1WF/trust-3.png" alt="" />
                    </div>
                    <div>
                        <img src="https://i.ibb.co/V2hpmM2/trust-4.png" alt="" />
                    </div>
                    <div>
                        <img src="https://i.ibb.co/MZ4ksWS/trust-5.png" alt="" />
                    </div>
                    <div>
                        <img src="https://i.ibb.co/kQhQ6z8/trust-6.png" alt="" />
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