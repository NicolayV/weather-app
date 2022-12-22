import { useState } from "react";
import * as S from "./styled";
import { Select } from "components/select/";

export const LanguageSwitcher = () => {
  const options = [
    { label: "EN", value: "EN" },
    { label: "UA", value: "UA" },
    { label: "RU", value: "RU" },
  ];
  const [value, setValue] = useState(options[0]);

  return (
    <S.Header>
      <S.Container>
        <S.Wrapper>
          <S.SvgLanguage />
          <Select options={options} value={value} onChange={setValue} />
        </S.Wrapper>
      </S.Container>
    </S.Header>
  );
};
