import { AttractionCard } from '../styles/globalStyles';
import { StyledDiv } from '../styles/globalStyles';
import PropTypes  from "prop-types";
import { useRecoilState } from 'recoil';
import { favesAtom } from '../recoil/select/faves/atoms';

const SingleAttraction = ({attractionData}) => {
    const [inFavesState, setInFavesState] = useRecoilState(favesAtom);
    let favsIcon = 'add-to-faves';

    const onClickHandler = () =>
    {
        setInFavesState({value: !inFavesState.value, key: inFavesState.value ? attractionData.Id : ''});
    }

    if (inFavesState.key === attractionData.Id) {
        favsIcon = 'remove-from-faves';
    }
   

    return (
        <AttractionCard>
        <StyledDiv onClick={() => onClickHandler()} cursor='pointer'>
            <img alt="add" height='24' src={`${process.env.PUBLIC_URL}/${favsIcon}.svg`} />
        </StyledDiv>
            <p>שם האטרקציה :{attractionData.Name}</p>
            <p>מספר מזהה :{attractionData.Id}</p>
            <p>{attractionData.Distance}</p>
            <p>כתובת : {attractionData.Address}</p>
            <p>שעות פעילות : {attractionData.Opening_Hours.replace('</br>', '')}</p>
            <a href={attractionData.URL}> קישור לאתר האטרקציה</a>
        </AttractionCard>
    )
}

SingleAttraction.propTypes = {
    attractionData: PropTypes.object.isRequired,
};

export default SingleAttraction;