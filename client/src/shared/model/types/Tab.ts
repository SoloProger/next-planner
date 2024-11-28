export interface Tab {
  name: string;
  active?: boolean;
  icon?: string;
}

export type TabWithIndex = Tab & { index: number };
