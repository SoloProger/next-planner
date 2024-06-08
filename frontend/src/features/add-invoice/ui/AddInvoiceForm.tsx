import {
  Button,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  Select,
} from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { Controller, useForm } from "react-hook-form";
import {
  Invoice,
  InvoiceType,
  useInvoiceStore,
} from "../../../entities/invoice";
import { InvoiceTypeEnum } from "../../../entities/invoice/model/types/InvoiceType";
import {
  Currency,
  CurrencyEnumType,
} from "../../../shared/model/enums/Currency";
import { addInvoice } from "../api/addInvoice";
import invoiceNumberGenerate from "../lib/utils/invoiceNumberGenerate";
import { InvoiceRequest } from "../model/types/InvoiceRequest";

function AddInvoiceForm() {
  const { control, handleSubmit } = useForm<Omit<Invoice, "invoiceNumber">>({
    defaultValues: {
      name: "",
      currency: CurrencyEnumType.RUBLE,
      invoiceType: InvoiceTypeEnum.MAIN,
      invoiceCount: 0,
    },
  });

  const mutation = useMutation({
    mutationFn: (formData: InvoiceRequest) => addInvoice(formData),
  });

  const { addInvoiceToStore } = useInvoiceStore();

  const onSubmit = (data: Omit<Invoice, "invoiceNumber">) => {
    addInvoiceToStore({ ...data, invoiceNumber: invoiceNumberGenerate() });

    mutation.mutate({
      data: { ...data, invoiceNumber: invoiceNumberGenerate() },
    });
  };

  return (
    <form className="flex-col gap-12 ai-end" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <FormControl>
            <FormLabel>Название счета</FormLabel>
            <Input {...field} />
          </FormControl>
        )}
      />

      <Controller
        name="currency"
        control={control}
        render={({ field }) => (
          <FormControl isRequired>
            <FormLabel>Валюта</FormLabel>
            <Select {...field}>
              <option value="RUBLE">{Currency.RUBLE}</option>
              <option value="DOLLAR">{Currency.DOLLAR}</option>
              <option value="EURO">{Currency.EURO}</option>
            </Select>
          </FormControl>
        )}
      />

      <Controller
        name="invoiceType"
        control={control}
        render={({ field }) => (
          <FormControl isRequired>
            <FormLabel>Валюта</FormLabel>
            <Select {...field}>
              <option value="MAIN">{InvoiceType.MAIN}</option>
              <option value="SAVINGS">{InvoiceType.SAVINGS}</option>
              <option value="INVEST">{InvoiceType.INVEST}</option>
            </Select>
          </FormControl>
        )}
      />

      <Controller
        name="invoiceCount"
        control={control}
        render={({ field }) => (
          <FormControl isRequired>
            <FormLabel>Сумма на счете</FormLabel>
            <NumberInput {...field}>
              <NumberInputField />
            </NumberInput>
          </FormControl>
        )}
      />

      <Button type="submit" colorScheme="yellow">
        Добавить
      </Button>
    </form>
  );
}

export default AddInvoiceForm;
