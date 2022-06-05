import React from 'react'
import Dummy from './Dummy'
import SwitchImage from './SwitchImage';
import values from './Home';
import Values from './Values'
const Referrals = () => <div className="charts">
<Dummy params={'referrals'} />
<Values src={values.images} />
</div>

export default Referrals