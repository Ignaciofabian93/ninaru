import store from "@/store/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "@/context/ThemeContext";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <ThemeProvider>{children}</ThemeProvider>
    </Provider>
  );
};
