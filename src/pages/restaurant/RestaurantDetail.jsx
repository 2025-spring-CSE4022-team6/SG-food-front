import styled from 'styled-components'
import { Link, useParams } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'

const RestaurantDetail = () => {
  const { id } = useParams()

  const restaurant = {
    name: '핵밥 서강대점',
    rating: 4.1,
    type: '일본 가정식',
    best: '맛',
    hours: '11:00 ~ 21:00',
    breakTime: '14:00 ~ 15:00',
    image: '/assets/hackbob.jpg' // 이미지 나중에 교체 예정
  }

  const reviews = [
    { id: 1, title: '맛있는데 비쌈', rating: 4.2 },
    { id: 2, title: '존맛탱 인정', rating: 5.0 },
    { id: 3, title: '두 번은 안 감', rating: 2.0 }
  ]

  return (
    <Wrapper>
      <Image src={restaurant.image} alt="음식 이미지" />

      <Title>{restaurant.name}</Title>
      <Rating>★{restaurant.rating}</Rating>
      <TagList>
        <Tag>#{restaurant.type}</Tag>
        <Tag>#{restaurant.best}</Tag>
        <Tag>#혼밥가능</Tag>
      </TagList>
      <Time>
        영업 시간: {restaurant.hours}
        <br />
        휴게 시간: {restaurant.breakTime}
      </Time>

      <ReviewList>
        {reviews.map((r) => (
          <StyledLink key={r.id} to={`/restaurant/${id}/review/${r.id}`}>
            <ReviewCard>
              <FaUser />
              <span>★{r.rating} - {r.title}</span>
            </ReviewCard>
          </StyledLink>
        ))}
      </ReviewList>
    </Wrapper>
  )
}

export default RestaurantDetail

// ---------- styled-components ----------

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

const Image = styled.img`
  width: 100%;
  max-width: 300px;
  border-radius: 12px;
  margin-bottom: 16px;
`

const Title = styled.h2`
  margin-top: 16px;
  font-size: 22px;
  font-weight: 700;
  color: #ff6f61;
`

const Rating = styled.p`
  color: #ff6f61;
  font-weight: bold;
  font-size: 18px;
`

const Tag = styled.div`
  display: inline-block;
  padding: 6px 12px;
  border: 2px solid #ff6f61;
  border-radius: 30px;
  font-size: 13px;
  color: #ff6f61;
  font-weight: 500;
  margin-bottom: 8px;
  `
  const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;              
  margin-bottom: 16px;
  justify-content: center; 
  `

const Time = styled.p`
  font-size: 13px;
  color: #a1a1a1;
  margin-bottom: 20px;
  line-height: 1.4;
`

const ReviewList = styled.ul`
  margin-top: 24px;
  padding: 0;
  list-style: none;
  width: 100%;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
  `

const ReviewCard = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  border: 2px solid #ff6f61;
  border-radius: 30px;
  margin-bottom: 12px;
  background-color: #fff;
  color: #ff6f61;
  font-weight: 600;
  font-size: 15px;
  gap: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;

  &:hover {
    background-color: #ff6f61;
    color: #fff;
  }

  svg {
    font-size: 18px;
  }
`
