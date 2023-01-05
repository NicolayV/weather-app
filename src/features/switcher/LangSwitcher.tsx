import styled from "styled-components";
import { Language } from "@styled-icons/material-rounded";

import { Select } from "../../components/Select/Select";
import { useLang } from "./useLang";

export const LangSwitcher = () => {
  const { options, value, onChange } = useLang();

  return (
    <Header>
      <Container>
        <Wrapper>
          <SvgLang />
          <Select options={options} value={value} onChange={onChange} />
        </Wrapper>
      </Container>
    </Header>
  );
};

export const Header = styled.header`
  border-bottom: 1px solid var(--grey100);
`;
export const Container = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 2rem;
  gap: 0.5rem;
`;
export const SvgLang = styled(Language)`
  fill: var(--grey200);
  width: 14px;
`;
