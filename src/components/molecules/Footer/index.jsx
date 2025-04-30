import { Facebook, Gojek, Grab, Instagram, Twitter } from "../../../assets";

export default function Footer() {
    return (
        <>
            <div className="flex flex-wrap bg-yellow-pastel">
                <div className="flex h-10 gap-5 mx-auto my-5 w-80">
                    <img src={Facebook} alt="Facebook" className="cursor-pointer" />
                    <img src={Twitter} alt="Twitter" className="cursor-pointer" />
                    <img src={Instagram} alt="Instagram" className="cursor-pointer" />
                    <img src={Gojek} alt="Gojek" className="cursor-pointer" />
                    <img src={Grab} alt="Grab" className="cursor-pointer" />
                </div>
            </div>
            <div className="h-8 text-center bg-yellow-darker">
                    <p>Copyright 2024</p>
            </div>
        </>
    )
}
