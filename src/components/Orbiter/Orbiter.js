import styled, { keyframes } from 'styled-components';

const randomIntBetween = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

const Orbiter = ({ devices }) => {
  return (
    <OrbitContainer>
      {devices.map((device) => (
        <OrbitPath
          key={device.id}
          aria-label="orbit-path"
          size={randomIntBetween(100, 400)}
          speed={randomIntBetween(3, 20)}
        >
          <Planet size={randomIntBetween(15, 45)} />
        </OrbitPath>
      ))}
    </OrbitContainer>
  );
};

const orbit = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const OrbitContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
`;

const OrbitPath = styled.div`
  position: absolute;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 100%;
  animation: ${orbit} ${({ speed }) => speed}s linear infinite;
`;

const Planet = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 100%;
  background-color: #4a434f;
`;

export default Orbiter;
