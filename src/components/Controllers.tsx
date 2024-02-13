import LanguageSelector from "./LanguageSelector";
import ThemeSwitch from "./ThemeSwitch";

export default function Controllers() {
    return (
        <div
            className="flex flex-row gap-4 max-w-[210px] my-2 px-4 py-2 justify-between items-center bg-black rounded-l-xl "
        >
            <ThemeSwitch />
            <LanguageSelector />
        </div>
    );

}