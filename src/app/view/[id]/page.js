"use client"
import Item from "@/app/components/Item/Item";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect,useState } from "react";

export default function View({params}){
    const router = useRouter();
    // return 위에서 쓸 때는 홑따옴표가 아니라 `를 사용해야한다.
    const id = `${params.id}` ;
    const[item, setItem] = useState({});
    // 전체 중 하나만 지정해서 가져오자.
    const API_URL = "/api/v1/products/${id}.json";
    const getData = () => {
        axios.get(
          API_URL
        ).then(data =>{
          setList(data.data);
        });
      }

    // 최초 한번만 실행할때 
        useEffect(() => {
            if(id&&id>0){
                getData();
            }
        },[id]);

    return(
        <>
           {/* <h1>상세 페이지 : {params.id}</h1> */}
           {/* <p><img src={item.image_link} alt={item.name}></img></p> */}
           <Item item={item} />
        </>
    );

}