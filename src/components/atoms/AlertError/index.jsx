export default function AlertError({text}) {
    return (
        <>
        <div className="w-4/5 h-10 py-1 m-auto mt-5 text-base text-center bg-red-200 border-4 border-red-300 rounded-md font-Lilita-one">
            {text}
        </div>
        </>
    )
}