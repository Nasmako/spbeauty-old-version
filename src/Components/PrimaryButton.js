import Clickable from "./Clickable";
import styled from "styled-components";



function PrimaryButton(props) {
    // Здесь устанавливается минимальная ширина для кнопки
    let minWidth = props.minWidth === undefined ? '217px' : props.minWidth; 
    const Button = styled.div`
        background: #F8FAFC;
        border-radius: 24px;
        border: 1px solid #E2E8F0;
        box-shadow: inset 0px 1px 2px rgba(10, 15, 26, 0.08);
        min-width: ${minWidth};
        color: #64748B;
        &:hover {
            background: linear-gradient(180deg, #DFEAF1 0%, #F8FAFC 80%);
        }
        &:active {
            background: #3B82F6;
            color: white;
        }
    `;
    return (
        <Clickable>
            <Button className='p-2 text-md'>
                {props.children}
            </Button>
        </Clickable>
        
    );
}

export default PrimaryButton;