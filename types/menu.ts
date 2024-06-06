export type menu_detail = {
  title: string;
  price: number;
  image: {
    url: string;
    height: number;
    width: number;
  };
};

export type noeye_detail = {
  title: string;
  price: number;
};

export type Menu = {
  id: string;
  title: string;
  menu: menu_detail[];
  menu_noeye: noeye_detail[];
};
