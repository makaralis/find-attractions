import PropTypes  from "prop-types";
import { useRecoilState } from 'recoil';
import { selectAtom } from "../recoil/select/atoms";
import { SelectWrapper, StyledSelect } from '../styles/globalStyles';

const Select = ({options}) => {
    const [selectedAttractionState, setSelectedOptionState] = useRecoilState(selectAtom)

    return (
        <SelectWrapper>
            <StyledSelect onChange={(e) => {const selectedOption = e.target.value; setSelectedOptionState(selectedOption)}} value={selectedAttractionState}>
            <option value="none">
            תבחר סוג האטרקציה
            </option>
                {options.map((option, index) =>  <option value={option} key={option}>{option}</option>)}
            <option value="all">
            כל האטרקציות
            </option>
            </StyledSelect>
        </SelectWrapper>
 )
}

Select.propTypes = {
    options: PropTypes.array.isRequired,
};

export default Select;