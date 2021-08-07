import Link from 'next/link';
import { linksData } from '../../Data/linksData';
import classes from './Header.module.css';
import { FaBars } from 'react-icons/fa';

const Navbar = ({ toggle }) => {
  return (
    <header className={classes.header}>
      <nav className={classes.wrapper}>
        <div className={classes.logo}>
          <Link href='/'>PHOTTY</Link>
        </div>
        <div className={classes.linkscontainer}>
          {linksData.map((item, index) => {
            return (
              <div key={index} className={classes.link}>
                <Link href={item.path}>{item.title}</Link>
              </div>
            );
          })}
        </div>
        <FaBars className={classes.bars} onClick={toggle} />
      </nav>
    </header>
  );
};

export default Navbar;
