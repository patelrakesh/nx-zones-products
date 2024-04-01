export type MenuLinkProps = {
  label: string;
  href: string;
  childs?: MenuLinkProps[];
};

export type DocLayoutProps = {
  children?: React.ReactNode;
  links?: MenuLinkProps[];
};

export type SidebarProps = {
  links?: MenuLinkProps[];
  isOpen: boolean;
};

export type DocHeaderProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export type NestedMenuProps = {
  links: MenuLinkProps[];
};

export type DocHeadingProps = {
  children: React.ReactNode;
  subHeading?: boolean;
  id?: string;
};

export type DocParagraphProps = {
  children: React.ReactNode;
};

export type DocNotesProps = {
  children: React.ReactNode;
};
