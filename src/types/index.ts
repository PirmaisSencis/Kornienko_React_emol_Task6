export type TextComponentType = { 
    title: string,
    date: string,
    info: string,
    source: TextComponentElementType[];
}
type TextComponentElementType = {
    link: string,
    text: string,
}
