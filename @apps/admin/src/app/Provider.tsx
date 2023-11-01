"use client"

import { ReactQuery } from '@shopnest/react-query'

const QueryProvider = ({ children }: { children: React.ReactNode }) => {
  return <ReactQuery>{children}</ReactQuery>
}

export default QueryProvider
