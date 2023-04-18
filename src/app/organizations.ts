export interface Organizations {
    id: number;
    name: string;
    address: string;
    organization: string;
    short_name?: any;
    point?: any;
    object_picture?: any;
    poligons: any[];
    index: number;
    logo?: any;
    type: string;
    childs: any[];
}

export interface Modules {
    id: number,
    tag: string
}