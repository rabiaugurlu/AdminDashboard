import PropTypes from 'prop-types';
import { BsFillBellFill, BsFillEnvelopeFill, BsSearch, BsJustify } from 'react-icons/bs';

const Header = ({ OpenSidebar }) => (
  <header className="header">
    <div className="menu-icon">
      <BsJustify className="icon" onClick={OpenSidebar} />
    </div>
    <div className="header-left">
      <BsSearch className="icon" />
    </div>
    <div className="header-right">
      <BsFillBellFill className="icon" />
      <BsFillEnvelopeFill className="icon" />
    </div>
  </header>
);

Header.propTypes = {
  OpenSidebar: PropTypes.func.isRequired,
};

export default Header;
