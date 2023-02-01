import TitledTextInput from "../../../../../../Components/TitledTextInput";
import TitledSelector from "../../../../../../Components/TitledSelector";
import PrimaryButton from "../../../../../../Components/PrimaryButton";
import styled from 'styled-components';

const Container = styled.div`
   color: #64748B;
`;


function Preferences() {
    return (
        <div className='d-inline-flex flex-column gap-5 mt-5'>
            <Container>
                <div className='caption'>
                    <div className='d-flex flex-column gap-3 mt-5'>
                    <TitledTextInput title='Название компании' def='SPBEAUTY'/>
                    <TitledSelector title='Тип организации' options={[
                    'Салон красоты',
                    'Парикмахерская'
                    ]}/>
                    <TitledTextInput title='Основной телефон для связи' def='+7 (912) 345-67-89'/>
                    </div>
                </div>    
            </Container>    
            <PrimaryButton>Сохранить</PrimaryButton>
        </div>
           
    );
}

export default Preferences;