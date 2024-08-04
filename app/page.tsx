"use client"
import React from 'react'
import { RecoilRoot } from 'recoil'
import App from './App'

function page() {
  return (
    <div>
      <RecoilRoot>
        <App/>
      </RecoilRoot>
    </div>
  )
}

export default page
