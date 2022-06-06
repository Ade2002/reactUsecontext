import Images from "../img/Images";
import Table from "../components/Table";
import SwitchImage from "./SwitchImage";


const Payouts = () => <div className="pay">

    <div className="head">
        <h2>Payouts</h2>
        <span id="sea">
            <img src={Images.search} className="search" alt="search" />
            <img src={Images.notification} className="notif" alt="notification" /></span>
        <br />
        <span><p>eshibobo</p> <img src={Images.person} className="man" alt="person" /></span>
    </div>
    <div className="container">
        <div className="payout">
            <h3>Payouts</h3>
            <span><img src={Images.sort} className="sort" alt="sort" />sort</span><br />
            <span><img src={Images.filter} className="filter" alt="filter" />filter</span>
        </div>
        <Table />
    </div>
</div>

export default Payouts;