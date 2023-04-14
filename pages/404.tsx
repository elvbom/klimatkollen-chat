import router from 'next/router'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`

const Button = styled.button`
height: 56px;
border: 0;
border-radius: 4px;
font-weight: bold;
font-size: 16px;
cursor: pointer;
width: 100%;
`

const FourOhFour = () => {
  const handleClick = () => {
    router.push(`/`)
  }

  return (
      <Wrapper>
        <h1>404 - Sidan hittades inte</h1>
        <Button onClick={handleClick}>Gå till startsidan</Button>
      </Wrapper>
  )
}

export default FourOhFour