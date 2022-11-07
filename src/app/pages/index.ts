export interface GroupMenu {
  name?: string;
  menus: MenuItem[];
}

export interface MenuItem {
  path?: string;
  display: string;
  icon?: string;
  iconFont?: string;
  children?: MenuItem[];
  requiredPolicy?: string[];
}

export interface NavItem {
  label: string;
  path: string;
  icon?: string;
  exact?: boolean;
}
