import React from 'react'
import Link from 'next/link'

interface Post {
  id?: string
  title: string
  slug?: string | null
  meta?: {
    title?: string | null
    description?: string | null
    image?: string | any | null
  }
  categories?: Array<
    | {
        title: string
      }
    | string
  > | null
}

interface SimplePostPreviewProps {
  posts: Post[]
}

export const SimplePostPreview: React.FC<SimplePostPreviewProps> = ({ posts }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* KOTACOM Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mr-3">
              <span className="text-blue-600 font-bold">K</span>
            </div>
            <span className="text-2xl font-bold">KOTACOM AGENCY</span>
          </div>
          <h1 className="text-4xl font-bold mb-2">Blog & Articles</h1>
          <p className="text-blue-100">Latest insights and updates from our team</p>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="container mx-auto px-6 py-12">
        {posts && posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => {
              const slug = post.slug || 'no-slug'
              return (
                <Link key={post.id || index} href={`/posts/${slug}`}>
                  <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {post.meta?.description || 'Read more about this article...'}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-blue-600 font-medium text-sm hover:text-blue-700">
                          Read More →
                        </span>
                        {post.categories && post.categories.length > 0 && (
                          <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                            {typeof post.categories[0] === 'object'
                              ? post.categories[0].title
                              : post.categories[0]}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl text-gray-400">📝</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No Posts Yet</h3>
            <p className="text-gray-600">
              Posts will appear here once they are published. Check back soon!
            </p>
          </div>
        )}
      </div>

      {/* Back to Home */}
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-6 text-center">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            ← Back to KOTACOM Homepage
          </Link>
        </div>
      </div>
    </div>
  )
}
