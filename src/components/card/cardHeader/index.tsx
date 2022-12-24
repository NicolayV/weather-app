import * as S from "./styled";

export interface CardHeaderProps {
  list: [
    {
      weather: [{ icon: string; main: string }];
      dt_txt: string;
    }
  ];
  city: {
    name: string;
    country: string;
  };
}

export const CardHeader = (props: CardHeaderProps) => {
  const {
    list,
    city: { name, country },
  } = props;

  const { weather, dt_txt } = list[0];

  return (
    <S.Header>
      <S.CloseButton>
        <S.SvgClose />
      </S.CloseButton>

      <S.TitlePanel>
        <S.Title>
          {name}, {country}
        </S.Title>
        <S.SubTitle>{dt_txt}</S.SubTitle>
      </S.TitlePanel>

      <S.WeatherIconBar>
        <S.WeatherIcon>{weather[0].icon}</S.WeatherIcon>
        <S.WeatherType>{weather[0].main}</S.WeatherType>
      </S.WeatherIconBar>
    </S.Header>
  );
};
