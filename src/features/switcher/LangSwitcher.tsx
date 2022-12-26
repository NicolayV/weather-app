import * as S from "./styled";

import { Select } from "components/select/";
import { useLang } from "./use-lang";

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
