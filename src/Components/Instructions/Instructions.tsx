import React from "react";

type instructionsProps = {
    heading: string;
    paragraphs: string[];
}

type paragraphs = {
    paragraphs : string[];
}

type paragraphProps = {
    paragraph: string;
    i: number;
}

const Paragraph = ({paragraph, i} : paragraphProps): React.ReactElement => {
    return <li><p><strong>Step {i}</strong></p> <p>{paragraph}</p></li>
}

const Paragraphs = ({paragraphs}: paragraphs) => {
    const makeParagraphs = (paragraphs: string[]) => paragraphs.map((paragraph:string, i:number) => <Paragraph paragraph={paragraph} i={i} />);
    return (
        <ol>{makeParagraphs(paragraphs)}</ol>
    )
}

const Instructions = ({heading, paragraphs}:instructionsProps) => {
return (
    <article>
        <h1>{heading}</h1>
        <Paragraphs paragraphs={paragraphs}/>
    </article>
)
}

export default Instructions