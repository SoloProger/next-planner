import {
    Button,
    FormControl,
    FormLabel,
    Input,
    NumberInput,
    NumberInputField,
    Select,
} from "@chakra-ui/react";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {Controller, useForm} from "react-hook-form";
import {getCategories} from "../../../entities/category";
import {Record} from "../../../entities/record/model/types/Record";
import {RecordType} from "../../../entities/record/model/types/RecordType";
import {CustomDate} from "../../../shared/lib/utils";
import {EntitiesDataModel} from "../../../shared/model/types/EntitiesDataModel";
import {EntityRequest} from "../../../shared/model/types/EntityRequest";
import {addRecord} from "../api/addRecord";

interface FormProps {
    close: () => void;
}

function AddRecordForm({close}: FormProps) {
    const queryClient = useQueryClient();

    const {control, handleSubmit} = useForm<Record>({
        defaultValues: {
            name: "",
            date: CustomDate.getLocaleDate(),
            count: 0,
            description: "",
            recordType: RecordType.CONSUMPTION,
        },
    });

    const {data: categories} = useQuery({
        queryKey: ["categories"],
        queryFn: () => getCategories(),
    });

    const mutation = useMutation({
        mutationFn: (formData: EntityRequest<Record>) => addRecord(formData),
        onSuccess: (data) => {
            queryClient.setQueriesData<EntitiesDataModel<Record>>(
                {queryKey: ["records"]},
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

    const onSubmit = (data: any) => {
        mutation.mutate({
            data: {
                ...data,
                category: {
                    set: [data.category],
                },
            },
        });

        close();
    };

    return (
        <form className="flex-col gap-12 ai-end" onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="name"
                control={control}
                render={({field}) => (
                    <FormControl>
                        <FormLabel>Название</FormLabel>
                        <Input {...field} />
                    </FormControl>
                )}
            />

            <Controller
                name="description"
                control={control}
                render={({field}) => (
                    <FormControl>
                        <FormLabel>Описание</FormLabel>
                        <Input {...field} />
                    </FormControl>
                )}
            />

            <Controller
                name="recordType"
                control={control}
                render={({field}) => (
                    <FormControl isRequired>
                        <FormLabel>Тип записи</FormLabel>
                        <Select {...field}>
                            <option value={RecordType.CONSUMPTION}>
                                {RecordType.CONSUMPTION}
                            </option>
                            <option value={RecordType.INCOME}>{RecordType.INCOME}</option>
                        </Select>
                    </FormControl>
                )}
            />

            <Controller
                name="category"
                control={control}
                render={({field}) => (
                    <FormControl isRequired>
                        <FormLabel>Категория</FormLabel>
                        <Select {...field}>
                            <option>Не выбрано</option>
                            {categories?.data.map((category) => (
                                <option key={category.id} value={category.id}>{category.attributes.name}</option>
                            ))}
                        </Select>
                    </FormControl>
                )}
            />

            <Controller
                name="count"
                control={control}
                render={({field}) => (
                    <FormControl isRequired>
                        <FormLabel>Сумма</FormLabel>
                        <NumberInput {...field}>
                            <NumberInputField/>
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

export default AddRecordForm;
