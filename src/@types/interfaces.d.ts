export type IDProps = {
    value : string
}

export type NameProps = {
    first : string
}

export type DobDateProps = {
    date : Date
}

export type ImageProps = {
    medium : string
}

export type UserNameProps = {
    username : string
    password?: string
}

export type Data = {
    id      : IDProps
    name    : NameProps
    email   : string
    dob     : DobDateProps
    picture : ImageProps
    login   : UserNameProps
}

export type UserProsp = {
    data : Data[]
}

export type LoginProps = {
    email   : string
    login   : UserNameProps
}

export type NewUserProps = {
    name: {
        first: string;
        last: string;
    };
    email: string;
    login: {
        password: string;
    };
}