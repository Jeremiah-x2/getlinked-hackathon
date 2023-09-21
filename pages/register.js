import React from 'react'
import Head from 'next/head'
import Register from '../pages/components/register/Register'
function RegisterPage() {
    return (
        <div>
            <Head>
                <title>GetLinked | Register</title>
                <meta name="description" content="GetLinked - registration" />
            </Head>
            <Register />
        </div>
    )
}

export default Register