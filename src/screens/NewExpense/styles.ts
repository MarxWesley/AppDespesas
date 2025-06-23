import styled from "styled-components/native"
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
    flex: 1;
    align-items: center;

    background: ${(props) => props.theme.COLORS.FUNDO};
    color: ${(props) => props.theme.COLORS.WHITE};
`;

export const DefaultLabel = styled.View`
  background-color: #fff;
  margin: 16px;
  padding: 20px;
  border-radius: 16px;
  elevation: 4;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 8px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #000;
  margin-bottom: 4px;
`;

export const Subtitle = styled.Text`
  font-size: 14px;
  color: #6c757d;
  margin-bottom: 16px;
`;

export const Label = styled.Text`
    text-align: start;
    font-size: 16px;
    font-weight: 600;
    color: #212529;
    margin-top: 12px;
    margin-bottom: 6px;
`;

export const BtnContainer = styled.View`
  margin-top: 24px;
`;

export const Content = styled.View`
  margin-top: 15%;
`;