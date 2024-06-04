import { currencySymbols } from "../constants/currencySymbols";
import { InvoiceCardProps } from "../model/types/InvoiceCardProps";

function InvoiceCard({
  invoiceCount,
  invoiceNumber,
  currency,
  invoiceType,
}: InvoiceCardProps) {
  return (
    <div className="bg-orange p-16 border-radius-2 hp-250 w-100 flex-col jc-space">
      <div className="flex-col gap-12">
        <h2 className="header-semibold-6">
          <strong>Тип счета:</strong> {invoiceType}
        </h2>
        <div className="flex jc-space ai-center">
          <h3 className="header-semibold-7">
            <strong>Счет:</strong> {invoiceNumber}
          </h3>
          <h3 className="header-semibold-7">
            <strong>Валюта:</strong> {currency}
          </h3>
        </div>
      </div>
      <span className="subtitle-1">
        <strong>Текущий баланс:</strong> {invoiceCount}
        {currencySymbols[currency]}
      </span>
    </div>
  );
}

export default InvoiceCard;
