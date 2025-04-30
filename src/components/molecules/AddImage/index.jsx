import { Button, InputImage } from "../../atoms";

export default function AddImage({handleChange, handleConfirm, onSubmit}) {
    return (
        <div className="fixed z-50 flex items-center justify-center w-full h-full">
            <div className="fixed top-0 z-30 w-full h-full bg-slate-200 opacity-70"></div>
            <div className="absolute z-40 flex flex-wrap items-center justify-center w-1/3 p-3 border-black rounded-lg opacity-100 h-36 font-Lilita-one bg-slate-300">
                <InputImage onChange={e => handleChange(e)} />
                <div className="flex flex-wrap w-full">
                    <Button name={'Cancel'} style={{width: '60px'}} onClick={() => handleConfirm(false)} />
                    <Button name={'Update'} style={{width: '60px'}} onClick={() => {
                        onSubmit();
                        handleConfirm(false);
                        }} />
                </div>
            </div>
        </div>
    )
}
