interface PostFields {
    title: string
    slug: string
    publicationDate: string
    category: string
    content: any
    funding: any
}

interface ContentNode {
    data: any
    content: Array<any>
    nodeType: 'paragraph' | 'embedded-asset-block' | 'unordered-list'
}
