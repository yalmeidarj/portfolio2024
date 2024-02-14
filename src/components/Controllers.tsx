import LanguageSelector from "./LanguageSelector";
import ThemeSwitch from "./ThemeSwitch";

export default function Controllers() {
    return (
        <div
            className="flex flex-row gap-4 w-full max-w-[190px] my-2 px-4 py-2 justify-between items-center dark:bg-custom-title bg-black rounded-md "
        >
            <ThemeSwitch />
            <LanguageSelector />
        </div>
    );

}