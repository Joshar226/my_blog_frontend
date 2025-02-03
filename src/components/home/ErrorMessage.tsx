
export default function ErrorMessage( {children} : {children : React.ReactNode} ) {
  return (
    <div className="mt-1.5 text-center bg-red-200 border-3 border-red-700 text-red-700 text-lg p-1.5 font-bold">
        {children}
    </div>
  )
}
