import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { FaCamera, FaMapMarkerAlt, FaBox } from 'react-icons/fa'

const ReviewWrite = () => {
  const navigate = useNavigate()

  return (
    <Container>
      <Header>
        <CancelButton onClick={() => navigate(-1)}>취소</CancelButton>
        <DoneButton>완료</DoneButton>
      </Header>

      <UserInfo>
        <Avatar />
        <UserText>
          <Name>펍픽</Name>
          <Username>@pubpick</Username>
        </UserText>
      </UserInfo>

      <FormWrapper>
        <TextArea placeholder="리뷰를 작성해 주세요." />
      </FormWrapper>

      <Footer>
        <FooterButton><FaCamera /> 사진추가</FooterButton>
        <FooterButton><FaMapMarkerAlt /> 장소</FooterButton>
        <FooterButton><FaBox /> 상품</FooterButton>
      </Footer>
    </Container>
  )
}

export default ReviewWrite

// ---------- styled-components ----------

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #fffce6;
  padding: 1rem;
  position: relative;
  box-sizing: border-box;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`

const CancelButton = styled.button`
  background: none;
  border: none;
  color: #ff6f61;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
`

const DoneButton = styled.button`
  background-color: #ffdab9;
  border: none;
  padding: 0.4rem 1rem;
  border-radius: 1rem;
  font-weight: bold;
  color: #ff6f61;
  cursor: pointer;
`

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
`

const Avatar = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: #e0e0e0;
`

const UserText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Name = styled.span`
  font-weight: bold;
`

const Username = styled.span`
  font-size: 0.875rem;
  color: #aaa;
`

const FormWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 1rem;
  padding-bottom: 6rem;
`

const TextArea = styled.textarea`
  flex-grow: 1;
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 0.75rem;
  font-size: 1rem;
  resize: none;
  color: #333;
  background-color: #fff;
  outline: none;
  box-sizing: border-box;

  ::placeholder {
    color: #aaa;
  }
`

const Footer = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 56.25vh;
  border-top: 1px solid #eee;
  background-color: #fff;
  padding: 0.75rem 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 100;
  box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.05);
`

const FooterButton = styled.button`
  background: none;
  border: none;
  color: #ff6f61;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;
`