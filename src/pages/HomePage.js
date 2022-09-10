import React, { useContext } from 'react'
import { DataContext } from '../App'
import Banner from '../components/homePage/Banner'
import FieldContainer from '../components/homePage/FieldContainer'
import '../Css/HomePage/HomePage.css'
function HomePage(props) {
    const {  isLoading, hasError } = props
    return (
        <>
            <div className="home-body">
                <Banner />
                <FieldContainer
                    isLoading={isLoading}
                    hasError={hasError}
                ></FieldContainer>
            </div>
        </>
    )
}

export default HomePage
