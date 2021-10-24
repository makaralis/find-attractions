import React, {  useState } from "react";
import Button from "../components/Button";
import useGeoLocation from "../hooks/useGeoLocation";
import { useHistory } from 'react-router-dom';
import { MainContainer, Container, LocationText } from "../styles/homePageStyles";
import { StyledDiv } from "../styles/globalStyles";

const  HomePage = () => {
    const geoLocation = useGeoLocation();
    const history = useHistory();
    const [showLocation, setShowLocation] = useState(false);

    let longitude = 0;
    let latitude = 0;

    if (geoLocation.loaded) {
        longitude = geoLocation.coordinates.lng;
        latitude = geoLocation.coordinates.lat;
    }



   
    return  (
    <MainContainer>
        <Container>
            <h1>!ברוכים הבאים לאתר האטרקציות בסביבתך</h1>
            <Button handleOnClick={() => setShowLocation(true)} buttonText='תלחץ כדי לדעת מה מיקומך'/>
            {showLocation ? 
            <StyledDiv margintop='30px' textalign='end'>
                <LocationText>    : מיקומך
                <LocationText> קו אורך : {longitude}  </LocationText>
                    <LocationText> קו רוחב :  {latitude}  </LocationText>
                </LocationText> 
                <StyledDiv margintop='30px'>

                    <Button handleOnClick={() => history.push('/attractions')} buttonText='תראו לי אטרקציות בסביבתי'/>
                </StyledDiv>
            </StyledDiv> : geoLocation.coordinates === undefined ? <h1>תאשר בבקשה שימוש במיקום שלך כדי שנוכל להתקדם</h1> : <></> }
        </Container>
    </MainContainer>)
}

export default HomePage;