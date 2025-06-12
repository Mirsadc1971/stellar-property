
import { Skeleton } from '@/components/ui/skeleton';

export function PageLoading() {
  return (
    <div className="min-h-screen">
      {/* Header skeleton */}
      <div className="bg-white shadow-sm p-4">
        <div className="container mx-auto">
          <Skeleton className="h-8 w-64" />
        </div>
      </div>
      
      {/* Breadcrumb skeleton */}
      <div className="bg-gray-50 border-b p-3">
        <div className="container mx-auto">
          <Skeleton className="h-4 w-48" />
        </div>
      </div>
      
      {/* Main content skeleton */}
      <div className="container mx-auto px-4 py-8">
        <Skeleton className="h-12 w-3/4 mb-6" />
        <Skeleton className="h-4 w-full mb-4" />
        <Skeleton className="h-4 w-5/6 mb-4" />
        <Skeleton className="h-4 w-4/5 mb-8" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="space-y-3">
              <Skeleton className="h-48 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
