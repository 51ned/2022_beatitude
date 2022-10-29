import { NextSeo } from 'next-seo'

import { Footer } from 'components'


interface GlobalLayoutProps { children: React.ReactNode }


export function GlobalLayout(pr: GlobalLayoutProps) {
  return (
    <>
      <NextSeo />

      { pr.children }

      <Footer />
    </>
  )
}