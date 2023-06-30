import styled from "styled-components";
import { Colors } from "utils/constants";

export const FullGrid = styled.div`
    height: 100%;
    width: 100%;
    gap: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

export const SelectWrapper = styled.div`
    display: block;
    position: relative;
    padding: 24px;
    width: calc(100% - 48px);
`;

export const ProjectWrapper = styled.div`
    display: flex;
    justify-content: ${({ withContent }) =>
        withContent ? "flex-start" : "center"};
    flex-direction: column;
    position: relative;
    padding: 0 24px 12px;
    margin-bottom: 24px;
    color: ${Colors.DARK};
    background: color-mix(
        in srgb,
        ${Colors.LIGHT} ${({ withContent }) => (withContent ? 90 : 0)}%,
        transparent
    );
    width: auto;
    max-width: calc(100% - 96px);
    border-radius: 2px;
    ${({ withContent }) =>
        withContent ? "max" : "min"}-height: calc(100% - 144px);
    overflow-y: auto;
    transition: all 0.2s ease-in-out;

    & pre,
    & table {
        color: ${Colors.DARK};
        border-radius: 2px;
        padding: 8px;
        background: ${Colors.LIGHT};
        border: solid 1px ${Colors.DARK};
    }

    & * {
        max-width: 100%;
    }
`;

const optionFontSize = "1.2em";
export const Option = styled.option``;
export const Select = styled.select`
    font-size: ${optionFontSize};
    width: 100%;
    padding: 12px 24px;

    ${Option} {
        font-size: ${optionFontSize};
    }
`;
