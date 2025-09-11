import { IGetEmailParams } from "@/services/emailService";
import React, {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState
} from "react";

export interface IEmailContext {
  params: IGetEmailParams;
  setParams: React.Dispatch<React.SetStateAction<IGetEmailParams>>;
}

export interface IEmailProviderProps {
  children?: ReactNode;
}

const initParams: IGetEmailParams = {
  page: 1,
  limit: 10,
  search: null
};

const EmailContext = createContext<IEmailContext>({
  params: initParams,
  setParams: () => {}
});

export function useEmailContext() {
  return useContext(EmailContext);
}

const EmailProvider = ({ children }: IEmailProviderProps) => {
  const [params, setParams] = useState<IGetEmailParams>(initParams);

  const value = useMemo(() => {
    return {
      params,
      setParams
    };
  }, [params]);

  return (
    <EmailContext.Provider value={value}>{children}</EmailContext.Provider>
  );
};

export default EmailProvider;
