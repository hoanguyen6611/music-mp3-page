import { User } from "./user.model";

export interface PlatformVendorModel {
  ID: string;
  Name: string;
  Code: string;
  ShortName: string;
  // PlatformCode: PlatformCode;
}

export interface PlatformSettingsModel {
  Vendors: PlatformVendorModel[];
}

export interface ProfileModel {
  User: User;
  // Permissions: SYSFunction[];
  UnreadNotifications: number;
  PlatformSettings: PlatformSettingsModel;
  ActionCodes: string[];
}
