import styled from 'styled-components'

interface CheckProps {
  $active: boolean
}

export const StyledCheckbox = styled.div`
  width: 29px;
  height: 29px;
  position: relative;
  border: 1px solid #d5d0d070;
  margin-left: 10px;
  border-radius: 50%;
`;

export const WrapCheck = styled.div`
   left: 3px;
   position: absolute;
   top: 12px;
`;

export const Check = styled.span<CheckProps>`
  position: absolute;
  background: ${props => (props.$active ? 'grey' : '#0cdb7d')};
`;

export const CheckPart1 = styled(Check)`
  width: 8px;
  height: 2px;
  top: 4px;
  left: 3px;
  transform: rotate(48deg);
`;

export const CheckPart2 = styled(Check)`
  width: 15px;
  height: 2px;
  transform: rotate(-50deg);
  left: 7px;
  top: 0;
`;