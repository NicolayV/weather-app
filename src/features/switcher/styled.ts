import styled from "styled-components";
import { Language } from "@styled-icons/material-rounded";

export const Header = styled.header`
  border-bottom: 1px solid #ececec;
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
  padding: 20px;
  gap: 5px;
`;
export const SvgLang = styled(Language)`
  fill: #d0d0d0;
  width: 14px;
`;
