import React from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import 'font-awesome/css/font-awesome.min.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudSunRain, faHome, faWater, faWind, faTemperatureHigh, faTemperatureLow} from '@fortawesome/free-solid-svg-icons'

library.add(faCloudSunRain, faHome, faWater, faWind, faTemperatureHigh, faTemperatureLow);


function Sidebar() {
    return (
        <div className="Sidebar">
            <SideNav
                onSelect={(selected) => {
                    // Add your code here
                }}
            >
            
            <SideNav.Toggle />
            <SideNav.Nav>
                <NavItem eventKey="home" >
                    <NavIcon>
                        {/*<i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} /> */}
                        <FontAwesomeIcon icon={faHome} style={{ fontSize: '1.80em' }}/>  
                    </NavIcon>
                    <NavText>
                        Home
                    </NavText>
                </NavItem>
                <NavItem eventKey="charts">
                    <NavIcon>
                        {/*<i className="fa fa-sun-o" style={{ fontSize: '1.75em' }} />*/}
                        <FontAwesomeIcon icon={faCloudSunRain} style={{ fontSize: '1.80em' }}/>
                    </NavIcon>
                    <NavText>
                        Weather
                    </NavText>

                    <NavItem eventKey="charts/highTemp">
                        <NavText>
                            High Temperature
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="charts/barchart">
                        <NavText>
                            Low Temperature
                        </NavText>
                    </NavItem>
                </NavItem>
                <NavItem eventKey="flood" >
                    <NavIcon>
                        <FontAwesomeIcon icon={faWater} style={{ fontSize: '1.80em' }}/> 
                    </NavIcon>
                    <NavText>
                        Flood Alerts
                    </NavText>
                </NavItem>
                <NavItem eventKey="wind" >
                    <NavIcon>
                        <FontAwesomeIcon icon={faWind} style={{ fontSize: '1.75em' }}/>
                    </NavIcon>
                    <NavText>
                        Wind Pressure
                    </NavText>
                </NavItem>
            </SideNav.Nav>
            </SideNav>
        </div>
    );
}

export default Sidebar;