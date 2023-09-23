import React from 'react'
import Head from 'next/head'
import Register from '../pages/components/register/Register'
function RegisterPage() {
    return (
        <>
            <Head>
                <title>GetLinked | Register</title>
                <meta name="description" content="GetLinked - registration" />
            </Head>
            <Register />
        </>
    )
}

export default Register