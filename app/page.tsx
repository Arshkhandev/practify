"use client";

import { useEffect, useState } from "react";
import Card from "./components/Card";

export type Product = {
  id:number;
  title:string;
  description:string;
  image:string;
  price:number;
  category:string;
}
export default function Home() {
  const[loading,setLoading] = useState(false);
  const[prod,setprod] = useState<Product[]>([]);

  const API_KEY = process.env.NEXT_PUBLIC_API_URL;

  async function allproducts() {
    setLoading(true);
    const res = await fetch(`${API_KEY}/products`);
    const data = await res.json();
    setprod(data);
    setLoading(false);
  }

  useEffect(() => {
    allproducts();
  },[])
  return (
   <div className="md:grid grid-cols-4 gap-6">
    {prod.length === 0 ? (<p>No Products Available</p>) : (prod.map((item) => {
      return <Card item = {item} key={item.id}/>
    }))} 
   </div>
  );
}
