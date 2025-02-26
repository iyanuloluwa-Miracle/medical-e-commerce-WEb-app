import React, {useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { brandingData, categoriesData } from "../../../static/data";
import styles from "../../../styles/styles";
import { server } from "../../../server";
import axios from "axios";

const Categories = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(`${server}/category`, {withCredentials: true}).then((res) => {
        setData(res.data.categorys);
        console.log('category frontend', res.data.categorys)
    })
  }, []);
  return (
    <>
      <div className={`${styles.section} hidden sm:block`}>
        <div
          className={`branding my-12 flex justify-between w-full shadow-sm bg-white p-5 rounded-md`}
        >
          {brandingData &&
            brandingData.map((i, index) => (
              <div className="flex items-start" key={index}>
                {i.icon}
                <div className="px-3">
                  <h3 className="font-bold text-sm md:text-base">{i.title}</h3>
                  <p className="text-xs md:text-sm">{i.Description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div
        className={`${styles.section} bg-white p-6 rounded-lg mb-12`}
        id="categories"
      >
        <div className={`${styles.heading}`}>
          <h1 style={{color: 'black'}}>All Categories</h1>
        </div>
        <div className="grid grid-cols-2 gap-[20px] md:grid-cols-2 md:gap-[20px] lg:grid-cols-4 lg:gap-[20px] xl:grid-cols-5 xl:gap-[30px]">
  {data &&
    data.map((i) => {
      console.log(i);
      const handleSubmit = (i) => {
        navigate(`/products?category=${i.name}`);
      };
      return (
        <div
          className="max-w-sm bg-white border border-white-200 rounded-lg shadow dark:bg-gray-200 dark:border-gray-700 cursor-pointer"
          key={i?._id}
          onClick={() => handleSubmit(i)}
        >
          <img
            src={i?.images?.[0]?.url}
            className="w-full h-48 object-cover"
            alt=""
          />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{i.name}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{i.description}</p>
            <Link to="/products" className="inline-block">
              <div className={`${styles.button} mt-100`}>
                <span className="text-[#fff] text-[18px]">Shop Now</span>
              </div>
            </Link>
          </div>
        </div>
      );
    })}
</div>

      </div>
    </>
  );
};

export default Categories;
