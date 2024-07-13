import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react"
import Header from "@/components/layout/Header";
import Herosection from "@/views/Herosection";
import ProductCard from "@/components/ui/ProductCard";
import { StaticImageData } from 'next/image'
import { Products } from "@/utils/mocks";
import ProductList from "@/views/ProductList";
import Promotionsection from "@/views/Promotionsection";
export default function Home() {

  return (
    <>
    <Herosection />
   
    <Promotionsection/>

    <ProductList/>

  </>
);
}
