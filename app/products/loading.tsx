export default function ProductsLoading() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header Skeleton */}
        <div className="mb-8 animate-pulse">
          <div className="h-10 bg-gray-200 rounded-xl w-64 mb-4"></div>
          <div className="h-6 bg-gray-200 rounded-lg w-96"></div>
        </div>

        {/* Filters Skeleton */}
        <div className="mb-8 flex gap-4 animate-pulse">
          <div className="h-12 bg-gray-200 rounded-xl w-48"></div>
          <div className="h-12 bg-gray-200 rounded-xl w-48"></div>
          <div className="h-12 bg-gray-200 rounded-xl w-32"></div>
        </div>

        {/* Products Grid Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="card overflow-hidden animate-pulse">
              <div className="h-72 bg-gray-200"></div>
              <div className="p-5">
                <div className="h-6 bg-gray-200 rounded-lg mb-3"></div>
                <div className="h-4 bg-gray-200 rounded-lg mb-2 w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded-lg mb-4 w-1/2"></div>
                <div className="flex justify-between items-center mb-4">
                  <div className="h-8 bg-gray-200 rounded-lg w-24"></div>
                  <div className="h-6 bg-gray-200 rounded-full w-16"></div>
                </div>
                <div className="h-12 bg-gray-200 rounded-xl"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
