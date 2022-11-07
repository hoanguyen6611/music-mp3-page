export interface Tenant {
  id: string;
  name: string;
  public_api_key: string;
  integration_token: string;
  currency: string;
  timeZone: string;
  language: string;
  country_code: string;
  is_active: boolean;
}
