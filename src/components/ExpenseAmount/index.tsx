import DefaultLabel from "../DefaultLabel";
import { Quantity, Row, Subtitle, TotalExpense } from "./styles";

type ExpenseProps = {
    title: string;
    subtitle: string;
    amount?: number;
    qnt: number;
}

export default function ExpenseAmount ({title, subtitle, amount, qnt}: ExpenseProps) {
    return (
        <DefaultLabel>
            <Row>
                <Subtitle>{title}</Subtitle>
                <Subtitle>{subtitle}</Subtitle>
            </Row>
            <Row>
                <TotalExpense>R$ {amount}</TotalExpense>
                <Quantity>{qnt}</Quantity>
            </Row>
        </DefaultLabel>
    )
}