import {memo} from 'react'

type Props = {
    paragraph: string
}

const Paragraph = ({paragraph}:Props) => {
    return <p>{paragraph}</p>
}

export default memo(Paragraph)