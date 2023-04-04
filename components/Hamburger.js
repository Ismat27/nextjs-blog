import styled from 'styled-components'

const Hamburger = ({ menuRef, toggler}) => {
  return (
    <Wrapper className='menu' onClick={toggler}>
        <div ref={menuRef} className={``}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </Wrapper>
  )
}


const Wrapper = styled.div`
width: 30px;
cursor: pointer;
span {
  display: block;
  width: 100%;
  border-radius: 16px;
  height: 4px;
  background: #ffffff;
  transition: all .3s;
  position: relative;
}

span + span {
  margin-top: 7px;
}

.active span:nth-child(1) {
  animation: ease .5s top forwards;
}

.not-active span:nth-child(1) {
  animation: ease .5s top-2 forwards;
}

.active span:nth-child(2) {
  animation: ease .5s scaled forwards;
}

.not-active span:nth-child(2) {
  animation: ease .5s scaled-2 forwards;
}

.active span:nth-child(3) {
  animation: ease .5s bottom forwards;
}

.not-active span:nth-child(3) {
  animation: ease .5s bottom-2 forwards;
}

@keyframes top {
  0% {
    top: 0;
    transform: rotate(0);
  }
  50% {
    top: 11px;
    transform: rotate(0);
  }
  100% {
    top: 11px;
    transform: rotate(45deg);
  }
}

@keyframes top-2 {
  0% {
    top: 11px;
    transform: rotate(45deg);
  }
  50% {
    top: 11px;
    transform: rotate(0deg);
  }
  100% {
    top: 0;
    transform: rotate(0deg);
  }
}

@keyframes bottom {
  0% {
    bottom: 0;
    transform: rotate(0);
  }
  50% {
    bottom: 11px;
    transform: rotate(0);
  }
  100% {
    bottom: 11px;
    transform: rotate(135deg);
  }
}

@keyframes bottom-2 {
  0% {
    bottom: 11px;
    transform: rotate(135deg);
  }
  50% {
    bottom: 11px;
    transform: rotate(0);
  }
  100% {
    bottom: 0;
    transform: rotate(0);
  }
}

@keyframes scaled {
  50% {
    transform: scale(0);
  }
  100% {
    transform: scale(0);
  }
}

@keyframes scaled-2 {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
`

export default Hamburger