import './navbar.css';
import Button from '../button/button.jsx';
import { useContext } from 'react';
import { pageContext } from '../../App';
const pages = [
    { label: 'View', pageStateName: 'view' },
    { label: 'Cart', pageStateName: 'cart' },
]

const NavBar = () => {
    const { page: currentPage, setPage } = useContext(pageContext);
    return (
        <div className="navbar">
            <h2 onClick={() => {setPage('view')}}>Shopping List</h2>
            <div className='nav-btns'>
                {pages.map((page) =>
                    <Button
                        key={'nav-btn' + page.label}
                        label={page.label}
                        active={currentPage === page.pageStateName}
                        noShadow
                        onClick={() => {
                            setPage(page.pageStateName);
                        }}
                    />
                )}
            </div>
        </div>
    );
};

export default NavBar;
