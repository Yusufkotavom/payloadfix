import type { Metadata } from 'next/types'

import { Pagination } from '@/components/Pagination'
import { SimplePostPreview } from '@/components/SimplePostPreview'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import PageClient from './page.client'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 12,
    overrideAccess: false,
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
    },
  })

  return (
    <div>
      <PageClient />
      <SimplePostPreview posts={posts.docs} />

      {/* Pagination if needed */}
      {posts.totalPages > 1 && posts.page && (
        <div className="bg-gray-50 py-8">
          <div className="container mx-auto px-6">
            <Pagination page={posts.page} totalPages={posts.totalPages} />
          </div>
        </div>
      )}
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: `Blog & Articles - KOTACOM AGENCY`,
    description: 'Latest insights and updates from KOTACOM AGENCY team',
  }
}
