export interface IRegiser {
  team_name: string;
  phone_number: string;
  email: string;
  project_topic: string;
  category: number;
  group_size: number;
  privacy_poclicy_accepted: boolean;
}

export interface IRegiserResponse {
  id: number;
  email: string;
  team_name: string;
  phone_number: string;
  project_topic: string;
  group_size: number;
  privacy_poclicy_accepted: boolean;
  date_created: string;
  last_updated: string;
  category: number;
}
