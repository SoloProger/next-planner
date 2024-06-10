import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactChildren } from "../../shared/model/types/ReactChildren";

const queryClient = new QueryClient();

function CustomQueryClientProvider({ children }: ReactChildren) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default CustomQueryClientProvider;
