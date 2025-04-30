import Gap from "../Gap";

export default function InputImage({img, style, ...rest}) {
    return (
        <>
            {img && <img src={img} alt="Preview" style={style} />}
            {img && <Gap height={'20px'} />}
            <input type="file" className="block w-4/5 m-auto" {...rest} />
        </>
    )
}
