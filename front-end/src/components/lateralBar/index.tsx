import styled from 'styled-components'
import Logo from '../../assets/img/Logo.png'
import { CardImg } from '../CardImg'
import { AiOutlineAudit, AiOutlineSlack, AiTwotoneSetting } from 'react-icons/ai'

interface PropsPage {
    page?: any
}
export const LateralBar: React.FC<PropsPage> = ({ page }) => {
    return (
        <StyledBar>
            <DivItemLogo>
                <img src={Logo} alt='logo' />
            </DivItemLogo>
            <CardImg />
            <CardItensNavigation>
                <AiOutlineSlackStyled />
                <p>DashBoard</p>
            </CardItensNavigation>
            <CardItensNavigation>
                <AiOutlineAuditStyled />
                <p>Lista de alunos</p>
            </CardItensNavigation>
            <CardItensNavigation>
                <AiTwotoneSettingStyled />
                <p>Configurações</p>
            </CardItensNavigation>
        </StyledBar>
    )
}
const AiTwotoneSettingStyled = styled(AiTwotoneSetting)`
    font-size: 30px;
    margin-right: 15px;
`
const AiOutlineAuditStyled = styled(AiOutlineAudit)`
    font-size: 30px;
    margin-right: 15px;
`
const AiOutlineSlackStyled = styled(AiOutlineSlack)`
    font-size: 30px;
    margin-right: 15px;
`
const CardItensNavigation = styled.nav<PropsPage>`
    color: #969BA0;
    @media(min-width: 975px){
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 220px;
        padding: 10px;
        font-size: 20px;
        margin-top: 20px;
        p {
            margin: 0;
            padding: 0;
        }
    }
    :hover {
        background-color: #3C2E67;
        border-radius: 20px;
        transition: .5s;
        color: #fff;
    }
`
const StyledBar = styled.div`
    @media (min-width: 975px) {
        background-color: #212130;
        color: #fff;
        height: 100vh;
        width: 20vw;
        border-radius: 0 30px 30px 0; 
        box-shadow: 11px 7px 57px -3px rgba(255,255,255,0.33);
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`
const DivItemLogo = styled.div`
    img {
         margin-top: 15px;
         width: 170px;
        height: 64px;
    }
`
