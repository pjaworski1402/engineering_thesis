import device from '@/styles/device';
import styled from 'styled-components';

export const Container = styled.div`
  @media ${device.laptop} {
    display: grid;
    grid-template-columns: 256px auto;
  }
`;
