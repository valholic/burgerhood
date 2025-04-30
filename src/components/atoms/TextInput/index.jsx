export default function TextInput({name, placeholder, ...rest}) {
    return (
        <>
        <input type="text" name={name} placeholder={placeholder} {...rest} className="block w-4/5 h-8 p-2 m-auto rounded-md" />
        </>
    )
}
