import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Controller, useForm } from "react-hook-form";
import { Category } from "../../../entities/category";
import { Goal } from "../../../entities/goal";
import { EntitiesDataModel } from "../../../shared/model/types/EntitiesDataModel";
import { EntityRequest } from "../../../shared/model/types/EntityRequest";
import { addCategory } from "../api/addCategory";

interface FormProps {
  close: () => void;
}

function AddCategoryForm({ close }: FormProps) {
  const queryClient = useQueryClient();

  const { control, handleSubmit } = useForm<Goal>({
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const mutation = useMutation({
    mutationFn: (formData: EntityRequest<Category>) => addCategory(formData),
    onSuccess: (data) => {
      queryClient.setQueriesData<EntitiesDataModel<Category>>(
        { queryKey: ["categories"] },
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

  const onSubmit = (formData: Category) => {
    mutation.mutate({
      data: { ...formData },
    });

    close();
  };

  return (
    <form className="flex-col gap-12 ai-end" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <FormControl isRequired>
            <FormLabel>Название категории</FormLabel>
            <Input {...field} />
          </FormControl>
        )}
      />

      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <FormControl>
            <FormLabel>Описание категории</FormLabel>
            <Input {...field} />
          </FormControl>
        )}
      />

      <Button type="submit" colorScheme="yellow">
        Добавить
      </Button>
    </form>
  );
}

export default AddCategoryForm;
