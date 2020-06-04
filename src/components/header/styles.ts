import styled from "styled-components";
import { Link } from "gatsby";
import { MAXWIDTH } from "../../styles/constants";


export const SCHeader = styled.header`
  background: #f8f9fa;
  color: #111;
  font-family: Virgil; 
  margin: 3px;
`;

export const SCTitle = styled.div`
  margin: 0 auto;
  max-width: ${MAXWIDTH};
  padding: 0.5rem 0 0; 
`;

export const SCDescription = styled.div`
  margin: 0 2rem;
`;