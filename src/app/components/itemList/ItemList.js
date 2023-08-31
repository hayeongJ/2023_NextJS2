import { Grid } from "@mui/material";
import './item.css';
import Link from "next/link";

export default function ItemList({list}) { //중괄호는 객체라는뜻
    return(
        <div>
             <Grid container> {/*전체크기 */}
                {/* 우리는 이 메이크업 api받은게 리스트, 54개이기때문에
                각각 그리드로 만들어줘야한다 */}
                {list.map((item)=>(
                    // 상세 페이지를 보기 위해서 각각의 item에 Link를 걸자
                    // 다이나믹 라우팅 : 
                    <Link href="/view/[id]" as={'/view/'+item.id} >
                    <Grid item xs={3} key={item.id} >
                        <img  className="img_item" src={item.image_link} alt={item.name} /> 
                        <strong className="title_item" >{item.name}</strong>                           
                        <span  className="txt_info">{item.category}&nbsp;{item.product_type}</span>                           
                        <strong  className="num_price">{item.price}</strong>                                                      
                    </Grid>
                </Link>
                ))}
            </Grid>
        </div>
    );
}