import Menu1 from '@/app/components/Menu/Menu1';
import Menu2 from '@/app/components/Menu/Menu2';
import Menu3 from '@/app/components/Menu/Menu3';

import './menu1.css'
// Layout은 반드시 인자를(props) 받아야한다.
export default function Layout(props){
    return(
        <>
            {props.params.id === '1' ? <Menu1 /> : props.params.id === '2' ? <Menu2 /> : <Menu3 />}
        </>
    );
}