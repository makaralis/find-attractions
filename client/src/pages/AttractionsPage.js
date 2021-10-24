import { useEffect, useState, useCallback } from "react";
import { fetchAttractions } from "../api";
import SingleAttraction from "../components/SingleAttraction";
import Select from "../components/Select";
import { StyledDiv } from "../styles/globalStyles";
import { useRecoilValue } from "recoil";
import { selectAtom } from "../recoil/select/atoms";
import useGeoLocation from "../hooks/useGeoLocation";
import { distanceBetweenLocations } from "../utils";

const  AttractionsPage = () => {
    const [attractions, setAttractions] = useState([]);
    const selectedAttractionType = useRecoilValue(selectAtom);

    const attractionTypes = attractions.map((singleAttraction) => singleAttraction.Attraction_Type);
    const uniqueAttractionTypes = [...new Set(attractionTypes)];
    const mergedTypes = [].concat.apply([], uniqueAttractionTypes.map((item) => item.split(';')));
    const uniqueMergedTypes = [...new Set(mergedTypes)];

    const geoLocation = useGeoLocation();

    let longitude = 0;
    let latitude = 0;

    if (geoLocation.loaded) {
        longitude = geoLocation.coordinates.lng;
        latitude = geoLocation.coordinates.lat;;
    }

    const getAttractions = useCallback(async() =>
    {
        try {
          const res = await  fetchAttractions();
          const data = res.data;

          const newData = data.map((attraction) => { 
              const o = Object.assign({}, attraction);
              const distance =  distanceBetweenLocations({latitude: latitude, longitude: longitude}, 
                {latitude: attraction.Y, longitude: attraction.X});;

            
              o.Distance =  ' במרחק של ' + Math.round((distance + Number.EPSILON) * 100) / 100 + ' ק"מ ממך ' ;
 
              return o;});

          newData.sort((a, b) => (a.Distance > b.Distance) ? 1 : -1);
    
          setAttractions(newData);
        }
        catch (err) {
            console.log(err);
        }
    }, [latitude, longitude])

    const renderAttractions = () => {
        if (selectedAttractionType === '' || selectedAttractionType === 'none' || selectedAttractionType === 'all') {
            return attractions.map((singleAttraction) => <SingleAttraction key={singleAttraction.Name} attractionData={singleAttraction}/>);
        }
        
        const filteredByAttractionType = attractions.filter((singleAttraction) =>  singleAttraction.Attraction_Type.includes(selectedAttractionType));

        return  filteredByAttractionType.map((singleAttraction) => <SingleAttraction key={singleAttraction.Name} attractionData={singleAttraction}/>);
    }


    useEffect(() => getAttractions(), [getAttractions]);

    return (
        <StyledDiv display='flex' alignitems='center' flexdirection='column'>
            <Select options={uniqueMergedTypes}/>
            <h1>רשימת האטרקציות ממוינת מהקרובה ביותר</h1>
            {renderAttractions()}
        </StyledDiv>
    )
}

export default AttractionsPage;