import { FaAngleDown } from 'react-icons/fa'
import styled from 'styled-components'
import PerfilFoto from '../../assets/img/perfilFoto.jpg'

export const CardImg: React.FC = () => {
    return (
        <>
            <ImgCardAdmin>
                <DivItemPerfil>
                    <img src={PerfilFoto} alt='imagem de perfil' />
                </DivItemPerfil>
                <p>Olá <strong>Gabriel</strong></p>
                <FaAngleDownStyled />
            </ImgCardAdmin>
            {/* <ContainerDivImagePerfil>

            </ContainerDivImagePerfil> */}
        </>
    )
}
const ContainerDivImagePerfil = styled.div`
    display: flex;
    color: #fff;
    align-items: center;
    padding: 10px;
    border-radius: 20px;
    justify-content: center;
    p{ 
        padding: 0;
        margin: 0;
        margin-left: 10px;
    }
    border-width: 1px;
    border-style: solid;
    border-top: #fff;
    width: 220px;

`
const FaAngleDownStyled = styled(FaAngleDown)`
    font-size: 20px;
    margin-left: 10px;
    cursor: pointer;
`
const ImgCardAdmin = styled.div`
    margin-top: 15px;
    display: flex;
    color: #fff;
    align-items: center;
    padding: 10px;
    border-radius: 20px;
    justify-content: center;
    p{ 
        padding: 0;
        margin: 0;
        margin-left: 10px;
    }
    border-width: 1px;
    border-color: #ffff;
    border-style: solid;
    width: 220px;
`
const DivItemPerfil = styled.div`
    img {
        width: 44px;
        height: 44px;
        border-radius: 30px;
        object-fit: cover;
    }
`