import * as S from "./styled";

import { Select } from "components/Select";
import { useLang } from "./useLang";

export const LangSwitcher = () => {
  const { options, value, onChange } = useLang();

  return (
    <S.Header>
      <S.Container>
        <S.Wrapper>
          <S.SvgLang />
          <Select options={options} value={value} onChange={onChange} />
        </S.Wrapper>
      </S.Container>
    </S.Header>
  );
};
