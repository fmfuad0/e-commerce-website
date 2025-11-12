import '../App.css'

const Header = ()=>{
    return (
        <div className={`container text-text flex w-full`}>
            <p className={`w-[60%] inline-block py-2 text-primary text-sm font-[600]`}>Get up to <span className={`text-red-600 text-lg`}>[50%]</span> off this winter | Limited time offer.</p>
            <div className={`w-[40%] flex justify-end `}>
                <div className={`my-auto text-[13px] flex justify-end`}>
                    <a className={`font-[500] px-3 hover:text-[var(--color-primary)] cursor-pointer border-r-1`}>Help Center</a>
                    <a className={`font-[450] px-3 hover:text-[var(--color-primary)] cursor-pointer`}>Order Tracking</a>
                </div>
                <div className={`my-auto text-[13px] text-text`}>
                    <select >
                        <option className={`font-[500]`}>English</option>
                        <option className={`font-[500]`}>Bengali</option>
                        <option className={`font-[500]`}>Russian</option>
                    </select>
                    <select >
                        <option className={`font-[500]`}>USD</option>
                        <option className={`font-[500]`}>BDT</option>
                        <option className={`font-[500]`}>RUS</option>
                    </select>

                </div>

            </div>
        </div>
    )
}
export default Header;