import { create } from "zustand";
import { UseLinkProps } from "./types";
import { api } from "@/lib/axios/axios";
import { toast } from "sonner";

export const useLinks = create<UseLinkProps>((set) => ({
  createIsLoading: false,
  setCreateIsLoading: (value) => set({ createIsLoading: value }),

  selectPrice: "",
  setSelectPrice: (value) => set({ selectPrice: value }),
  generatedLink: "",
  setGeneratedLink: (value) => set({ generatedLink: value }),
  handleCreateLink: async (paymentValue) => {
    const { setCreateIsLoading, setGeneratedLink } = useLinks.getState();

    try {
      setCreateIsLoading(true);
      const res = await api.post("/payments/create-payment", {
        discounts: paymentValue,
      });
      setGeneratedLink(
        `${process.env.NEXT_PUBLIC_URL}/payment/${paymentValue}`
      );
    } catch (err: any) {
      toast.error(err.response.data.message);
    } finally {
      setCreateIsLoading(false);
    }
  },
}));
