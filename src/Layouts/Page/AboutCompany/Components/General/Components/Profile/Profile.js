import Avatar from "./Avatar";
import styled from 'styled-components';

const Container = styled.div`
   color: #64748B;
`;


function Profile() {
    return (
        <div className='d-inline-flex flex-row'>
            <Avatar/>
                <div className='ms-3 d-inline-flex flex-column justify-content-center'>
                <div className='fs-5 fw-bold mb-2'>SPBEAUTY</div>
                    <Container> 
                        <div className="mb-1 mt-2">Салон красоты</div>
                        <div>Санкт-Петербург, Невский пр-т. 28</div>
                    </Container> 
                </div>                  
            </div>
           
    );
}

export default Profile;