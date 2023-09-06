import { styled } from "styled-components";

const Layout = styled.div`
  /* max-width: 480px;
  width: 100%;
  height: 800px;
  background-color: darkseagreen;
  display: flex;
  justify-content: center;
  border-radius: 15px; */
`;

const Location = styled.div`
  /* color: white; */
`;

const Temp = styled.div``;

const Desc = styled.div``;

const ConWrap = styled.div``;

const Con = styled.div``;

export const Weather = ({ data }) => {
  const {
    name,
    main: { feels_like, temp, temp_max, temp_min },
    weather,
  } = data;

  return (
    <Layout>
      <Location>{name}</Location>
      <Temp>{temp}°</Temp>
      <Desc>{weather[0].description}</Desc>
      <ConWrap>
        <Con>
          <p>체감온도</p>
          <p>{feels_like}°</p>
        </Con>

        <Con>
          <p>최고기온</p>
          <p>{temp_max}°</p>
        </Con>

        <Con>
          <p>최저기온</p>
          <p>{temp_min}°</p>
        </Con>
      </ConWrap>
    </Layout>
  );
};
