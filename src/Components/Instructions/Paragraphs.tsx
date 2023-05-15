import Paragraph from './Paragraph'

type Props = {
    paragraphs : string[]
}

const Paragraphs = ({paragraphs}: Props) => {
    return paragraphs.map((paragraph:string) =><> <Paragraph paragraph={paragraph} /></>)
}

export default Paragraphs