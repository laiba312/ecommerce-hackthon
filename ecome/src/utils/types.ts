import Image from "next/image";
import { StaticImageData } from "next/image";
export  type Product={
    id:number;
    name:string;
    price:number;
    category:string;
    subcategory:string;
    Image: StaticImageData;

}