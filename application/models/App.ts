export interface App {
  id: string;
  status: AppStatus;
  title: string;
  description: string;
  featured_image: string | null;
}

export enum AppStatus {
  POSTPONED = 'Postponed',
  COMING_SOON = 'Coming Soon',
  BETA = 'Beta',
  RELEASE = 'Release',
}
