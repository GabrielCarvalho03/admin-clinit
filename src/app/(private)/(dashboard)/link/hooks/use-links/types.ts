export type paymentValue = "297" | "148" | "97" | "";

export interface UseLinkProps {
  createIsLoading: boolean;
  setCreateIsLoading: (value: boolean) => void;

  selectPrice: paymentValue;
  setSelectPrice: (value: paymentValue) => void;
  generatedLink: string;
  setGeneratedLink: (value: string) => void;
  handleCreateLink: (value: paymentValue) => Promise<void>;
}
