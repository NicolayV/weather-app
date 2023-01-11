import styled from "styled-components";
import { Language } from "@styled-icons/material-rounded";
import LangToggler from "../../components/LangToggler/LangToggler";
import { useLang } from "./useLang";

export const LangSwitcher = () => {
  const { options, value, onChange } = useLang();

  return (
    <Header>
      <Container>
        <Wrapper>
          <SvgLang />
          <LangToggler options={options} value={value} onChange={onChange} />
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
