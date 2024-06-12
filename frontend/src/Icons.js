import { FaUser, FaUserCog,FaUserShield } from 'react-icons/fa';
import { AiOutlineHome, AiOutlineMail, AiOutlineInfoCircle } from 'react-icons/ai';
import {RiFileList2Line,RiFileTextLine} from 'react-icons/ri'
import {MdPeople,MdSettingsBackupRestore} from 'react-icons/md'
import MapIcon from '@mui/icons-material/Map';


const StudentIcon = () => <FaUser style={{ fontSize: '150px' }}/>;
const AdminIcon = () => <FaUserCog />;
const WardenIcon = () => <FaUserShield style={{ fontSize: '165px' }}/>;
const WardenIconNav = () => <FaUserShield/>
const HomeIcon = () => <AiOutlineHome />;
const ContactIcon = () => <AiOutlineMail />;
const AboutIcon = () => <AiOutlineInfoCircle />;
const RulesIcon = () => <RiFileList2Line />;
const WorkersIcon = () => <MdPeople />;
const TendersIcon = () => <RiFileTextLine />;
const RoomChangeIcon = () => <MdSettingsBackupRestore />;
const Maps = () => <MapIcon/>

export { StudentIcon, AdminIcon, WardenIcon, WardenIconNav, HomeIcon, ContactIcon, AboutIcon, RulesIcon, WorkersIcon, TendersIcon, RoomChangeIcon, Maps};
