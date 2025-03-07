export type IDProps = {
    value : string
}

export type NameProps = {
    first : string
    last? : string
}

export type DobDateProps = {
    date : Date
    age: string
}

export type ImageProps = {
    medium : string
    large? : string
}

export type UserNameProps = {
    username : string
    password?: string
}

export type ListUsers = {
    id      : IDProps
    name    : NameProps
    email   : string
    dob     : DobDateProps
    picture : ImageProps
    login   : UserNameProps
    location: LocationModalProps
}

export type UserProsp = {
    listUsers : ListUsers[]
}

export type LoginProps = {
    email : string
    login : UserNameProps
}

export type NewUserProps = {
    name: {
        first: string;
        last : string;
    };
    email: string;
    login: {
        password: string;
    };
}

interface Street {
    name   :  string,
    number : number
}

export type LocationModalProps = {
    street  : Street
    city    : string
    state   : string
    country : string
}
export type ItemModal = { 
    name    : NameProps
    email   : string
    picture : ImageProps
    dob     : DobDateProps
    location: LocationModalProps
}