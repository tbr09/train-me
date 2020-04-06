import { BasicUserProfileModel } from "../models/userprofile.model";

export const dashboardStateName = "dashboardStateName";

export interface DashboardState {
  profile: BasicUserProfileModel;
  isLoading: boolean;
  isError: boolean;
}

export const initialState: DashboardState = {
  profile: {
    id: "fdfdsgs",
    firstName: "Marcin",
    lastName: "Tyborowski"
  },
  isLoading: false,
  isError: null
};
