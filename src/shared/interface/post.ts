export interface IPost {
    userId: number,
    id: number,
    title: string,
    body: string
}

export type Students = Pick<IPost,  | 'id' | 'title' | 'body'>[]

export interface INewPost {
    // userId: number,
    title: string,
    body: string
}