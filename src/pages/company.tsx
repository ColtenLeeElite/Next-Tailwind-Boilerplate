import { FC, Fragment } from 'react'
import PageHeader from '@/common/layouts/PageHeader'
import Company from '@/modules/company'
import BreadCrumb from '@/common/elements/BreadCrumb'
import { appLinks } from '@/common/utils/constants'
import PageContent from '@/common/layouts/PageContent'

const AgentsPage: FC = () => (
  <Fragment>
    <PageHeader>
      <BreadCrumb
        crumbs={[
          {
            text: 'Company',
            link: appLinks.company,
          },
        ]}
      />
    </PageHeader>
    <PageContent>
      <Company />
    </PageContent>
  </Fragment>
)

export default AgentsPage
