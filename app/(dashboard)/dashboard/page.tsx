import auth from '@/auth/auth'
import IdeaGenerator from '@/components/dashboardComponent/ideaComponent'
import { redirect } from 'next/navigation'
import React from 'react'

const DashboardPage = () => {
  const decoded = auth()
  if(decoded === null)
    redirect("/login")
  return (
    <div>
        <IdeaGenerator />
    </div>
  )
}

export default DashboardPage