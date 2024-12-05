import PropTypes from 'prop-types';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill } from 'react-icons/bs';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
    ResponsiveContainer, LineChart, Line
} from 'recharts';

const data = [
    { name: 'January', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'February', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'March', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'April', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'June', uv: 2390, pv: 3800, amt: 2500 },
];

const StatCard = ({ title, icon: Icon, value }) => (
    <div className="card">
        <div className="card-inner">
            <h3>{title}</h3>
            <Icon className="card_icon" />
        </div>
        <h1>{value}</h1>
    </div>
);


StatCard.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

const ChartSection = () => (
    <div className="charts">
        <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#5e59b8" />
                <Bar dataKey="uv" fill="#dea569" />
            </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#5e59b8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#dea569" />
            </LineChart>
        </ResponsiveContainer>
    </div>
);

const Home = () => (
    <main className="main-container">
        <div className="main-title">
            <h3>DASHBOARD</h3>
        </div>

        <div className="main-cards">
            <StatCard title="PRODUCTS" icon={BsFillArchiveFill} value="580" />
            <StatCard title="CATEGORIES" icon={BsFillGrid3X3GapFill} value="22" />
            <StatCard title="PEOPLE" icon={BsPeopleFill} value="88" />
        </div>

        <ChartSection />
    </main>
);

export default Home;
