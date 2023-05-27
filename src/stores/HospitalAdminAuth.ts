import { HospitalAdmin } from "../models/HospitalAdmin";
import { create } from "zustand";

export interface HospitalAdminStore {
  hospitalAdmin: HospitalAdmin;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
}

const useStore = create<HospitalAdmin>((set, get) => {
  return {
    hospitalAdmin: undefined,
    signIn: async () => {},
    signOut: async () => {},
  };
});
