export default function SelectInput({optionArray, ...rest}) {
    return (
        <select name="type" id="type" className="block w-4/5 p-1 m-auto rounded-md h-9 font-Lilita-one" {...rest}> 
            <option value="">Select type</option> 
            {optionArray.map(option => ( <option value={option} key={option}>{option}</option> ))} 
        </select>
    )
}
