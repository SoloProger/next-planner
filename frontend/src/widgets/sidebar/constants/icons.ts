import Invoice from "../../../../public/img/invoice.svg";
import Category from "../../../../public/img/category.svg";
import History from "../../../../public/img/history.svg";
import Planning from "../../../../public/img/planning.svg";
import {ReactNode} from "react";

export const icons: { [key: string]: ReactNode } = {
    invoice: Invoice,
    category: Category,
    history: History,
    planning: Planning,
}
