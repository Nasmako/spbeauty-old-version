import styled from 'styled-components';
import Editicon from '/workspaces/spbeauty-old-version/src/Icons/EditIcon';
import RemoveIcon from '/workspaces/spbeauty-old-version/src/Icons/RemoveIcon';
import IconOnlyButton from "/workspaces/spbeauty-old-version/src/Components/IconOnlyButton";


const Option = styled.div`
    outline: none;
    background-color: #FFFFFF;
    color: #0F172A;
`;

function ListElement(props) {
    return (
        <div className='d-flex flex-row align-items-center align-self-stretch gap-2'>
            <Option className='flex-grow-1 p-0'>{props.children}</Option>
            <IconOnlyButton icon={<Editicon/>}/>
            <IconOnlyButton icon={<RemoveIcon/>}/>
        </div>
    );
}

export default ListElement;
