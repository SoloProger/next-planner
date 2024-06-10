import {
  Button,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Controller, useForm } from "react-hook-form";
import { Goal } from "../../../entities/goal";
import { Invoice } from "../../../entities/invoice";
import { InvoiceTypeEnum } from "../../../entities/invoice/model/types/InvoiceType";
import { CurrencyEnumType } from "../../../shared/model/enums/Currency";
import { EntitiesDataModel } from "../../../shared/model/types/EntitiesDataModel";
import { EntityRequest } from "../../../shared/model/types/EntityRequest";
import { addInvoice } from "../../add-invoice/api/addInvoice";
import invoiceNumberGenerate from "../../add-invoice/lib/utils/invoiceNumberGenerate";
import { addGoal } from "../api/addGoal";

interface GoalFormProps {
  close: () => void;
}

function AddGoalForm({ close }: GoalFormProps) {
  const queryClient = useQueryClient();

  const { control, handleSubmit } = useForm<Goal>({
    defaultValues: {
      name: "",
      description: "",
      currentAmount: 0,
      totalAmount: 0,
    },
  });

  const mutationInvoice = useMutation({
    mutationFn: (data: EntityRequest<Invoice>) => addInvoice(data),
  });

  const mutationGoal = useMutation({
    mutationFn: (formData: EntityRequest<Goal>) => addGoal(formData),
    onSuccess: (data) => {
      queryClient.setQueriesData<EntitiesDataModel<Goal>>(
        { queryKey: ["goals"] },
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

  const onSubmit = (formData: Goal) => {
    mutationInvoice.mutate(
      {
        data: {
          name: formData.name,
          currency: CurrencyEnumType.RUBLE,
          invoiceType: InvoiceTypeEnum.MAIN,
          invoiceCount: formData.currentAmount,
          invoiceNumber: invoiceNumberGenerate(),
        },
      },
      {
        onSuccess: (data) => {
          if (data.data.id) {
            mutationGoal.mutate({
              data: { ...formData, invoice: { set: [data.data.id] } },
            });

            close();
          }
        },
      }
    );
  };

  return (
    <form className="flex-col gap-12 ai-end" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <FormControl isRequired>
            <FormLabel>Цель</FormLabel>
            <Input {...field} />
          </FormControl>
        )}
      />

      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <FormControl>
            <FormLabel>Описание</FormLabel>
            <Input {...field} />
          </FormControl>
        )}
      />

      <Controller
        name="currentAmount"
        control={control}
        render={({ field }) => (
          <FormControl isRequired>
            <FormLabel>Накоплено</FormLabel>
            <NumberInput {...field}>
              <NumberInputField />
            </NumberInput>
          </FormControl>
        )}
      />

      <Controller
        name="totalAmount"
        control={control}
        render={({ field }) => (
          <FormControl isRequired>
            <FormLabel>Вся сумма</FormLabel>
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

export default AddGoalForm;
