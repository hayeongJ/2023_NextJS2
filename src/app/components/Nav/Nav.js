import Link from 'next/link';
import './nav.css';

export default function Nav(){
    return(
        <div id="menu">
            <ul>
                <li><a href="#">MENU1</a>
                    <ul>
                        <li><Link href="/menu1/1">SUB_MENU1</Link></li>
                        <li><Link href="/menu2/2">SUB_MENU2</Link></li>
                        <li><Link href="/menu3/3">SUB_MENU3</Link></li>
                    </ul>
                </li>
                <li><a href="#">MENU2</a>
                    <ul>
                        <li><a href="#">SUB_MENU</a></li>
                        <li><a href="#">SUB_MENU2</a></li>
                        <li><a href="#">SUB_MENU3</a></li>
                    </ul>
                </li>
                <li><a href="#">MENU3</a>
                    <ul>
                        <li><a href="#">SUB_MENU</a></li>
                        <li><a href="#">SUB_MENU2</a></li>
                        <li><a href="#">SUB_MENU3</a></li>
                    </ul>
                </li>
                <li><a href="#">MENU4</a>
                    <ul>
                        <li><a href="#">SUB_MENU</a></li>
                        <li><a href="#">SUB_MENU2</a></li>
                        <li><a href="#">SUB_MENU3</a></li>
                    </ul>
                </li>
                <li><a href="#">MENU5</a>
                    <ul>
                        <li><a href="#">SUB_MENU</a></li>
                        <li><a href="#">SUB_MENU2</a></li>
                        <li><a href="#">SUB_MENU3</a></li>
                    </ul>
                </li>
            </ul>
</div>
    );
}