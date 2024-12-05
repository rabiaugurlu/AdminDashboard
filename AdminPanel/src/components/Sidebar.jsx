import PropTypes from 'prop-types';
import {
    BsGrid1X2Fill,
    BsFillArchiveFill,
    BsFillGrid3X3GapFill,
    BsPeopleFill,
    BsMenuButtonWideFill,
    BsFillGearFill,
} from 'react-icons/bs';
import { RxAvatar } from "react-icons/rx";
import { SlCalender } from "react-icons/sl";
import { GoSignOut } from "react-icons/go";

const Sidebar = ({ openSidebarToggle, OpenSidebar }) => (
    <aside id="sidebar" className={openSidebarToggle ? 'sidebar-responsive' : ''}>
        <div className="sidebar-title">
            <div className="sidebar-fullname">
                <RxAvatar className="icon_header" /> Jane S.
            </div>
            <span className="icon close_icon" onClick={OpenSidebar}>
                X
            </span>
        </div>

        <ul className="sidebar-list">
            <SidebarItem icon={<BsGrid1X2Fill />} label="Dashboard" />
            <SidebarItem icon={<BsFillArchiveFill />} label="Products" />
            <SidebarItem icon={<BsFillGrid3X3GapFill />} label="Categories" />
            <SidebarItem icon={<BsPeopleFill />} label="People" />
            <SidebarItem icon={<SlCalender />} label="Calender" />
            <SidebarItem icon={<BsMenuButtonWideFill />} label="Reports" />
            <SidebarItem icon={<BsFillGearFill />} label="Settings" />
            <SidebarItem icon={<GoSignOut />} label="Sign out" />
        </ul>
    </aside>
);

Sidebar.propTypes = {
    openSidebarToggle: PropTypes.bool.isRequired,
    OpenSidebar: PropTypes.func.isRequired,
};

const SidebarItem = ({ icon, label }) => (
    <li className="sidebar-list-item">
        <a href="#">
            {icon} {label}
        </a>
    </li>
);

SidebarItem.propTypes = {
    icon: PropTypes.node.isRequired,
    label: PropTypes.string.isRequired,
};

export default Sidebar;
