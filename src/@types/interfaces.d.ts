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