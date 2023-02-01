import styled from 'styled-components';
import SecondaryButton from '../../../../../Components/SecondaryButton';

const Option = styled.div`
    outline: none;
    border-radius: 0px;
    border: solid #152842 1px;
    background-color: #D9E2EF;
    color: #666787;
`;

function ListElement(props) {
    return (
        <div className='d-flex flex-row align-items-center align-self-stretch gap-2'>
            <Option className='flex-grow-1 p-2'>{props.children}</Option>
            <SecondaryButton minWidth='0'>Ред.</SecondaryButton>
            <SecondaryButton minWidth='0'>Удл.</SecondaryButton>
        </div>
    );
}

export default ListElement;