export interface IPhoto {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnalUrl: string
    imageFile: string,
}

export type Students = Pick<IPhoto,  | 'id' | 'albumId' | 'title' | 'url' | 'thumbnalUrl' | 'imageFile'>[]
