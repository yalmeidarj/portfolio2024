import LanguageSelector from "./LanguageSelector";
import ThemeSwitch from "./ThemeSwitch";

export default function Controllers() {
    return (
        <div
            className="flex dark:text-custom-nav-light flex-row w-full max-w-[190px] my-2 justify-end items-center "
        >
            <LanguageSelector />
            <ThemeSwitch />
        </div>
    );

}