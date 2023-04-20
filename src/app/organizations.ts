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
    data: IOrgData[][]
    trustworthy: boolean
}

interface IOrgData {
    name: string
    type: string
    other: boolean
    required: boolean
    front_type: string
    value: string | number | null

    end_time?: string
    start_time?: string
    state?: boolean
    workday?: number
}

export interface Modules {
    id: number,
    tag: string
}
