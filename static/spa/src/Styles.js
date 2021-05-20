import { colors, elevation } from "@atlaskit/theme";
import styled from "styled-components";

export const Card = styled.div`
  ${elevation["e100"]};
  background: ${colors.N0};
  position: relative;
  text-decoration: none;
  border-radius: 3px;
  margin: 4px 1px;
  height: calc(100vh - 10px);
  box-sizing: border-box;
`;

export const Status = styled.span`
  float: right;
  align-items: center;
  display: inline-flex;
  margin-top: -24px;

  & > span {
    margin-left: 8px;
  }
`;

export const Form = styled.form`
  padding: 8px 0;
`;

export const LoadingContainer = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  height: 100%;
`;

export const Row = styled.div`
  transition: 0.3s ease all;
  padding: 8px;
  border-bottom: 1px solid ${colors.N30};

  button {
    opacity: 0;
    transition: 0.2s ease all;
    margin-left: 8px;
  }

  &:hover {
    button {
      opacity: 1;
    }
  }

  ${(props) => `
    ${props.isChecked ? "text-decoration: line-through;" : ""}
    ${props.isCompact ? "padding: 0 6px;" : ""}
    ${props.isCompact ? "border: 0;" : ""}
  `}
`;

export const IconContainer = styled.span`
  position: relative;
  height: 20px;
  width: 24px;
  align-self: center;
  display: inline-flex;
  flex-wrap: nowrap;
  max-width: 100%;
  position: relative;
`;

export const Icon = styled.span`
  position: absolute;
`;

export const ScrollContainer = styled.div`
  overflow: auto;
  padding: 8px;
  max-height: calc(100% - 40px);
`;

export const SummaryFooter = styled.div`
  width: 100%;
  height: 40px;
  bottom: 0;
  left: 0;
  position: absolute;
  background: ${colors.N10};
  border-top: 1px solid ${colors.N30};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SummaryCount = styled.div`
  padding: 0 12px;
`;

export const SummaryActions = styled.div`
  padding: 8px;
`;

export const ChangeLog = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-grow: 1;
`;

export const UserName = styled.span`
  color: rgb(66, 82, 110);
  font-weight: 500;
  width: 100px;
  overflow-wrap: break-word;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ChangeTime = styled.span`
  color: rgb(66, 82, 110);
  flex-grow: 1;
  width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ChangedField = styled.span`
  font-weight: 500;
  overflow-wrap: break-word;
  flex-grow: 1;
  width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
