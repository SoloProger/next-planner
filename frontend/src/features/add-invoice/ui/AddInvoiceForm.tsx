import {
  Button,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  Select,
} from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Controller, useForm } from "react-hook-form";
import { Invoice, InvoiceType } from "../../../entities/invoice";
import { InvoiceTypeEnum } from "../../../entities/invoice/model/types/InvoiceType";
import {
  Currency,
  CurrencyEnumType,
} from "../../../shared/model/enums/Currency";
import { EntitiesDataModel } from "../../../shared/model/types/EntitiesDataModel";
import { addInvoice } from "../api/addInvoice";
import invoiceNumberGenerate from "../lib/utils/invoiceNumberGenerate";
import { InvoiceRequest } from "../model/types/InvoiceRequest";

interface InvoiceFormProps {
  close: () => void;
}

function AddInvoiceForm({ close }: InvoiceFormProps) {
  const queryClient = useQueryClient();

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
    onSuccess: (data) => {
      queryClient.setQueriesData<EntitiesDataModel<Invoice>>(
        { queryKey: ["invoices"] },
        (prev) => {
          return (
            prev && {
              data: [...prev.data, data.data],
              meta: prev.meta,
            }
          );
        }
      );
    },
  });

  const onSubmit = (data: Omit<Invoice, "invoiceNumber">) => {
    mutation.mutate({
      data: { ...data, invoiceNumber: invoiceNumberGenerate() },
    });

    close();
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
