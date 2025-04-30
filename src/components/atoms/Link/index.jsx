export default function Link({text, ...rest}) {
    return (
        <p className="text-center cursor-pointer text-slate-400 font-Lilita-one" {...rest}>{text}</p>
    )
}
