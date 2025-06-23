import styled from "styled-components/native"
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";
import { TrashSimple } from "phosphor-react-native";

export const Container = styled(SafeAreaView)`
    flex: 1;
    align-items: center;

    background: ${(props) => props.theme.COLORS.FUNDO};
    color: ${(props) => props.theme.COLORS.WHITE};
`;

export const Title = styled.Text`
    text-align: center;
    font-size: ${({theme}) => theme.FONT_SIZE.XL}px;
    color: ${({theme}) => theme.COLORS.RED};
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
`;

export const Subtitle = styled.Text`
    text-align: center;
    font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
    color: ${({theme}) => theme.COLORS.GARY_700};
    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};

    margin-top: 10px;
`;

export const BtnContainer = styled.View`
    width: 100%;
    margin-top: 30px;
`;

export const Content = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const LeftContent = styled.View`
  flex: 1;
`;

export const TitleLabel = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #1c1c1c;
`;

export const Description = styled.Text`
  font-size: 14px;
  color: #5e5e5e;
  margin-top: 2px;
`;

export const DateText = styled.Text`
  font-size: 13px;
  color: #a1a1a1;
  margin-top: 6px;
`;

export const RightContent = styled.View`
  align-items: flex-end;
  gap: 6px;
`;

export const Amount = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: red;
`;

export const IconWrapper = styled(TouchableOpacity)`
    padding: 8px;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
`;

export const Delete = styled(TrashSimple).attrs({
    size: 20,
    color: 'red',
    weight: 'bold'
})``;