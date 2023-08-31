import {Grid} from "@mui/material";
import './item.css';

// 중괄호는 객체라는 뜻
export default function ItemList({list}){
    return(
        <div>
            <Grid container>
                {list.map((item)=>{
                    <Grid item xs={3} key={item.id}>
                        <img src={item.image_link} alt={item.name} className="img_item" />
                        <strong className="title_item">{item.name}</strong>
                        <span className="txt_info">{item.category}&nbsp;{item.product_type}</span>
                        <strong className="num_price">{item.price}</strong>
                    </Grid>    
                })}
            </Grid>
        </div>
    );
}