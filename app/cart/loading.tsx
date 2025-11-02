export default function CartLoading() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="animate-pulse">
          {/* Header */}
          <div className="h-10 bg-gray-200 rounded-xl w-48 mb-8"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="card p-6 flex gap-4">
                  <div className="w-24 h-24 bg-gray-200 rounded-xl"></div>
                  <div className="flex-1">
                    <div className="h-6 bg-gray-200 rounded-lg mb-2 w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded-lg mb-4 w-1/2"></div>
                    <div className="h-8 bg-gray-200 rounded-lg w-32"></div>
                  </div>
                  <div className="h-6 bg-gray-200 rounded-lg w-20"></div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="card p-6 sticky top-24">
                <div className="h-8 bg-gray-200 rounded-xl mb-6"></div>
                <div className="space-y-4 mb-6">
                  <div className="h-4 bg-gray-200 rounded-lg"></div>
                  <div className="h-4 bg-gray-200 rounded-lg"></div>
                  <div className="h-6 bg-gray-200 rounded-lg"></div>
                </div>
                <div className="h-14 bg-gray-200 rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
