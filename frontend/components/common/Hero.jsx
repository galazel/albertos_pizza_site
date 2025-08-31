import React from 'react'
import NavigationBar from './NavigationBar'
import Footer from './Footer'

export default function Hero(props) {
  return (
    <header className="bg-[url('/menu-images/menu-bg.jpg')] bg-fixed h-[60vh] w-full bg-cover bg-center flex flex-col gap-y-20 relative">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="z-10">
        <NavigationBar />
        <div className="flex flex-col justify-center items-center gap-5 mt-10">
          <h1 className="text-8xl font-bold text-white">{props.name}</h1>
          <p className="w-[50rem] text-center text-white">
            Dignissim sed suscipit mattis neque, in nibh blandit at nec in urna
            tristique ornare aliquam orci augue vestibulum dignissim vel
            aliquam.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center mt-32">
        <div className="flex flex-col">
          <div>
           {props.div}
          </div>
        </div>
      </div>
      <Footer />
    </header>
  )
}
