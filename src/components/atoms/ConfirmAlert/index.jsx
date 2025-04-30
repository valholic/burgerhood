import Button from "../Button";

export default function ConfirmAlert({text, handleConfirm}) {
    return (
        <div className="fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center">
            <div className="fixed top-0 bottom-0 left-0 right-0 z-[999] bg-slate-200 opacity-70" />
            <div className="absolute z-[9999] w-1/3 p-3 text-center border-black rounded-lg opacity-100 h-36 font-Lilita-one bg-slate-200">
                <h1 className="mb-3 text-2xl">Confirm</h1>
                <p className="mb-3">{text}</p>
                <div className="flex flex-wrap">
                    <Button name={'No'} style={{width: '60px'}} onClick={() => handleConfirm('no')} />
                    <Button name={'Yes'} style={{width: '60px'}} onClick={() => handleConfirm('yes')} />
                </div>
            </div>
        </div>
    )
}
