/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import Main from '@/components/Main'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Link from 'next/link'



export default function Home() {


    return (
        <Main
            pageTitle={"Page d'accueille"}
            className='home hp-m'
            pageDescription={`loremp ipsum dolor sit amet, consectetur adipiscing elit. Nullam e`}

        >
            <div>SALUT LES LOULOU</div>


        </Main>
    )
}
