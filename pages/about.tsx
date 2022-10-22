import type { NextPage } from "next";
import { PrimaryButton } from "../components/Button"
import Link from 'next/link'

const About: NextPage = () => {
    return <>
        <h1>This is heading</h1>
        <p>This is paragraphs</p>
        <Link href="/">GO Bak</Link>
    </>
}

export default About 