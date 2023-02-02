import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
import styled from 'styled-components';

const Container = styled.div`
    border-radius: 24px;
    border: solid #E2E8F0 1px;
    padding: 24px 24px;
    margin: 48px 24px; 
`;





function Addresses() {
    return (
        <div className='d-inline-flex flex-column gap-4 m-5 pt-5 col'>
            <div className='justify-content-between'>
                <Container> 
                    <div class="wrapper container">
                        <div className='title'>Адреса заведений</div>
                        <div className='d-flex flex-column mt-3 gap-3'>
                            <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                            <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
                        </div>
                    </div>
                    <div className='d-flex flex-column mt-5'>    
                        <SecondaryButton>Добавить филиал</SecondaryButton>
                    </div>
                </Container> 
            </div>    
        </div>
       
    );
}


export default Addresses;
