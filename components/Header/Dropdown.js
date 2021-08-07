import { linksData } from '../../Data/linksData';
import classes from './Dropdown.module.css';
import { FaTimes } from 'react-icons/fa';
import Link from 'next/link';

const Dropdown = ({ toggle, isopen }) => {
  return (
    <nav
      onClick={toggle}
      className={isopen ? `${classes.dropdownactive}` : `${classes.dropdown}`}
      // style={isOpen ? 'top: 0' : 'top: -100%'}
    >
      <div onClick={toggle} className={classes.closecontainer}>
        <FaTimes className={classes.times} />
      </div>
      <div>
        <div className={classes.contentcontainer}>
          {linksData.map((item, index) => {
            return (
              <div key={index} className={classes.link}>
                <Link href={item.path}>{item.title}</Link>
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Dropdown;
