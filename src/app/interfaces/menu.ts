export interface Menu {
    titulo: String;
    subMenus: Submenu[];
}

export interface Submenu{
    titulo: String;
    url: String;
}