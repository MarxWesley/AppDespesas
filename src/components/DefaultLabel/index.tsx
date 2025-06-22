import { ReactNode } from "react";
import { Container } from "./styles";

type ExpenseProps = {
  children: ReactNode;
};

export default function DefaultLabel({ children }: ExpenseProps) {
    return (
        <Container>
            {children}
        </Container>
    );
}