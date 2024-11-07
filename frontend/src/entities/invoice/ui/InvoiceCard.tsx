import {currencySymbols} from "../constants/currencySymbols";
import {InvoiceCardProps} from "../model/types/InvoiceCardProps";

function InvoiceCard({
                         invoiceCount,
                         invoiceNumber,
                         currency,
                         invoiceType,
                         name,
                     }: InvoiceCardProps) {

    const backgrounds = {
        "MAIN": 'bg-main-card',
        "SAVINGS": "bg-saving-card",
        "INVEST": "bg-invest-card"
    }

    const truncateName = (name: string) => {
        if (name.length >= 14) {
            return name.slice(0, 13) + '...';
        }
        return name;
    }

    return (
        <div
            className={`p-16 border-radius-2 wp-200 hp-150 flex-col border-radius-8 gap-8 ${backgrounds[invoiceType]}`}>
            <h3 className="caption-3">
                №{invoiceNumber}
            </h3>
            <h2 className="subtitle-2">
                {truncateName(name as string)}
            </h2>
            <div className="caption-2">
                Текущий баланс: <span className="headline">{invoiceCount}{currencySymbols[currency]}</span>
            </div>
        </div>
    );
}

export default InvoiceCard;
