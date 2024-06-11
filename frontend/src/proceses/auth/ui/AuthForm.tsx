import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { authUser } from "../api/authUser";
import { AuthRequest } from "../model/types/AuthRequest";

function AuthForm() {
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm<AuthRequest>({
    defaultValues: {
      identifier: "",
      password: "",
    },
  });

  const mutation = useMutation({
    mutationFn: (formData: AuthRequest) => authUser(formData),
  });

  const onSubmit = (formData: AuthRequest) => {
    mutation.mutate(formData, {
      onSuccess: (data) => {
        localStorage.setItem("token", data.jwt);
        navigate("/");
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex-col gap-12">
      <Controller
        name="identifier"
        control={control}
        render={({ field }) => (
          <FormControl isRequired>
            <FormLabel>Логин</FormLabel>
            <Input {...field} />
          </FormControl>
        )}
      />

      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <FormControl isRequired>
            <FormLabel>Пароль</FormLabel>
            <Input type="password" {...field} />
          </FormControl>
        )}
      />

      <Button type="submit" colorScheme="yellow">
        Войти
      </Button>
    </form>
  );
}

export default AuthForm;
