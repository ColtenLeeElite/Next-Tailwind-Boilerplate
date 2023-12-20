import { NextPage } from 'next'
import PageHeader from '@/common/layouts/PageHeader'
import Bookmarks from '@/modules/bookmarks'
import BreadCrumb from '@/common/elements/BreadCrumb'
import { appLinks } from '@/common/utils/constants'
import PageContent from '@/common/layouts/PageContent'
import Input from '@/common/elements/Input'
import { Fragment } from 'react'

const BookmakrsPage: NextPage = () => (
  <Fragment>
    <PageHeader className="flex flex-row justify-between">
      <BreadCrumb
        crumbs={[
          {
            text: 'Bookmarks',
            link: appLinks.bookmarks,
          },
        ]}
      />
      <div className="w-[360px]">
        <Input placeholder="Search conversation" className="w-full" />
      </div>
    </PageHeader>
    <PageContent>
      <Bookmarks />
    </PageContent>
  </Fragment>
)

export default BookmakrsPage
