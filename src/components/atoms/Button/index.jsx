export default function Button({name, img, ...rest}) {
    return (
        <button className="block w-4/5 h-8 m-auto leading-8 text-center text-white bg-black rounded-md cursor-pointer" {...rest} >
            {name}
            {img && <img src={img} className="w-10 h-10 m-auto" />} 
        </button>
    )
}
