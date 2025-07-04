import styled from "styled-components/native"
import theme from "../styles/theme/defaultTheme"

type ThemeType = typeof theme

declare module 'styled-components/native' {
    export interface DefaultTheme extends ThemeType {}
}