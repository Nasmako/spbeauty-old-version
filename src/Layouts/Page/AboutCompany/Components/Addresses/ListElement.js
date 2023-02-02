import styled from 'styled-components';
import Editicon from '/workspaces/spbeauty-old-version/src/Icons/EditIcon';
import RemoveIcon from '/workspaces/spbeauty-old-version/src/Icons/RemoveIcon';
import IconOnlyButton from "/workspaces/spbeauty-old-version/src/Components/IconOnlyButton";


const Option = styled.div` 
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
