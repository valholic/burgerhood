export default function Textarea({name, placeholder, ...rest}) {
    return (
        <textarea className="block w-4/5 p-2 m-auto rounded-md" name={name} placeholder={placeholder} {...rest}></textarea>
    )
}
