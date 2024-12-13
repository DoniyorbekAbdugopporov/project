// import { request } from '@/api'
import Products from '@/components/Products'
import { useFetch } from '@/hooks/useFetch'
import React from 'react'

import Logo_1 from "@/assets/svgs/logo_1.svg"
import Logo_2 from "@/assets/svgs/logo_2.svg"
import Logo_3 from "@/assets/svgs/logo_3.svg"
import Logo_4 from "@/assets/svgs/logo_4.svg"
import Logo_5 from "@/assets/svgs/logo_5.svg"
import Logo_6 from "@/assets/svgs/logo_6.svg";

const Home = () => {
  // const {data,error,loading} = useFetch("/product/get")
  // const [products, setProducts] = useState(null)

  // useEffect(()=>{
  //   request
  //     .get("/product/get")
  //     .then(res => setProducts(res.data))
  // }, [])
  return (
    <>
      {/* <div>
      {
        loading && <p>Loading...</p> 
      }
      <Products isAdmin={false} data={data}/>
    </div> */}
      <div className="w-full bg-[#171D28] min-h-screen grid grid-cols-2 max-[850px]:grid-cols-1">
        <div className='bg-[url("src/assets/images/heroImage.png")] bg-cover max-[850px]:h-[430px]'></div>
        <div className="flex items-center justify-center max-[1200px]:p-10">
          <div className="text-white w-[500px] min-h-[308px] flex flex-col items-start justify-center gap-10">
            <h2 className="text-7xl font-medium">
              Bring the <br /> warmth.
            </h2>
            <p className="text-xl">
              Everyone needs a good winter jacket. <br />
              Find yours with our collection and more.
            </p>
            <button className="py-3 px-14 bg-blue-500 rounded-lg">
              Shopping Now
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <h3 className="text-center text-3xl font-medium p-10">Trending Brands</h3>
        <div className="flex items-center justify-between">
          <img src={Logo_1} alt="logo image" />
          <img src={Logo_2} alt="logo image" />
          <img src={Logo_3} alt="logo image" />
          <img src={Logo_4} alt="logo image" />
          <img src={Logo_5} alt="logo image" />
          <img src={Logo_6} alt="logo image" />
        </div>
      </div>
    </>
  );
}

export default Home