import React, { useState } from 'react'
import { Product } from '../page'
import { Button } from "@/components/ui/button";
import { Card,CardContent } from '@/components/ui/card';


type CardProps = {
  item: Product;
};

export default function Cards({ item }: CardProps) {

  const[add,setAdd] = useState(true)
  return (
  <Card className="transition-all hover:shadow-xl mt-4 mr-5 ml-5">
  <CardContent className="flex flex-col gap-4 mt-4 items-center justify-around p-5">

    <img
      className="h-50 w-50 object-contain"
      src={item.image}
      alt={item.title}
    />

    <h1 className="font-bold text-2xl text-center">
      {item.title.slice(0, 25)}
    </h1>

    <p className="text-sm text-center">
      {item.description.slice(0, 120)}...
    </p>

    <p className="font-semibold">${item.price}</p>

    <Button onClick={() => setAdd(!add)}>
      {add ? "Remove" : "Add to Cart"}
    </Button>

  </CardContent>
</Card>


  );
}
