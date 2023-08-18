import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import Image from 'next/image'
import { Button, Modal } from './ux'
import { setHeader } from '@/redux/slice/headerStatu.Slice'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
/* import Connexion from './Connexion' */
import { ClientInterface, selectClient } from '@/redux/slice/clientSlice'


export default function Header() {
    const HeaderRedux = useSelector((state: any) => state.Header)
    const ClientRedux: ClientInterface = selectClient(useSelector((state: any) => state))
    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch()
    const [openModalConnexion, setOpenModalConnexion] = useState(false)

    useEffect(() => {
        setIsOpen(HeaderRedux.isOPen)
    }, [HeaderRedux])

    return (
        <header >
            <div > Logo </div>
        </header >
    )
}
