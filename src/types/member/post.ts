export interface Member {
    id: number
    name: string
}

export interface Comment {
    id: number
    author: string
    text: string
}

export interface Post {
    id: number
    author: string
    content: string
    image: string | null
    likes: number
    liked: boolean
    showComments: boolean
    comments: Comment[]
    tags: number[]
}
