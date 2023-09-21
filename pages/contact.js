import React from 'react'
import Head from 'next/head'
import Contact from './components/contact/Contact'

function ContactPage() {
    return (
        <div>
            <Head>
                <title>GetLinked | Contact</title>
                <meta name="description" content="GetLinked - Contact" />
            </Head>
            <Contact />
        </div>
    )
}

export default ContactPage