import React, { useState, useEffect } from 'react'
import "./TopBanner.scss"
import { Image } from 'react-bootstrap'
import { auth, storage } from '../../data/firebase'
import PersonalData from "../PersonalData/PersonalData"
import BannerHello from "../../assets/img/Banner-hello.png"
import { useAuth } from "../../context/AuthContext"
import { ref, listAll, getDownloadURL } from 'firebase/storage';


const TopBanner = () => {


    const { useGetUserProfile } = useAuth()
    useGetUserProfile()
    const { userProfile, currentUser } = useAuth()

    const [image, setImage] = useState(null)
    const [Url, setUrl] = useState(null)

    let emailUser = ""
    let emailClear = ""


    {
        (() => {
            if (currentUser) {
                emailUser = currentUser.email
                emailClear = `${emailUser}`.replace("@", "").replace(".", "").trim()
            }
        })()
    }
    var storageRef = null
    try {
         storageRef = ref(storage, `Users/${emailClear}/Avatar.jpg`)
    } catch {

    }
    emailUser = currentUser.email
    emailClear = `${emailUser}`.replace("@", "").replace(".", "").trim()

    const download = () => {
        try {
            getDownloadURL(storageRef).then((downloadURL) => {
                setUrl(downloadURL)
            })
        } catch {

        }
    }

    download()
    // listAll(storageRef(storage, `Users/${emailClear}`)).then((response) => {

    //     // setAvatarSrc(response.items[0].getDownloadURL)
    //     setAvatarSrc(getDownloadURL(response.items[0]))
    //     console.log("CZY TO MAMY?", avatarSrc)
    // })




    return (
        <>

            <div className='top-banner-wrapper'>
                <div className='top-banner-personal'>
                    <PersonalData customName={userProfile} avatarURL={Url ? Url : null} email={emailUser} />
                </div>

                <div className='top-banner-graphics'>

                    <Image
                        src={BannerHello}
                        //width auto to make actual size
                        style={{
                            maxWidth: "100%", height: "100%", float: 'right',
                            objectFit: 'cover'
                        }}
                    />

                </div>
            </div>
        </>

    )


}


export default TopBanner

